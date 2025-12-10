import React, { useEffect, useRef } from "react";
import amenityImg from "../assets/images/chooseus img2.jpg";

import imgA from "../assets/images/wooden/wooden-villa.jpg";
import imgB from "../assets/images/home6.jpg";
import imgC from "../assets/images/glassvilla/glass villa2.jpg";
import imgD from "../assets/images/bali housebanner.jpg";

const AmenitiesSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // IMAGE LIST
  const amenitiesImages = [imgA, imgB, imgC,imgD];

  // TITLES
  const titles = [
    "Wooden Villa Amenities",
    "Kerala Manduva Amenities",
    "Glass Villa Amenities",
  ];

  // AMENITIES DATA
  const amenitiesData = [
    [
      "🌿 Beautiful Grass Landscaping",
      "🍽️ Open Kitchen Concept with Dining",
      "🪵 European Imported Wood",
      "🛏️ 2 Bedrooms with Attached Bathrooms",
      "🚗 Car Parking",
      "🧱 Around Picket Wall",
      "📷 CC Camera at the Entrance",
      "💡 Decorative Lighting",
      "💧 Sprinkler Drip System",
      "⚡ 24/7 Water & Electricity",
      "🌊 Private Swimming Pool",
      "🎠 Kids Play Area",
    ],
    [
      "🌤️ Central Courtyard with Open Sky View",
      "🪵 Traditional Wooden Pillars & Rafters",
      "🍃 Eco-friendly Construction Materials",
      "🛏️ 3 Spacious Bedrooms with Attached Baths",
      "🌺 Ornamental Wooden Ceiling Designs",
      "🚗 Ample Car Parking Space",
      "🔥 Outdoor BBQ & Family Sit-out Zone",
      "🌴 Decorative Garden Landscaping",
      "💧 Rainwater Harvesting System",
      "💡 Warm Ambient Lighting",
      "📷 CCTV Surveillance",
      "⚡ 24/7 Power Backup",
    ],
    [
      "🌿 Private Lawn with Infinity Pool",
      "🛋️ Ultra-Modern Modular Interiors",
      "🚗 Spacious Parking Zone",
      "🌿 Vertical Garden Landscaping",
      "🔥 Outdoor Lounge & BBQ Zone",
      "💧 Rainwater Harvesting System",
      "⚡ Smart Home Automation",
      "📷 CCTV Surveillance & Security",
      "💡 Designer Ambient Lighting",
      "🧱 Stylish Glass & Concrete Facade",
      "🌴 Rooftop Sit-out with Panoramic View",
    ],
    [
      "🏝️ Open Courtyard with Water Body",
      "🌿 Tropical Garden Landscaping",
      "🪵 Wooden & Natural Stone Accents",
      "🛏️ 3 Luxurious Bedrooms",
      "💧 Rainwater Harvesting System",
      "🔥 Outdoor Sit-out & Family Zone",
      "🌅 Large Glass Facades for Light",
      "🚗 Covered Car Parking",
      "💡 Ambient Mood Lighting",
      "📷 CCTV Surveillance",
      "⚡ 24/7 Power Backup",
      "🧘 Meditation & Relaxation Corners",
    ]
  ];

  /* -----------------------------------
      GSAP STACKING ANIMATION
      (RUNS ONLY ON ≥1024px)
  ------------------------------------*/
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const s1 = document.createElement("script");
    s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    s1.async = true;

    const s2 = document.createElement("script");
    s2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    s2.async = true;

    document.body.appendChild(s1);

    s1.onload = () => {
      document.body.appendChild(s2);

      s2.onload = () => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const cards = cardsRef.current;
        const total = cards.length;

        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "+=180%",
            pin: true,
            pinSpacing: false,
          });

          if (i === total - 1) {
            gsap.to(cards, {
              yPercent: -110 * total,
              opacity: 0,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "+=200%",
                scrub: 1,
              },
            });
          }
        });
      };
    };
  }, []);

  return (
    <section className="bg-[#F8F2E9] pb-10">

      {/* HEADER MARQUEE */}
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[320px] overflow-hidden rounded-3xl mb-10">
        <img src={amenityImg} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap opacity-80 flex gap-12 sm:gap-20">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-[36px] sm:text-[60px] md:text-[120px] font-extrabold text-transparent stroke-white"
              >
                MyBhoomee Amenities
              </span>
            ))}
          </div>
        </div>

        <style>{`
          .animate-marquee {
            animation: marquee 16s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .stroke-white { -webkit-text-stroke: 2px white; }
        `}</style>
      </div>

      {/* FALLBACK LAYOUT FOR MOBILE + TABLET */}
      <div className="block lg:hidden px-4 sm:px-8 space-y-10">
        {amenitiesImages.map((image, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div
              className="h-[240px] sm:h-[320px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h2 className="absolute top-6 left-6 text-2xl sm:text-3xl font-bold text-white">
                {titles[index]}
              </h2>
            </div>

            <div className="p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800 text-sm sm:text-base">
              {amenitiesData[index].map((item, i) => (
                <p key={i}>⭐ {item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GSAP STACKED CARDS FOR ALL DESKTOPS (SMALL + LARGE) */}
      <div ref={containerRef} className="hidden lg:block relative">
        {amenitiesImages.map((image, index) => (
          <div key={index} className="h-[120vh] flex items-center justify-center">
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full max-w-[1400px] rounded-3xl shadow-2xl overflow-hidden relative"
              style={{ zIndex: index + 1 }}
            >
              <div
                className="h-[85vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex justify-center pt-16">
                  <h2 className="text-5xl font-bold text-white">
                    {titles[index]}
                  </h2>
                </div>

                <div className="absolute bottom-12 w-full px-20 grid grid-cols-2 gap-y-3 text-white text-xl">
                  {amenitiesData[index].map((item, i) => (
                    <p key={i}>⭐ {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="h-[10vh]"></div>
      </div>

    </section>
  );
};

export default AmenitiesSection;
