import { useState, useEffect } from "react";
import home1 from "../assets/images/wooden/wooden-villa.jpg";
import home2 from "../assets/images/glassvilla/glass villa2.jpg";
import home3 from "../assets/images/bali/baliimg2.jpg";

const slides = [
  {
    image: home1,
  },
  {
    image: home2,
    caption: "Build the Future You Deserve",
    subtitle: "Quality construction with world-class amenities",
  },
  {
    image: home3,
    caption: "Your Dream Home Awaits",
    subtitle: "Hyderabad’s most trusted real-estate developers",
  },
  {
    image: home1,
    caption: "Luxury Living Redefined",
    subtitle: "Experience comfort, convenience & premium lifestyle",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [curtainOpen, setCurtainOpen] = useState(false);

  // Curtain animation on load
  useEffect(() => {
    setTimeout(() => setCurtainOpen(true), 300);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">

      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[800ms] ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0"></div>

            {/* Caption */}
            {isActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.caption}
                </h1>

                <p className="text-gray-200 text-lg sm:text-2xl mb-6 tracking-wide">
                  {slide.subtitle}
                </p>

                
              </div>
            )}
          </div>
        );
      })}

      {/* PREV / NEXT BUTTONS - Bottom Right */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-30">
        <button
          onClick={prevSlide}
          className="px-7 py-2 bg-white/90 text-black font-semibold rounded-lg shadow hover:bg-white transition"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-white/90 text-black font-semibold rounded-lg shadow hover:bg-white transition"
        >
          Next
        </button>
      </div>

      {/* Curtain Animation */}
      <div
        className={`absolute inset-0 bg-black z-40 transition-transform duration-[2000ms] ${
          curtainOpen ? "translate-y-full" : ""
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
          Welcome To MyBhoomee
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
