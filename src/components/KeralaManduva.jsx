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

  // Auto image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % villaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F8F2E9] min-h-screen">

      {/* MAIN SECTION */}
      <section className="relative py-28 overflow-hidden bg-[#F8F2E9]">

        {/* Soft Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">

          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto mb-24">

            <div className="inline-block px-6 py-3 bg-[#11829B] rounded-full mb-8 border border-[#FFD6A5]/40">
              <span className="text-white font-semibold text-sm tracking-widest uppercase">
                Traditional Luxury Living
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-[#11829B]">
              Kerala Manduva House
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Experience timeless architecture with{" "}
              <span className="text-[#11829B] font-semibold">
                MY BHOOMEE SPACE INFRA DEVELOPERS 
              </span> — where Kerala heritage meets modern comfort.
            </p>
          </div>

          {/* IMAGE SHOWCASE (NO DARK OVERLAY) */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {villaImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl transform hover:scale-[1.03] transition-all duration-700 cursor-pointer bg-white"
                onClick={() => setZoomedImage(img)}
              >
                <img
                  src={img}
                  alt={`Kerala Manduva ${index + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* DESCRIPTION SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#11829B]">
                Elegance Rooted in Tradition
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                Kerala Manduva House reflects timeless South Indian architecture
                with serene courtyards, intricate wooden detailing, and 
                sustainable materials. Traditional craftsmanship blends with
                spacious modern living to create a peaceful sanctuary filled with 
                natural ventilation, sunlight, and cultural richness.
              </p>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
                <li>🏠 <strong>Type:</strong> 3 BHK Kerala Style Villa</li>
                <li>🌳 <strong>Plot Size:</strong> 900 Sq. Yards</li>
                <li>🏗️ <strong>Built-up Area:</strong> 1800 Sq. Ft</li>
                <li>🪵 <strong>Design:</strong> Courtyard-style Manduva Concept</li>
              </ul>
            </div>

            {/* FLOOR PLANS */}
            <div className="space-y-10">

              {/* EAST PLAN */}
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl border-[6px] border-white bg-white cursor-pointer"
                onClick={() => setZoomedImage(eastPlan)}
              >
                <img
                  src={eastPlan}
                  alt="East Facing Plan"
                  className="w-full h-[350px] object-contain p-4"
                />
                <div className="absolute bottom-4 right-4 bg-[#11829B] text-white px-5 py-2 rounded-xl font-semibold shadow-lg">
                  East Facing – 3 BHK
                </div>
              </div>

              {/* WEST PLAN */}
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl border-[6px] border-white bg-white cursor-pointer"
                onClick={() => setZoomedImage(westPlan)}
              >
                <img
                  src={westPlan}
                  alt="West Facing Plan"
                  className="w-full h-[350px] object-contain p-4"
                />
                <div className="absolute bottom-4 right-4 bg-[#11829B] text-white px-5 py-2 rounded-xl font-semibold shadow-lg">
                  West Facing – 3 BHK
                </div>
              </div>

            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white border border-[#FFD6A5] rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#11829B]">
              Premium Amenities
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              <li>🌿 Courtyard with Open Sky View</li>
              <li>🪵 Traditional Wooden Pillars</li>
              <li>🍃 Eco-friendly Materials</li>
              <li>🛏️ 3 Spacious Bedrooms</li>
              <li>🌺 Ornamental Ceiling Designs</li>
              <li>🚗 Ample Parking</li>
              <li>🔥 Outdoor BBQ Zone</li>
              <li>🌴 Decorative Landscaping</li>
              <li>💧 Rainwater Harvesting</li>
              <li>💡 Warm Ambient Lighting</li>
              <li>📷 CCTV Surveillance</li>
              <li>⚡ 24/7 Power Backup</li>
            </ul>
          </div>
        </div>

        {/* ZOOM MODAL */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
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
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl bg-white shadow-2xl"
              />
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default KeralaManduva;
