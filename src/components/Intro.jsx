import React, { useEffect, useState } from "react";
import img1 from "../assets/images/Orr road.jpeg"

export default function NatureStatsSection() {
  const [offset, setOffset] = useState(0);

  // Parallax Movement
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#F8F2E9] py-10 overflow-hidden">

      {/* Grid Layout Like Screenshot */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-0 px-6 relative z-10">

        {/* LEFT FULL HEIGHT IMAGE */}
        <div className="w-[650px] h-[600px] md:h-[750px] overflow-hidden  shadow-md">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Nature"
          />
        </div>

        {/* RIGHT SIDE — Your Data in Elegant Layout */}
        <div className="px-0 md:px-16 py-10">
          
          {/* Decorative Icon */}
          <div className="flex mb-4">
            <span className="text-4xl">✦</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-serif italic text-black mb-10">
            A Lifestyle Inspired by Nature
          </h2>

          {/* Stats Section */}
          <div className="space-y-10 text-black-600">

            {/* Block 1 */}
            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">25 Acre</h3>
              <p className="text-xl text-black">Premium Villa Project</p>
              <p className="text-black-500 mt-2 max-w-md">
                A rare luxury community spread across a peaceful 25-acre green zone.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">80%</h3>
              <p className="text-xl text-black">Green Space</p>
              <p className="text-gray-600 mt-2 max-w-md">
                Lush greenery with landscaped gardens, trees, walking paths & nature-centric living.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">1 Hr</h3>
              <p className="text-xl text-black">From Hyderabad</p>
              <p className="text-gray-600 mt-2 max-w-md">
                Your peaceful weekend home just 1 hour from the city.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">25+</h3>
              <p className="text-xl text-black">Luxury Amenities</p>
              <p className="text-gray-600 mt-2 max-w-md">
                Exclusive premium amenities designed for comfort, leisure & luxury.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
