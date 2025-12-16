import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, Sparkles, Calendar, Ruler } from "lucide-react";
import img1 from "../assets/images/ongoing img1.jpeg";

const OngoingProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* ⬇️ CARD WIDTH INCREASED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* CARD */}
        <div
          className={`
            bg-white
            border border-gray-200
            rounded-3xl
            shadow-lg
            overflow-hidden
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* CARD HEADER */}
          <div className="px-8 sm:px-12 pt-10 text-center">
            <span className="uppercase text-lg sm:text-xl font-bold tracking-wide text-black block mb-2">
              Ongoing Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              ONYX Luxury Villas
            </h2>
          </div>

          {/* CARD BODY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 items-center">

            {/* IMAGE */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={img1}
                  alt="ONYX Luxury Villas"
                  onLoad={() => setImageLoaded(true)}
                  className={`
                    w-full h-[300px] sm:h-[420px] md:h-[480px]
                    object-cover transition-opacity duration-700
                    ${imageLoaded ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between h-full">

              {/* LOCATION */}
              <div className="flex items-start gap-3 mb-5">
                <MapPin size={20} className="text-black mt-1" />
                <div>
                  <p className="text-black font-medium">Moinabad, Hyderabad</p>
                  <p className="text-xs text-gray-600">15 km from ORR</p>
                </div>
              </div>

              {/* HEADING ONLY (DESCRIPTION REMOVED) */}
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-8">
                Elegance in Every Detail
              </h3>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: <Ruler size={18} />, label: "3500+ Sq.ft", sub: "Villa Size" },
                  { icon: <Calendar size={18} />, label: "Q4 2025", sub: "Possession" },
                  { icon: <Sparkles size={18} />, label: "4 BHK", sub: "Configuration" },
                  {
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    ),
                    label: "24 Units",
                    sub: "Limited Edition",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-black">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-600">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => (window.location.href = "/projects")}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-semibold rounded-xl transition hover:bg-gray-900"
              >
                Explore Project
                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProject;
