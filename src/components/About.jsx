import React, { useEffect, useState } from "react";
import img1 from "../assets/images/wooden/wooden-villa.jpg";
import img2 from "../assets/images/glassvilla/glass villa2.jpg";
import img3 from "../assets/images/bali/baliimg2.jpg";

export default function AboutCircleSection() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  // Auto change image every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F8F2E9] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - CIRCLE WITH ROTATING TEXT */}
        <div className="relative flex items-center justify-center">

          {/* Circular Text */}
          <div className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px] animate-spin-slow">
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150
                     m -120, 0
                     a 120,120 0 1,1 240,0
                     a 120,120 0 1,1 -240,0"
                />
              </defs>

              <text fill="#11689B" fontSize="18" fontWeight="600">
                <textPath href="#circlePath" startOffset="0%">
                  My Bhoomee • MyBhoomee • MyBhoomee • MyBhoomee • MyBhoomee • MyBhoomee •MyBhoomee •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Main Circle Image */}
          <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl relative z-10">
            <img
              src={images[current]}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Premium Villas in Hyderabad Designed for Modern Lifestyle
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            MyBhoomee redefines luxury villa living with a harmonious blend of 
            contemporary design, lush landscapes, and world-class construction 
            standards. Every villa is built to deliver unmatched comfort, privacy, 
            and long-term value.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Nestled in the tranquil surroundings of Moinabad, MyBhoomee offers 
            effortless access to Hyderabad while keeping you close to nature — 
            making it one of the most sought-after villa destinations in the region.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-8">
            <button className="px-8 py-3 bg-[#11689B] text-white rounded-full shadow-md hover:scale-105 transition-all">
              Read More...
            </button>

            <button className="px-8 py-3 border-2 border-[#11689B] text-[#11689B] rounded-full hover:bg-[#11689B] hover:text-white transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}
