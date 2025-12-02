import React, { useEffect, useRef } from "react";
import { easeInOut } from "framer-motion";
import { Check } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import h1 from "../assets/images/wooden/wooden pool.jpg";
import h2 from "../assets/images/manduva/kerala manduva2.jpg";
import h3 from "../assets/images/wooden/wooden natural .jpg";
import h4 from "../assets/images/glassvilla/glass villa.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProjectHighlights = () => {
  const containerRef = useRef(null);
  const rowRefs = useRef([]);

  // 6 HIGHLIGHTS (2 per row → 3 rows)
  const highlights = [
    {
      title: "Spacious Living Areas",
      subtitle: "Designed with wide layouts, luxury finishes & openness.",
      image: h1,
      points: ["Premium Flooring", "Wide Balconies", "Cross Ventilation"],
    },
    {
      title: "World-Class Amenities",
      subtitle: "25+ curated lifestyle amenities for all age groups.",
      image: h2,
      points: ["Infinity Pool", "Clubhouse", "Kids Play Area"],
    },
    {
      title: "Premium Construction",
      subtitle: "Built with strong RCC & advanced safety engineering.",
      image: h3,
      points: ["Earthquake Resistant", "Smart Home Ready", "Strong RCC"],
    },
    {
      title: "Green Landscapes",
      subtitle: "Lush green spaces designed for peace & wellness.",
      image: h4,
      points: ["Meditation Lawn", "Walking Trail", "Floral Gardens"],
    },
    {
      title: "Smart Home Features",
      subtitle: "Modern automated features for next-gen living.",
      image: h1,
      points: ["Smart Locks", "Energy Saving", "App Controlled"],
    },
    {
      title: "Advanced Security",
      subtitle: "A completely secured gated community.",
      image: h2,
      points: ["CCTV Network", "Security Cabin", "Access Control"],
    },
  ];

  // Convert into rows of 2
  const rows = [];
  for (let i = 0; i < highlights.length; i += 2) {
    rows.push([highlights[i], highlights[i + 1]]);
  }

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const totalRows = rowRefs.current.length;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        // Pin each ROW (two cards)
        ScrollTrigger.create({
          trigger: row,
          start: "center center",
          end: () => `+=${(totalRows - index) * 400}`,
          pin: true,
          pinSpacing: false,
        });

        // Stacking animation for last row
        if (index === totalRows - 1) {
          gsap.to(rowRefs.current, {
            yPercent: -60 * totalRows,
            ease: easeInOut,
            scrollTrigger: {
              trigger: row,
              start: "top top",
              end: () => `+=${totalRows * 200}`,
              scrub: 1,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#F8F2E9] py-14">

      {/* HEADING + DESCRIPTION */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-6">
        <h2 className="text-5xl font-bold text-[#11689B] mb-4">
          Project <span className="text-black">Highlights</span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Experience a lifestyle enriched with luxury, convenience, and
          world-class design. Each feature is carefully crafted to offer
          comfort, elegance, and an elevated living experience.
        </p>
      </div>

      {/* STACKING ROWS (DESKTOP) */}
      <div className="hidden lg:block">
        {rows.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            className="flex justify-center items-center min-h-[460px]"
            style={{ zIndex: rowIndex + 1 }}
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-8xl px-6">

              {pair.map(
                (item, i) =>
                  item && (
                    <div
                      key={i}
                      className="relative bg-black rounded-l overflow-hidden shadow-xl border border-gray-200 min-h-[420px]"
                    >
                      {/* Background */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-50"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                        <p className="mb-4 text-lg">{item.subtitle}</p>

                        <ul className="space-y-2">
                          {item.points.map((p, j) => (
                            <li key={j} className="flex items-center">
                              <span className="text-green-400 mr-3">✔</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
              )}

            </div>
          </div>
        ))}
      </div>

      <div className="h-[400px]"></div>

      {/* MOBILE NORMAL VIEW */}
      <div className="lg:hidden px-6 space-y-6 mt-8">
        {highlights.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={item.image} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.subtitle}</p>

              <ul className="space-y-1">
                {item.points.map((p, j) => (
                  <li key={j} className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProjectHighlights;
