import React, { useState, useEffect } from "react";
import bali1 from "../assets/images/bali/baliimg1.jpg";
import bali2 from "../assets/images/bali/baliimg2.jpg";
import bali3 from "../assets/images/bali/baliimg3.png";
import eastPlan from "../assets/images/bali/baliimg4.png";
import westPlan from "../assets/images/bali/baliimg2.jpg";

const villaImages = [bali1, bali2, bali3];

const BaliHarmony = () => {
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
        backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.95), rgba(10,10,10,0.9)), url(${villaImages[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 text-white">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD6A5]/30 to-[#FFB347]/30 backdrop-blur-md rounded-full mb-8 border border-[#FFD6A5]/40">
            <span className="text-[#FFE0B5] font-semibold text-sm tracking-widest uppercase">
              A Blend of Nature & Tranquility
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse">
              Bali Harmony Modern Sanctuary
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
            Step into our Bali Harmony, Modern Sanctuary, where ancient charm
            meets modern serenity. Natural elegance, lush gardens, and soothing
            water features create a tranquil retreat — perfect for rejuvenation
            and relaxation.
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
                alt={`Bali Villa ${index + 1}`}
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
              Tropical Elegance in Every Corner
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 text-justify">
                Bali Harmony Villas redefine luxury with tropical design elements,
                open spaces, and natural aesthetics. Blending elegance with peace,
                these homes are inspired by Bali’s soothing harmony — a sanctuary
                for your senses. Each villa is designed to embrace the beauty of
                nature, with open courtyards, tranquil water features, and lush
                green surroundings. The architecture draws inspiration from
                traditional Balinese craftsmanship while incorporating modern
                comforts and sustainability. Gentle breezes flow through airy
                living spaces, filling them with a sense of calm and connection.
                Every detail — from handcrafted textures to warm earthy tones —
                evokes a feeling of timeless serenity. These villas are not just
                homes but an escape into tropical bliss and spiritual balance.
                Experience the rhythm of nature, the charm of Bali, and the art of
                peaceful living — all within your private retreat.
            </p>

            <ul className="space-y-3 text-lg text-gray-300">
              <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
              <li>🏠 <strong>Type:</strong> 3 BHK Bali Style Villa</li>
              <li>🌿 <strong>Concept:</strong> Open Courtyard & Water Harmony Design</li>
              <li>🌴 <strong>Ambience:</strong> Tropical Gardens & Serenity Zones</li>
            </ul>
          </div>

          {/* Floor Plans */}
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
                East Facing – 3 BHK | Plot Area 900 Sq.Yards | Built-up 2700 SFT
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
                West Facing – 3 BHK | Plot Area 900 Sq.Yards | Built-up 2700 SFT
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-white/5 border border-[#FFD6A5]/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#FFD6A5]">
            Premium Features & Amenities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-200">
            <li>🏝️ Open Courtyard with Water Body</li>
            <li>🌿 Tropical Garden Landscaping</li>
            <li>🪵 Wooden Accents & Natural Stone Work</li>
            <li>🛏️ 3 Lavish Bedrooms with Balconies</li>
            <li>💧 Rainwater Harvesting System</li>
            <li>🔥 Outdoor Sit-out & Family Zone</li>
            <li>🌅 Large Glass Facades for Natural Light</li>
            <li>🚗 Covered Car Parking Space</li>
            <li>💡 Ambient Mood Lighting</li>
            <li>📷 CCTV Surveillance</li>
            <li>⚡ 24/7 Power Backup</li>
            <li>🧘‍♂️ Meditation & Relaxation Corners</li>
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

export default BaliHarmony;
