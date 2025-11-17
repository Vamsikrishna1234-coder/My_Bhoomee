import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Wooden1 from "../assets/images/wooden/wooden natural .jpg";
import Wooden3 from "../assets/images/wooden/wooden garden.jpg";
import Kerala2 from "../assets/images/manduva/kerala manduva2.jpg";
import Kerala3 from "../assets/images/manduva/kerala manduva3.jpg";
import Glass2 from "../assets/images/glassvilla/glass villa1.png";
import Glass3 from "../assets/images/glassvilla/glass villa2.jpg";

const galleryImages = [Wooden1, Wooden3, Kerala2, Kerala3, Glass2, Glass3];

const GallerySection = () => {
  const sliderRef = useRef(null);
  const isDesktop = window.innerWidth >= 1024;
  const cardWidthDesktop = 400;
  const cardGap = 23;

  // --- Auto Scroll Only For Desktop ---
  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      handleNext();
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.style.scrollBehavior = "smooth";

    if (isDesktop) {
      slider.scrollLeft -= cardWidthDesktop + cardGap;
    } else {
      slider.scrollLeft -= slider.clientWidth;
    }
  };

  const handleNext = () => {
    const slider = sliderRef.current;
    slider.style.scrollBehavior = "smooth";

    if (isDesktop) {
      slider.scrollLeft += cardWidthDesktop + cardGap;
    } else {
      slider.scrollLeft += slider.clientWidth;
    }

    // Restart loop for desktop only
    setTimeout(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = 0;
      }
    }, 350);
  };

  return (
    <section className="py-12 bg-[#E9F3F9]">
      <div className="relative w-full overflow-hidden">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#11689B] text-center mb-8">
          MyBhumi Gallery
        </h2>

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#11689B] hover:bg-gray-100 shadow-md w-10 h-10 flex items-center justify-center rounded-full z-20"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-hidden select-none"
          style={{
            gap: isDesktop ? `${cardGap}px` : "0px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 cursor-pointer"
              style={{
                width: isDesktop ? `${cardWidthDesktop}px` : "100vw",
                height: isDesktop ? "480px" : "340px",
              }}
              onClick={() =>
                (window.location.href = `/gallery?project=${(idx % galleryImages.length) + 1}`)}
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#11689B] hover:bg-gray-100 shadow-md w-10 h-10 flex items-center justify-center rounded-full z-20"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <style>{`::-webkit-scrollbar{display:none;}`}</style>
    </section>
  );
};

export default GallerySection;
