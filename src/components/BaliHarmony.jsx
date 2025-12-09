import React, { useState, useEffect } from "react";
import bali1 from "../assets/images/bali/bali img1.jpeg";
import bali2 from "../assets/images/bali/bali img2.jpeg";
import bali3 from "../assets/images/bali/bali img3.jpeg";
import eastPlan from "../assets/images/wooden/Wooden Villa Plan.png";
import westPlan from "../assets/images/wooden/Wooden Villa Plan.png";

const villaImages = [bali1, bali2, bali3];

const BaliHarmony = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

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

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">

          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-24">

            <div className="inline-block px-6 py-3 bg-[#11829B] rounded-full mb-8 border border-[#FFD6A5]/40">
              <span className="text-white font-semibold text-sm tracking-widest uppercase">
                A Blend of Nature & Tranquility
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-[#11829B]">
              Bali Harmony Modern Sanctuary
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Step into our Bali Harmony Modern Sanctuary — where tropical charm,
              lush gardens, and soothing water features create a peaceful retreat
              for rejuvenation and relaxation.
            </p>
          </div>

          {/* Image Showcase */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {villaImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl bg-white transform hover:scale-[1.03] transition-all duration-700 cursor-pointer"
                onClick={() => setZoomedImage(img)}
              >
                <img
                  src={img}
                  alt={`Bali Villa ${index + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#11829B]">
                Tropical Elegance in Every Corner
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                Bali Harmony Villas redefine tropical luxury with natural materials,
                open courtyards, and serene water features. Inspired by Balinese
                craftsmanship, each villa blends nature with modern comfort —
                creating a peaceful, soul-refreshing experience.
              </p>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
                <li>🏠 <strong>Type:</strong> 3 BHK Bali Style Villa</li>
                <li>🌿 <strong>Concept:</strong> Open Courtyard & Water Harmony</li>
                <li>🌴 <strong>Ambience:</strong> Tropical Gardens & Serenity Zones</li>
              </ul>
            </div>

            {/* Floor Plans */}
            <div className="space-y-10">

              {/* East Plan */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white cursor-pointer"
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

              {/* West Plan */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white cursor-pointer"
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

          {/* Amenities */}
          <div className="bg-white border border-[#FFD6A5] rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#11829B]">
              Premium Features & Amenities
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              <li>🏝️ Open Courtyard with Water Body</li>
              <li>🌿 Tropical Garden Landscaping</li>
              <li>🪵 Wooden & Natural Stone Accents</li>
              <li>🛏️ 3 Luxurious Bedrooms</li>
              <li>💧 Rainwater Harvesting System</li>
              <li>🔥 Outdoor Sit-out & Family Zone</li>
              <li>🌅 Large Glass Facades for Light</li>
              <li>🚗 Covered Car Parking</li>
              <li>💡 Ambient Mood Lighting</li>
              <li>📷 CCTV Surveillance</li>
              <li>⚡ 24/7 Power Backup</li>
              <li>🧘 Meditation & Relaxation Corners</li>
            </ul>
          </div>

        </div>

        {/* Zoom Modal */}
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

export default BaliHarmony;
