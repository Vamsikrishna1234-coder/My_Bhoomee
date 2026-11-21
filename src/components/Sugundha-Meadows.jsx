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
              Luxury Weekend Retreat
            </span>

            <h1 className="text-4xl md:text-3xl lg:text-8xl font-medium mb-8 text-black">
              Luxury Weekend Glass Villa
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Experience breathtaking transparency, modern aesthetics, and serene
              luxury crafted by{" "}
              <span className="font-semibold text-black">
                MY BHOOMEE SPACE INFRA DEVELOPERS
              </span>.
            </p>
          </div>

          {/* IMAGE GALLERY */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {villaImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:scale-[1.03] transition-all duration-500 cursor-pointer bg-white"
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

          {/* DESCRIPTION + FLOOR PLANS */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
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

            <div className="space-y-10">

              {/* Ground Floor */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white cursor-pointer"
                onClick={() => setZoomedImage(groundPlan)}
              >
                <img
                  src={groundPlan}
                  alt="Ground Floor Plan"
                  className="w-full h-[350px] object-contain p-4"
                />
                <div className="absolute bottom-4 right-4 bg-black text-white px-5 py-2 rounded-xl font-semibold">
                  Ground Floor Plan – 3 BHK
                </div>
              </div>

              {/* First Floor */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white cursor-pointer"
                onClick={() => setZoomedImage(firstPlan)}
              >
                <img
                  src={firstPlan}
                  alt="First Floor Plan"
                  className="w-full h-[350px] object-contain p-4"
                />
                <div className="absolute bottom-4 right-4 bg-black text-white px-5 py-2 rounded-xl font-semibold">
                  First Floor Plan – 3 BHK
                </div>
              </div>
            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black">
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
                className="w-full max-h-[90vh] object-contain rounded-2xl bg-white shadow-xl"
              />
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default GlassVilla;
