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
    <div className="bg-white min-h-screen">

      {/* MAIN SECTION */}
      <section className="relative py-28 bg-white">

        <div className="container mx-auto px-6 lg:px-20">

          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto mb-24">
            <span className="inline-block px-6 py-3 border border-black rounded-full mb-8 text-sm font-semibold tracking-widest uppercase text-black">
              A Blend of Nature & Tranquility
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-black">
              Bali Harmony Modern Sanctuary
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Inspired by Balinese architecture, Bali Harmony Villas offer a serene
              tropical lifestyle where nature, water elements, and open spaces
              come together to create a peaceful living experience.
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
                  alt={`Bali Harmony ${index + 1}`}
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
                Tropical Elegance in Every Corner
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                Bali Harmony Villas redefine tropical living through open courtyards,
                calming water features, and natural materials. Each space is designed
                to encourage relaxation, balance, and a strong connection with
                nature while offering modern comfort and privacy.
                Thoughtfully positioned water bodies create a cooling microclimate,
                enhancing thermal comfort throughout the villa.
                Natural stone, wood textures, and earthy finishes bring warmth
                and authenticity to every interior space.
                Wide openings and large glass facades allow abundant daylight
                and seamless indoor–outdoor flow.
                Landscaped gardens surround the home, offering peaceful views
                and a constant sense of retreat.
                The layout promotes mindful living, where architecture supports
                wellness, tranquility, and everyday harmony.
                Every element is carefully curated to slow down daily life
                and create moments of calm within a private tropical sanctuary.
                Bali Harmony is not just a home, but a lifestyle rooted in peace and balance.
              </p>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>📍 <strong>Location:</strong> Moinabad – Hyderabad</li>
                <li>🏠 <strong>Type:</strong> 3 BHK Bali Style Villa</li>
                <li>🌿 <strong>Concept:</strong> Open Courtyard & Water Harmony</li>
                <li>🌴 <strong>Ambience:</strong> Tropical Gardens & Serenity Zones</li>
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

export default BaliHarmony;
