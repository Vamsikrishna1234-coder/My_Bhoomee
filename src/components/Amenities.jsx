import React from "react";
import {
  FaTree,
  FaSwimmingPool,
  FaCar,
  FaLightbulb,
  FaCamera,
  FaBolt,
  FaHome,
  FaLeaf,
  FaWater,
  FaSpa
} from "react-icons/fa";

const AmenitiesSection = () => {
  const amenities = [
    {
      title: "European Wooden Villas",
      icon: <FaTree size={32} />,
      items: [
        "Beautiful Grass Landscaping",
        "European Imported Wood",
        "Open Kitchen with Dining",
        "2 Bedrooms with Attached Bathrooms",
        "Private Swimming Pool",
        "Dedicated Car Parking",
        "Decorative Lighting",
        "CCTV at Entrance",
        "24/7 Water & Electricity",
      ],
    },
    {
      title: "Kerala Manduva Homes",
      icon: <FaHome size={32} />,
      items: [
        "Central Courtyard (Nadumuttam)",
        "Traditional Wooden Pillars",
        "Eco-friendly Materials",
        "3 Spacious Bedrooms",
        "Rainwater Harvesting",
        "Outdoor Sit-out Area",
        "Garden Landscaping",
        "CCTV Surveillance",
        "Power Backup",
      ],
    },
    {
      title: "Glass Villas",
      icon: <FaLightbulb size={32} />,
      items: [
        "Infinity Pool with Private Lawn",
        "Ultra-modern Interiors",
        "Large Glass Facades",
        "Smart Home Automation",
        "Vertical Garden Landscaping",
        "Rooftop Sit-out",
        "Designer Lighting",
        "Rainwater Harvesting",
        "High-end Security Systems",
      ],
    },
    {
      title: "Bali Harmony Villas",
      icon: <FaSpa size={32} />,
      items: [
        "Open Courtyard with Water Body",
        "Tropical Garden Landscaping",
        "Wood & Natural Stone Accents",
        "3 Luxurious Bedrooms",
        "Meditation & Relaxation Zones",
        "Outdoor Family Sit-out",
        "Mood Lighting",
        "Covered Car Parking",
        "24/7 Power Backup",
      ],
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Thoughtfully Curated Amenities
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Every villa at MyBhoomee is designed with carefully selected amenities
            that enhance comfort, sustainability, and everyday living.
          </p>
        </div>

        {/* AMENITIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {amenities.map((villa, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-8
                transition-all
                duration-300
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-black">{villa.icon}</div>
                <h3 className="text-xl font-bold text-black">
                  {villa.title}
                </h3>
              </div>

              {/* AMENITIES LIST */}
              <ul className="space-y-3 text-gray-700 text-sm">
                {villa.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
