import React from "react";
import {
  FaTree,
  FaHouseUser,
  FaSpa,
  FaHome
} from "react-icons/fa";

const VillaConcepts = () => {
  const villas = [
    {
      icon: <FaTree size={36} />,
      title: "European Wooden Villas",
      desc:
        "Crafted with natural wood and inspired by classic European architecture, these villas offer warmth, sustainability, and timeless elegance. Ideal for those who value nature, comfort, and refined living.",
    },
    {
      icon: <FaHouseUser size={36} />,
      title: "Glass Villas",
      desc:
        "Designed for contemporary lifestyles, glass villas feature expansive transparent walls that maximize daylight and openness. A perfect choice for modern living with uninterrupted views and luxury aesthetics.",
    },
    {
      icon: <FaSpa size={36} />,
      title: "Bali Harmony Villas",
      desc:
        "Inspired by Balinese philosophy, these villas emphasize balance, tranquility, and seamless indoor–outdoor living. A serene retreat surrounded by greenery and calming architectural elements.",
    },
    {
      icon: <FaHome size={36} />,
      title: "Kerala Manduva Homes",
      desc:
        "Rooted in traditional Kerala design, Manduva homes feature central courtyards, natural ventilation, and sloped roofs, blending cultural heritage with modern-day comfort and sustainability.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            MyBhoomee Villa Concepts
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover thoughtfully curated villa concepts, each designed with a
            distinct architectural identity to suit diverse lifestyles and
            preferences.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {villas.map((villa, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-black
                rounded-2xl
                p-8
                text-center
                flex flex-col
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-black
              "
            >
              {/* ICON */}
              <div className="mb-6 flex justify-center text-black">
                {villa.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-black mb-4">
                {villa.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {villa.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VillaConcepts;
