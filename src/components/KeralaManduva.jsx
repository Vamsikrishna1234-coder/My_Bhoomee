import React, { useState, useEffect } from "react";
import kerala1 from "../assets/images/manduva/kerala manduva1.jpg";
import kerala2 from "../assets/images/manduva/kerala manduva2.jpg";
import kerala3 from "../assets/images/manduva/kerala manduva3.jpg";
import eastPlan from "../assets/images/manduva/kerala manduva Eastplan.jpg";
import westPlan from "../assets/images/manduva/kerala manduva westplan.jpg";

const villaImages = [kerala1, kerala2, kerala3];

const KeralaManduva = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Auto image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % villaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-28 overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.95), rgba(10, 10, 10, 0.9)), url(${villaImages[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      {/* Gradient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 text-white">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD6A5]/30 to-[#FFB347]/30 backdrop-blur-md rounded-full mb-8 border border-[#FFD6A5]/40">
            <span className="text-[#FFE0B5] font-semibold text-sm tracking-widest uppercase">
              Traditional Luxury Living
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse">
              Kerala Manduva House
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
            Experience timeless architecture with{" "}
            <span className="text-[#FFD6A5] font-semibold">
              MY BHOOMEE SPACE INFRA DEVELOPERS PVT LTD
            </span>{" "}
            — A harmonious blend of Kerala heritage design and modern luxury.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {villaImages.map((img, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden border-[6px] border-white/90 shadow-2xl transform hover:scale-[1.03] transition-all duration-700 bg-white/10 backdrop-blur-md cursor-pointer"
              onClick={() => setZoomedImage(img)}
            >
              <img
                src={img}
                alt={`Kerala Villa ${index + 1}`}
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Villa Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD6A5]">
              Elegance Rooted in Tradition
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 text-justify">
                Kerala Manduva House is designed to reflect timeless South Indian
                architecture with a serene courtyard, intricate wooden detailing,
                and sustainable materials. Each home blends comfort with cultural
                richness, creating a sanctuary of peace and beauty. The open-air
                design ensures natural ventilation and abundant sunlight throughout
                the day, enhancing the living experience. Traditional craftsmanship
                meets modern functionality, providing a perfect balance of style and
                substance. Every corner tells a story of heritage, rooted in Kerala’s
                architectural essence. With lush green surroundings and elegant
                interiors, it offers a calm and soulful retreat away from the chaos
                of urban life. The spacious verandas and courtyards invite moments of
                reflection and togetherness with family. Every element — from carved
                wooden pillars to red-tiled roofs — celebrates authenticity and grace.
                It’s not just a home, but a living experience that connects you deeply
                with nature and tradition.
              </p>


            <ul className="space-y-3 text-lg text-gray-300">
              <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
              <li>🏠 <strong>Type:</strong> 3 BHK Traditional Kerala Style Villa</li>
              <li>🌳 <strong>Plot Size:</strong> 900 Sq. Yards</li>
              <li>🏗️ <strong>Built-up Area:</strong> 1800 Sq. Ft</li>
              <li>🪵 <strong>Design:</strong> Courtyard-style Manduva Concept</li>
            </ul>
          </div>

          {/* Dual Plans */}
          <div className="space-y-10">
            {/* East Facing Plan */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/90 cursor-pointer"
              onClick={() => setZoomedImage(eastPlan)}
            >
              <img
                src={eastPlan}
                alt="East Facing Plan"
                className="w-full h-[350px] object-contain bg-white/10 p-4"
              />
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#FFD6A5] to-[#FFB347] text-black px-5 py-2 rounded-xl font-semibold shadow-lg">
                East Facing – 3 BHK | 900 Sq. Yards | 1800 SFT
              </div>
            </div>

            {/* West Facing Plan */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/90 cursor-pointer"
              onClick={() => setZoomedImage(westPlan)}
            >
              <img
                src={westPlan}
                alt="West Facing Plan"
                className="w-full h-[350px] object-contain bg-white/10 p-4"
              />
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#FFD6A5] to-[#FFB347] text-black px-5 py-2 rounded-xl font-semibold shadow-lg">
                West Facing – 3 BHK | 900 Sq. Yards | 1800 SFT
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-white/5 border border-[#FFD6A5]/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#FFD6A5]">
            Premium Amenities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-200">
            <li>🌿 Central Courtyard with Open Sky View</li>
            <li>🪵 Traditional Wooden Pillars & Rafters</li>
            <li>🍃 Eco-friendly Construction Materials</li>
            <li>🛏️ 3 Spacious Bedrooms with Attached Baths</li>
            <li>🌺 Ornamental Wooden Ceiling Designs</li>
            <li>🚗 Ample Car Parking Space</li>
            <li>🔥 Outdoor BBQ & Family Sit-out Zone</li>
            <li>🌴 Decorative Garden Landscaping</li>
            <li>💧 Rainwater Harvesting System</li>
            <li>💡 Warm Ambient Lighting</li>
            <li>📷 CCTV Surveillance</li>
            <li>⚡ 24/7 Power Backup</li>
          </ul>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/50 px-3 py-1 rounded-full hover:bg-black"
              onClick={() => setZoomedImage(null)}
            >
              ×
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed View"
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default KeralaManduva;
