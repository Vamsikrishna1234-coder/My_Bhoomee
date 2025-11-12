import { useState, useEffect } from "react";
import home1 from "../assets/images/wooden/wooden-villa.jpg";
import home2 from "../assets/images/glassvilla/glass villa2.jpg";
import home3 from "../assets/images/manduva/kerala manduva1.jpg";
import home4 from "../assets/images/wooden/wooden garden.jpg";
import Preloader from "./Preloader";

const slides = [
  {
    image: home1,
  },
  {
    image: home2,
    caption: "Invest in Real Estate — Because Every Square Foot Matters",
  },
  {
    image: home3,
  },
  {
    image: home4,
    caption: "Build the Future You Deserve",
  },
];

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  // ✅ Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = slides.map(
        (slide) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = slide.image;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );
      await Promise.all(promises);
      setTimeout(() => setLoading(false), 600);
    };
    loadImages();
  }, []);

  // ✅ Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-black">
        <Preloader />
      </div>
    );
  }

  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-black mt-[80px]">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[calc(100vh-80px)] relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
              <h1 className="text-white text-3xl sm:text-5xl font-bold px-4 max-w-3xl animate-fadeIn">
                {slide.caption}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Prev & Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-white scale-110" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      {/* Smooth fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
