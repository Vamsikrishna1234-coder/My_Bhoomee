import React, { useState, useEffect } from "react";
import glass1 from "../assets/images/glassvilla/glass villa1.png";
import glass2 from "../assets/images/glassvilla/glass villa2.jpg";
import glass3 from "../assets/images/glassvilla/glass villa3.jpg";
import groundPlan from "../assets/images/glassvilla/glass villa groundfloor.png";
import firstPlan from "../assets/images/glassvilla/glass villa firstfloor.png";

const villaImages = [glass1, glass2, glass3];

const GlassVilla = () => {
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
    <div className="bg-[#F8F2E9] min-h-screen">

      {/* MAIN SECTION WITHOUT BLACK GRADIENT */}
      <section className="relative py-28 overflow-hidden bg-[#F8F2E9]">

        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">

          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-block px-6 py-3 bg-[#11829B] backdrop-blur-md rounded-full mb-8 border border-[#FFD6A5]/40">
              <span className="text-white font-semibold text-sm tracking-widest uppercase">
                Luxury Weekend Retreat
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight text-[#B7682F]">
              Luxury Weekend Glass Villa
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Elite Living
              Experience breathtaking transparency, modern aesthetics, and serene
              luxury crafted by{" "}
              <span className="text-[#11829B] font-semibold">
                MY BHOOMEE SPACE INFRA DEVELOPERS 
              </span>.
            </p>
          </div>

          {/* Image Showcase – Clean, no dark overlay */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {villaImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl transform hover:scale-[1.03] transition-all duration-700 cursor-pointer bg-white"
                onClick={() => setZoomedImage(img)}
              >
                <img
                  src={img}
                  alt={`Glass Villa ${index + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#C6782C]">
                Designed for the Visionaries
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-justify">
                The Luxury Weekend Glass Villa is a modern architectural marvel
                that blends transparency, open space, and natural harmony.
                Floor-to-ceiling windows invite the beauty of the outdoors inside.
                Minimalist interiors reflect elegance while staying warm and cozy.
                Surrounded by nature, this villa is the perfect escape from city
                life — a blend of modern design, natural light, and pure serenity.
              </p>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
                <li>🏠 <strong>Type:</strong> 3 BHK Luxury Glass Villa</li>
                <li>🌳 <strong>Plot Size:</strong> 2000 Sq. Yards</li>
                <li>🏗️ <strong>Built-up Area:</strong> 3000 Sq. Ft</li>
                <li>🏡 <strong>Design:</strong> Dual Floor with Panoramic Glass</li>
              </ul>
            </div>

            {/* Floor Plans */}
            <div className="space-y-10">

              {/* Ground Floor */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white cursor-pointer"
                onClick={() => setZoomedImage(groundPlan)}
              >
                <img
                  src={groundPlan}
                  alt="Ground Floor Plan"
                  className="w-full h-[350px] object-contain p-4"
                />
                <div className="absolute bottom-4 right-4 bg-[#11869B] text-white px-5 py-2 rounded-xl font-semibold shadow-lg">
                  Ground Floor Plan – 3 BHK
                </div>
              </div>

              {/* First Floor */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white cursor-pointer"
                onClick={() => setZoomedImage(firstPlan)}
              >
                <img
                  src={firstPlan}
                  alt="First Floor Plan"
                  className="w-full h-[350px] object-contain p-4"
                />
                <div className="absolute bottom-4 right-4 bg-[#11829B] text-white px-5 py-2 rounded-xl font-semibold shadow-lg">
                  First Floor Plan – 3 BHK
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white border border-[#FFD6A5] rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#C6782C]">
              Signature Amenities
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              <li>🌅 Floor-to-Ceiling Glass Walls</li>
              <li>🏊 Private Lawn with Infinity Pool</li>
              <li>🛋️ Ultra-Modern Modular Interiors</li>
              <li>🚗 Spacious Parking</li>
              <li>🌿 Vertical Garden</li>
              <li>🔥 Outdoor Lounge & BBQ Zone</li>
              <li>💧 Rainwater Harvesting</li>
              <li>⚡ Smart Home Automation</li>
              <li>📷 CCTV Security</li>
              <li>💡 Designer Ambient Lighting</li>
              <li>🏛️ Stylish Glass & Concrete Facade</li>
              <li>🌴 Rooftop Sit-out</li>
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

export default GlassVilla;
