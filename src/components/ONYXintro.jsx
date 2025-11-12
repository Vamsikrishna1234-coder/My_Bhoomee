import React, { useState, useEffect } from "react";
import woodenhouse from "../assets/images/wooden/wooden-villa.jpg";
import wooden2 from "../assets/images/glassvilla/glass villa.jpg";
import wooden3 from "../assets/images/manduva/manduva villa.jpg";
import wooden4 from "../assets/images/bali/baliimg3.png";

const OnyxIntro = () => {
  const images = [woodenhouse, wooden2, wooden3, wooden4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Smooth auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2700);
    return () => clearInterval(interval);
  }, [images.length]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[85vh] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Images Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>

      {/* Floating Particles (subtle visual effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-pulse opacity-40"></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-48 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Centered Main Content */}
      <div className="relative z-20 text-center px-6 sm:px-8 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none drop-shadow-lg">
          ONYX
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-400"></div>
          <h2 className="text-2xl md:text-3xl text-white font-light italic">
            A Life Closer to Nature
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-400"></div>
        </div>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          Experience serenity and sophistication at{" "}
          <span className="text-green-400 font-semibold">Onyx</span> — a
          green-living paradise where luxury meets nature. Every sunrise feels
          like a new beginning in this tranquil sanctuary.
        </p>

        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OnyxIntro;
