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
    <section
      className="relative py-28 overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.95), rgba(10, 10, 10, 0.9)), url(${villaImages[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD6A5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 text-white">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD6A5]/30 to-[#FFB347]/30 backdrop-blur-md rounded-full mb-8 border border-[#FFD6A5]/40">
            <span className="text-[#FFE0B5] font-semibold text-sm tracking-widest uppercase">
              Luxury Weekend Retreat
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse">
              Luxury Weekend Glass Villa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
            The Elite Choice for{" "}
            <span className="text-[#FFD6A5] font-semibold">Elite Living</span>.
            Experience breathtaking transparency, modern aesthetics, and serene
            luxury crafted by{" "}
            <span className="text-[#FFD6A5] font-semibold">
              MY BHOOMEE SPACE INFRA DEVELOPERS PVT LTD
            </span>{" "}
            — where glass meets greenery and innovation meets tranquility.
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
                alt={`Glass Villa ${index + 1}`}
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
              Designed for the Visionaries
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 text-justify">
                The Luxury Weekend Glass Villa is a modern architectural marvel
                that blends transparency, open space, and natural harmony. Each
                villa is a sanctuary for those who value design, light, and
                lifestyle. The blend of glass and nature makes every sunrise and
                sunset a living painting. Floor-to-ceiling windows invite the
                beauty of the outdoors inside, creating a seamless connection
                between luxury and landscape. Every corner is crafted to enhance
                natural light, offering a sense of openness and serenity. The
                minimalist interiors reflect sophistication while maintaining
                warmth and comfort. Surrounded by lush greenery and tranquil
                views, the villa offers the perfect weekend escape from city life.
                It’s more than just a home — it’s an experience of calm, elegance,
                and timeless design. Here, nature doesn’t stay outside; it becomes
                a part of your everyday living. Each element of architecture tells
                a story of innovation and artistry. A place where modern luxury
                meets the soothing rhythm of nature.
              </p>

            <ul className="space-y-3 text-lg text-gray-300">
              <li>📍 <strong>Location:</strong> Moinabad - Hyderabad</li>
              <li>🏠 <strong>Type:</strong> 3 BHK Luxury Glass Villa</li>
              <li>🌳 <strong>Plot Size:</strong> 2000 Sq. Yards</li>
              <li>🏗️ <strong>Built-up Area:</strong> 3000 Sq. Ft</li>
              <li>🏡 <strong>Design:</strong> Dual Floor with Panoramic Glass Facades</li>
            </ul>
          </div>

          {/* Dual Plans */}
          <div className="space-y-10">
            {/* Ground Floor Plan */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/90 cursor-pointer"
              onClick={() => setZoomedImage(groundPlan)}
            >
              <img
                src={groundPlan}
                alt="Ground Floor Plan"
                className="w-full h-[350px] object-contain bg-white/10 p-4"
              />
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#FFD6A5] to-[#FFB347] text-black px-5 py-2 rounded-xl font-semibold shadow-lg">
                Ground Floor Plan – 3 BHK | 2000 Sq. Yards | 3000 SFT
              </div>
            </div>

            {/* First Floor Plan */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/90 cursor-pointer"
              onClick={() => setZoomedImage(firstPlan)}
            >
              <img
                src={firstPlan}
                alt="First Floor Plan"
                className="w-full h-[350px] object-contain bg-white/10 p-4"
              />
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#FFD6A5] to-[#FFB347] text-black px-5 py-2 rounded-xl font-semibold shadow-lg">
                First Floor Plan – 3 BHK | 2000 Sq. Yards | 3000 SFT
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-white/5 border border-[#FFD6A5]/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#FFD6A5]">
            Signature Amenities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-200">
            <li>🌅 Floor-to-Ceiling Glass Walls for Natural Light</li>
            <li>🏡 Private Lawn with Infinity Pool</li>
            <li>🛋️ Ultra-Modern Modular Interiors</li>
            <li>🚗 Spacious Parking Zone</li>
            <li>🌿 Vertical Garden Landscaping</li>
            <li>🔥 Outdoor Lounge & BBQ Zone</li>
            <li>💧 Rainwater Harvesting System</li>
            <li>⚡ Smart Home Automation</li>
            <li>📷 CCTV Surveillance & Security</li>
            <li>💡 Designer Ambient Lighting</li>
            <li>🧱 Stylish Glass & Concrete Facade</li>
            <li>🌴 Rooftop Sit-out with Panoramic View</li>
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

export default GlassVilla;
