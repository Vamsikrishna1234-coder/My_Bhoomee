import React, { useEffect, useState } from "react";
import villa1 from "../assets/images/wooden/wooden-villa.jpg";
import { MapPin } from "lucide-react";

const OngoingProject = () => {
  const [reveal, setReveal] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 300);
  }, []);

  return (
    <section className="py-20 bg-[#F8F2E9]">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <span className="text-[#11689B] uppercase text-sm font-semibold tracking-widest">
          Ongoing Project
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          ONYX Luxury Villas – MyBhoomee
        </h2>

        <div className="w-20 h-1 bg-[#11689B] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* FULL WIDTH IMAGE WITH OVERLAY BUTTON */}
      <div className="px-2.5"> {/* 10px left & right padding */}
        <div
          className="relative w-full h-[580px]  overflow-hidden shadow-2xl"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* IMAGE */}
          <img
            src={villa1}
            alt="ONYX Villas"
            className="w-full h-full object-cover"
          />

          {/* CURTAIN REVEAL ANIMATION */}
          <div
            className={`absolute inset-0 bg-white transition-transform duration-[1400ms] ease-out ${
              reveal ? "translate-y-full" : ""
            }`}
          ></div>

          {/* BLACK OVERLAY ON HOVER */}
          <div
            className={`absolute inset-0 bg-black/40 transition-all duration-500 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* VIEW PROJECT BUTTON ON HOVER */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              hover ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <button
              onClick={() => (window.location.href = "/projects")}
              className="px-8 py-3 bg-white text-[#11689B] font-semibold rounded-full shadow-lg hover:bg-[#11689B] hover:text-[#11689B] transition-all duration-300"
            >
              View Project
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION BELOW IMAGE (same width as image) */}
      <div className="px-2.5 max-w-9xl mx-auto mt-6">

        {/* Location */}
        <p className="flex items-center gap-2 text-[#11689B] text-sm">
          <MapPin size={18} className="text-[#11689B]" />
          Moinabad, Hyderabad
        </p>

        {/* Description */}
        <p className="text-gray-700 text-lg mt-4 leading-relaxed max-w-10xl">
          ONYX Villas bring a beautiful balance between elegant architecture and
          peaceful green surroundings. Designed for premium lifestyle seekers,
          these villas offer spacious interiors, modern aesthetics, and a serene
          environment that elevates everyday living.
        </p>

        <div className="flex justify-center">
        <button
          onClick={() => (window.location.href = "/projects")}
          className="mt-6 px-6 py-2 bg-[#11689B] text-white font-semibold rounded-full shadow-lg hover:bg-[#0e4e70] transition-all duration-300 text-center"
        >
          Explore Project
        </button>
      </div>

      </div>

    </section>
  );
};

export default OngoingProject;
