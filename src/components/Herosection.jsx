import { useState, useEffect } from "react";
import home1 from "../assets/images/bannerhero1.jpg";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home5.jpg";
import home4 from "../assets/images/home4.jpg";

const slides = [
  { image: home1 },
  { image: home2 },
  { image: home3 },
  { image: home4 },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [curtainOpen, setCurtainOpen] = useState(false);

  // Curtain animation on load
  useEffect(() => {
    setTimeout(() => setCurtainOpen(true), 300);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="
        relative w-full
        min-h-[70vh]           /* Mobile height */
        sm:min-h-[80vh]        /* Tablet height */
        md:min-h-[90vh]        /* Small desktop height */
        xl:min-h-screen        /* Large desktop unchanged */
        bg-black overflow-hidden
      "
    >
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
              className="
                w-full h-full object-cover
                object-center
              "
            />

            {/* Caption */}
            {isActive && (
              <div
                className="
                  absolute inset-0 flex flex-col justify-center items-center
                  text-center px-4 sm:px-6
                  z-20
                "
              >
                <h1
                  className="
                    text-white 
                    text-3xl sm:text-5xl md:text-6xl xl:text-6xl 
                    font-bold mb-4 drop-shadow-xl
                  "
                >
                  {/* Optional caption */}
                </h1>

                <p
                  className="
                    text-gray-200
                    text-base sm:text-xl md:text-2xl 
                    max-w-[700px] leading-relaxed
                  "
                ></p>
              </div>
            )}
          </div>
        );
      })}

      {/* PREV / NEXT BUTTONS */}
      <div
        className="
          absolute 
          bottom-4 right-4 
          sm:bottom-6 sm:right-6 
          flex gap-3 
          z-30
        "
      >
        <button
          onClick={prevSlide}
          className="
            px-4 py-2 sm:px-6 
            bg-white/90 text-black 
            font-semibold rounded-lg shadow-md 
            hover:bg-white transition
          "
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="
            px-4 py-2 sm:px-6 
            bg-white/90 text-black 
            font-semibold rounded-lg shadow-md 
            hover:bg-white transition
          "
        >
          Next
        </button>
      </div>

      {/* Curtain Animation */}
      <div
        className={`
          absolute inset-0 bg-black z-40 
          transition-transform duration-[2000ms]
          ${curtainOpen ? "translate-y-full" : ""}
        `}
      >
        <div
          className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            text-white
            text-3xl sm:text-4xl md:text-5xl xl:text-6xl
            font-bold tracking-wide
          "
        >
          Welcome To MyBhoomee
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
