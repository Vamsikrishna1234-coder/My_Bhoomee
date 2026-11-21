
import React, { useState, useEffect } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const galleryImages = [
  "https://admin.bhoomathagroup.com/images/projects/Gallery-(4)_11zon_2mw0nvjg3.webp",
  "https://admin.bhoomathagroup.com/images/projects/Gallery-(7)_8nmjplqhi.webp",
  "https://admin.bhoomathagroup.com/images/projects/Gallery-(6)_5o0zuegor.webp",
  "https://admin.bhoomathagroup.com/images/projects/Gallery-(5)_92biul6g6.webp",
  "https://admin.bhoomathagroup.com/images/projects/Gallery-(8)_2j6tuiga9.webp",
  "https://admin.bhoomathagroup.com/images/projects/rrp08945_optimized_bnt2yqvr0.jpg",
  "https://admin.bhoomathagroup.com/images/projects/rrp08785_optimized_21dscktyv.jpg",
  "https://admin.bhoomathagroup.com/images/projects/rrp08942_optimized_edq383ag6.jpg",
  "https://admin.bhoomathagroup.com/images/projects/Gallery-(8)_2j6tuiga9.webp",
];

const INITIAL_IMAGES = 6;

const ProjectGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_IMAGES);

  const openImage = (index) => {
    setSelectedImage(index);
    setZoom(1);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const previousImage = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
    setZoom(1);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();

      if (e.key === "+" || e.key === "=") {
        setZoom((prev) => Math.min(prev + 0.25, 3));
      }

      if (e.key === "-") {
        setZoom((prev) => Math.max(prev - 0.25, 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    document.body.style.overflow =
      selectedImage !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1650px]">

        {/* HEADING */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <h2 className="shrink-0 text-3xl font-extrabold text-[#153d7a] sm:text-4xl lg:text-5xl">
            Project Gallery
          </h2>
          <div className="mt-2 h-[2px] flex-1 bg-[#FBBD23]" />
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openImage(index)}
              aria-label={`Open gallery image ${index + 1}`}
              className="group aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 outline-none"
            >
              <img
                src={image}
                alt={`Project gallery ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* VIEW MORE */}
        {galleryImages.length > INITIAL_IMAGES && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full bg-[#FBBD23] px-9 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#053279] hover:shadow-lg"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        {/* LIGHTBOX */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
            onClick={closeImage}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={closeImage}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#82bd40] sm:right-7 sm:top-7"
            >
              <X size={25} />
            </button>

            {/* COUNTER */}
            <div className="absolute left-5 top-6 z-50 text-sm font-semibold text-white">
              {selectedImage + 1} / {galleryImages.length}
            </div>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-[#82bd40] sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={28} />
            </button>

            {/* IMAGE */}
            <div
              className="flex h-full w-full max-w-[1300px] items-center justify-center overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={selectedImage}
                src={galleryImages[selectedImage]}
                alt={`Project gallery ${selectedImage + 1}`}
                draggable="false"
                style={{ transform: `scale(${zoom})` }}
                className="max-h-[80vh] max-w-[85%] select-none object-contain transition-transform duration-300"
              />
            </div>

            {/* NEXT */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-[#82bd40] sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight size={28} />
            </button>

            {/* ZOOM CONTROLS */}
            <div className="absolute bottom-7 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/60 p-2 backdrop-blur-md">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((prev) => Math.max(prev - 0.25, 1));
                }}
                disabled={zoom <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/20 disabled:opacity-40"
              >
                <ZoomOut size={20} />
              </button>

              <span className="min-w-[50px] text-center text-xs font-semibold text-white">
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((prev) => Math.min(prev + 0.25, 3));
                }}
                disabled={zoom >= 3}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/20 disabled:opacity-40"
              >
                <ZoomIn size={20} />
              </button>

              <div className="mx-1 h-6 w-px bg-white/20" />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(1);
                }}
                className="rounded-full px-3 py-2 text-xs font-semibold text-white hover:bg-white/20"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
