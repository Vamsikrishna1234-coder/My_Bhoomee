import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { id: 1, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop" },
  { id: 6, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop" },
];

const GallerySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect mobile or tablet screen
  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (e, index, id) => {
    e.stopPropagation();
    if (isMobileOrTablet) {
      // directly open gallery page on mobile/tablet
      window.location.href = `/gallery?project=${id}`;
      return;
    }

    // desktop animation logic
    if (!isExpanded) {
      setIsExpanded(true);
    } else if (index === 0) {
      setIsExpanded(false);
    } else {
      window.location.href = `/gallery?project=${id}`;
    }
  };

  const getCardTransform = (index) => {
    if (!isExpanded) {
      return {
        transform: `translateX(-50%) translateY(0px)`,
        zIndex: index === 0 ? 100 : 40 - index * 10,
        opacity: index === 0 ? 1 : 0,
        pointerEvents: index === 0 ? "auto" : "none",
      };
    }

    switch (index) {
      case 0:
        return { transform: "translateX(-50%) translateY(0px)", zIndex: 100, opacity: 1 };
      case 1:
        return { transform: "translateX(calc(-50% - 450px)) translateY(0px)", zIndex: 90, opacity: 1 };
      case 2:
        return { transform: "translateX(calc(-50% + 450px)) translateY(0px)", zIndex: 90, opacity: 1 };
      case 3:
        return { transform: "translateX(calc(-50% - 450px)) translateY(420px)", zIndex: 90, opacity: 1 };
      case 4:
        return { transform: "translateX(-50%) translateY(420px)", zIndex: 90, opacity: 1 };
      case 5:
        return { transform: "translateX(calc(-50% + 450px)) translateY(420px)", zIndex: 90, opacity: 1 };
      default:
        return {};
    }
  };

  return (
    <section className="py-16 bg-[#11689B] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            MyBhumi <span className="text-white">Gallery</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Capturing moments of joy, trust, and new beginnings
          </p>
          {!isExpanded && !isMobileOrTablet && (
            <p className="text-sm text-gray-200 mt-3">Click on the card to View all images</p>
          )}
        </div>

        {/* Desktop View (Animated Cards) */}
        {!isMobileOrTablet && (
          <div
            className="max-w-7xl mx-auto relative transition-all duration-700 ease-in-out"
            style={{
              minHeight: isExpanded ? "900px" : "500px",
              transition: "min-height 0.8s ease",
            }}
          >
            <div
              className="relative w-full flex justify-center"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {galleryImages.map((image, index) => {
                const style = getCardTransform(index);
                return (
                  <div
                    key={image.id}
                    className="absolute left-1/2 top-0 w-full md:w-[420px] transition-all duration-700 ease-out"
                    style={style}
                    onClick={(e) => handleCardClick(e, index, image.id)}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white cursor-pointer hover:shadow-2xl transition-transform duration-300">
                      <div className="relative h-[380px] overflow-hidden rounded-2xl">
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        {isExpanded && (
                          <div className="absolute inset-0 bg-gradient-to-t from-[#11689B]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {index === 0 ? "Click to Close" : "Click to View"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* View Gallery Button */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                  isExpanded ? "top-[860px]" : "top-[420px]"
                }`}
              >
                <button
                  onClick={() => (window.location.href = "/gallery")}
                  className="inline-flex items-center gap-2 px-7 py-2.5 bg-white text-[#11689B] font-semibold text-sm rounded-full hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
                >
                  View Gallery
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile & Tablet View (Stacked Grid, No Animation) */}
        {isMobileOrTablet && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => (window.location.href = `/gallery?project=${image.id}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#11689B]/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
