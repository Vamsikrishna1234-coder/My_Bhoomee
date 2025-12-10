import React, { useEffect, useState } from "react";
import img1 from "../assets/images/Orr road.jpeg";

export default function NatureStatsSection() {
  const [offset, setOffset] = useState(0);

  // Parallax
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#F8F2E9] py-10 overflow-hidden">

      {/* GRID — NOW TABLET WILL ALSO BE ONE COLUMN */}
      <div className="
        max-w-[1500px] mx-auto 
        grid grid-cols-1 lg:grid-cols-2 
        items-center gap-0 
        px-6 relative z-10
      ">

        {/* LEFT IMAGE */}
        <div
          className="
            w-full
            h-[260px]        /* mobile */
            sm:h-[350px]     /* tablet */
            lg:w-[650px]     /* desktop original width */
            lg:h-[600px]     /* desktop original height */
            xl:h-[750px]
            overflow-hidden shadow-md
          "
        >
          <img
            src={img1}
            loading="lazy"
            className="w-full h-full object-cover"
            alt="Nature"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-0 lg:px-16 py-10">

          <div className="flex mb-4">
            <span className="text-4xl">✦</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-black mb-10">
            A Lifestyle Inspired by Nature
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">25 Acre</h3>
              <p className="text-xl text-black">Premium Villa Project</p>
              <p className="text-black-500 mt-2 max-w-md">
                A rare luxury community spread across a peaceful 25-acre green zone.
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">80%</h3>
              <p className="text-xl text-black">Green Space</p>
              <p className="text-gray-600 mt-2 max-w-md">
                Lush greenery with landscaped gardens, trees, walking paths & nature-centric living.
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#2F3D36]">1 Hr</h3>
              <p className="text-xl text-black">From Hyderabad</p>
              <p className="text-gray-600 mt-2 max-w-md">
                Your peaceful weekend home just 1 hour from the city.
              </p>
            </div>

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
