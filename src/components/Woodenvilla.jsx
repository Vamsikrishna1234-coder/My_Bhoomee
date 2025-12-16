import React, { useState, useEffect } from "react";
import woodenvilla1 from "../assets/images/wooden/wooden-villa.jpg";
import woodenvilla2 from "../assets/images/wooden/wooden-villa1.jpg";
import woodenvilla3 from "../assets/images/wooden/wooden interior.jpg";
import woodenvilla4 from "../assets/images/wooden/wooden garden.jpg";
import woodenvilla5 from "../assets/images/wooden/wooden pool.jpg";
import woodenvillaplan from "../assets/images/wooden/Wooden Villa Plan.png";

const villaImages = [
  woodenvilla1,
  woodenvilla2,
  woodenvilla3,
  woodenvilla4,
  woodenvilla5,
];

const Woodenvilla = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % villaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen">

      <section className="relative py-28 bg-white">

        <div className="container mx-auto px-6 lg:px-20">

          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto mb-24">
            <span className="inline-block px-6 py-3 border border-black rounded-full mb-8 text-sm font-semibold tracking-widest uppercase text-black">
              Premium Weekend Living
            </span>

            <h1 className="text-3xl md:text-3xl lg:text-8xl font-medium mb-8 text-black">
              European Wooden Villa
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Welcome to{" "}
              <span className="font-semibold text-black">
                MY BHOOMEE SPACE INFRA DEVELOPERS PVT LTD
              </span>{" "}
              — A life closer to nature, where Scandinavian craftsmanship meets
              Indian tranquility.
            </p>
          </div>

          {/* IMAGE GALLERY (5 IMAGES) */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {villaImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:scale-[1.03] transition-all duration-500 cursor-pointer bg-white"
                onClick={() => setZoomedImage(img)}
              >
                <img
                  src={img}
                  alt={`Villa ${index + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* DESCRIPTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Crafted for Elegance & Comfort
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Nestled in the serene landscapes of Moinabad, the European Wooden
                Villa is a perfect blend of elegance and sustainability.
              </p>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
                <li>🏠 <strong>Built Area:</strong> 1200 Sq. Ft | 2 BHK</li>
                <li>🌳 <strong>Plot Size:</strong> 700 - 800 Sq. Yards</li>
                <li>🏊 <strong>Features:</strong> Pool, Gazebo, BBQ Zone</li>
                <li>🪵 <strong>Material:</strong> European Pine Wood</li>
              </ul>
            </div>

            {/* FLOOR PLAN */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white cursor-pointer"
              onClick={() => setZoomedImage(woodenvillaplan)}
            >
              <img
                src={woodenvillaplan}
                alt="Villa Floor Plan"
                className="w-full h-[400px] object-contain p-4"
              />
              <div className="absolute bottom-4 right-4 bg-black text-white px-5 py-2 rounded-xl font-semibold">
                East Facing – 2 BHK
              </div>
            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black">
              Exclusive Amenities
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              <li>🌿 Grass Landscaping</li>
              <li>🍽️ Open Kitchen Concept</li>
              <li>🪵 Imported Wood</li>
              <li>🛏️ 2 Bedrooms</li>
              <li>🧱 Brick Photo Booth</li>
              <li>🚗 Car Parking</li>
              <li>🧱 Picket Wall</li>
              <li>📷 CC Camera</li>
              <li>🌴 Plantation</li>
              <li>💡 Decorative Lighting</li>
              <li>💧 Drip System</li>
              <li>⚡ 24/7 Utilities</li>
              <li>🛡️ Security</li>
              <li>🌊 Private Pool</li>
              <li>🔥 BBQ Zone</li>
              <li>🎠 Kids Play Area</li>
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
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/60 px-3 py-1 rounded-full"
                onClick={() => setZoomedImage(null)}
              >
                ×
              </button>
              <img
                src={zoomedImage}
                alt="Zoomed"
                className="w-full max-h-[90vh] object-contain rounded-2xl bg-white shadow-xl"
              />
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default Woodenvilla;
