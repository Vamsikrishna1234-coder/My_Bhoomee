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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % villaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* MAIN SECTION */}
      <section className="relative py-28 bg-white">

        <div className="container mx-auto px-6 lg:px-20">

          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto mb-24">
            <span className="inline-block px-6 py-3 border border-black rounded-full mb-8 text-sm font-semibold tracking-widest uppercase text-black">
              Traditional Luxury Living
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-black">
              Kerala Manduva House
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Experience timeless Kerala architecture blended with modern comfort,
              designed to bring natural light, ventilation, and cultural harmony
              into everyday living.
            </p>
          </div>

          {/* IMAGE SHOWCASE */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {villaImages.map((img, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition cursor-pointer bg-white"
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

          {/* DESCRIPTION + FLOOR PLANS */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Elegance Rooted in Tradition
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                Kerala Manduva House reflects timeless South Indian architecture
                with serene courtyards, intricate wooden detailing, and sustainable
                materials. Traditional craftsmanship blends seamlessly with modern
                living, creating a calm and culturally rich home environment.
                The central open-to-sky manduva enhances natural ventilation and daylight,
                fostering a harmonious indoor–outdoor connection throughout the home.
                Handcrafted wooden pillars and sloping tiled roofs echo heritage aesthetics,
                while thoughtfully planned interiors ensure comfort and functionality.
                Every space is designed to promote family bonding, privacy, and serenity,
                making the home both spiritually grounding and practically modern.
              </p>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>📍 <strong>Location:</strong> Moinabad – Hyderabad</li>
                <li>🏠 <strong>Type:</strong> 3 BHK Kerala Style Villa</li>
                <li>🌳 <strong>Plot Size:</strong> 900 Sq. Yards</li>
                <li>🏗️ <strong>Built-up Area:</strong> 1800 Sq. Ft</li>
                <li>🪵 <strong>Design:</strong> Courtyard-style Manduva Concept</li>
              </ul>
            </div>

            {/* FLOOR PLANS */}
            <div className="space-y-10">
              {[{ img: eastPlan, label: "East Facing – 3 BHK" }, { img: westPlan, label: "West Facing – 3 BHK" }].map(
                (plan, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition cursor-pointer bg-white"
                    onClick={() => setZoomedImage(plan.img)}
                  >
                    <img
                      src={plan.img}
                      alt={plan.label}
                      className="w-full h-[350px] object-contain p-4"
                    />
                    <div className="px-4 py-3 text-center font-semibold text-black border-t border-gray-200">
                      {plan.label}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black">
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
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/60 px-3 py-1 rounded-full"
                onClick={() => setZoomedImage(null)}
              >
                ×
              </button>

              <img
                src={zoomedImage}
                alt="Zoomed View"
                className="w-full max-h-[90vh] object-contain rounded-2xl bg-white shadow-2xl"
              />
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default KeralaManduva;
