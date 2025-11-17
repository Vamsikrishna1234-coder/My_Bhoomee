import React from "react";
import villa1 from "../assets/images/wooden/wooden-villa.jpg";
import villa2 from "../assets/images/glassvilla/glass villa2.jpg";
import { useNavigate } from "react-router-dom";

export default function AboutStorySection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#e9f4fa] via-white to-[#d9e9f3] overflow-hidden">

      {/* Background Soft Shapes */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#11689B]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0e5a87]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT IMAGES SECTION */}
        <div className="relative flex items-center justify-center">

          {/* DESKTOP + TABLET FLOAT IMAGES (md and up) */}
          <div className="hidden md:block w-full h-[600px] relative">
            
            {/* Main Floating */}
            <div className="absolute left-4 md:left-6 w-[78%] h-[78%] rounded-3xl overflow-hidden shadow-2xl animate-softFloat z-20">
              <img src={villa1} className="w-full h-full object-cover" />
            </div>

            {/* Second Floating */}
            <div className="absolute right-2 bottom-4 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-xl animate-softFloatReverse z-30">
              <img src={villa2} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* MOBILE CARD VIEW ONLY (sm and below) */}
          <div className="flex flex-col gap-6 w-full md:hidden">

            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <img src={villa1} className="w-full h-64 object-cover" />
            </div>

            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <img src={villa2} className="w-full h-64 object-cover" />
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: "linear-gradient(to right, #11689B, #0e5a87)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Journey
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify hyphens-auto">
            MyBhumi began with a dream to transform luxury living in Hyderabad’s 
            green heart. We craft homes that breathe — where modern design meets 
            nature’s embrace. Nestled in Moinabad’s peaceful surroundings, our villa 
            communities offer privacy, greenery, and architectural excellence. 
            Every villa is built using premium materials, intelligent planning, 
            and smart automation to ensure long-term durability and modern comfort. 
            With over 12 world-class amenities, landscaped gardens, and RERA-compliant 
            development, MyBhumi stands for trust, transparency, and quality.  
            We don’t just create homes — we create spaces where families grow, 
            memories are celebrated, and lifestyles are elevated.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 flex-wrap">
            <button
              onClick={() => navigate("/aboutus")}
              className="px-8 py-3 bg-[#11689B] text-white rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Our Story
            </button>

            <button className="px-8 py-3 border-2 border-[#11689B] text-[#11689B] rounded-full hover:bg-[#11689B] hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes softFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-18px); }
            100% { transform: translateY(0px); }
          }
          @keyframes softFloatReverse {
            0% { transform: translateY(0px); }
            50% { transform: translateY(18px); }
            100% { transform: translateY(0px); }
          }
          .animate-softFloat { animation: softFloat 5s ease-in-out infinite; }
          .animate-softFloatReverse { animation: softFloatReverse 5s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
