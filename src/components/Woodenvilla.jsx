import React, { useState, useEffect } from "react";
import woodenvilla1 from "../assets/images/wooden/wooden-villa.jpg";
import woodenvilla2 from "../assets/images/wooden/wooden-villa1.jpg";
import woodenvilla3 from "../assets/images/wooden/wooden-villa.jpg";
import woodenvillaplan from "../assets/images/wooden/Wooden Villa Plan.png";

const villaImages = [woodenvilla1, woodenvilla2, woodenvilla3];

const Woodenvilla = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null); // For zoom modal

  // Auto Image Carousel
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
      {/* Light Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 text-white">
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD6A5]/30 to-[#FFB347]/30 backdrop-blur-md rounded-full mb-8 border border-[#FFD6A5]/40">
            <span className="text-[#FFE0B5] font-semibold text-sm tracking-widest uppercase">
              Premium Weekend Living
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse">
              European Wooden Villa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to{" "}
            <span className="text-[#FFD6A5] font-semibold">
              MY BHOOMEE SPACE INFRA DEVELOPERS PVT LTD
            </span>{" "}
            — A life closer to nature, where Scandinavian craftsmanship meets
            Indian tranquility.
          </p>
        </div>

        {/* Image Showcase Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {villaImages.map((img, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden border-[6px] border-white/90 shadow-2xl transform hover:scale-[1.03] transition-all duration-700 bg-white/10 backdrop-blur-md cursor-pointer"
              onClick={() => setZoomedImage(img)} // 👈 Zoom on click
            >
              <img
                src={img}
                alt={`Villa ${index + 1}`}
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Villa Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD6A5]">
              Crafted for Elegance & Comfort
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Nestled in the serene landscapes of Moinabad, the European Wooden
              Villa is a perfect blend of elegance and sustainability. Feel the
              luxury of handcrafted pine wood interiors, open kitchens, and
              landscaped surroundings that bring tranquility to everyday life.
            </p>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
              <li>🏠 <strong>Built Area:</strong> 1200 Sq. Ft | 2 BHK Design</li>
              <li>🌳 <strong>Plot Size:</strong> 700 - 800 Sq. Yards</li>
              <li>🏊 <strong>Features:</strong> Swimming Pool, Gazebo, BBQ Zone</li>
              <li>🪵 <strong>Material:</strong> Imported European Pine Wood</li>
            </ul>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/90 cursor-pointer"
            onClick={() => setZoomedImage(woodenvillaplan)} // 👈 Zoom on plan image too
          >
            <img
              src={woodenvillaplan}
              alt="Villa Floor Plan"
              className="w-full h-[400px] object-contain bg-white/10 p-4"
            />
            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#FFD6A5] to-[#FFB347] text-black px-5 py-2 rounded-xl font-semibold shadow-lg">
              East Facing – 2 BHK
            </div>
          </div>
        </div>

        {/* Extended Amenities */}
        <div className="bg-white/5 border border-[#FFD6A5]/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#FFD6A5]">
            Exclusive Amenities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-200">
            <li>🌿 Beautiful Grass Landscaping</li>
            <li>🍽️ Open Kitchen Concept with Dining</li>
            <li>🪵 European Imported Wood</li>
            <li>🛏️ 2 Bedrooms with Attached Bathrooms</li>
            <li>🧱 Grand Brown Bricks Photo Booth</li>
            <li>🚗 Car Parking</li>
            <li>🧱 Around Picket Wall</li>
            <li>📷 CC Camera at the Entrance</li>
            <li>🌴 Decorative Plantation</li>
            <li>💡 Decorative Lighting</li>
            <li>💧 Sprinkler Drip System</li>
            <li>⚡ 24/7 Water & Electricity</li>
            <li>🛡️ 24/7 Security</li>
            <li>🌊 Private Swimming Pool</li>
            <li>🔥 Outdoor BBQ Zone</li>
            <li>🎠 Kids Play Area</li>
          </ul> 
        </div>
      </div>

      {/* 🖼️ Zoom Modal */}
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

export default Woodenvilla;
