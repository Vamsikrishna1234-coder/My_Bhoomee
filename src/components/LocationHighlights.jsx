import React from "react";

const LocationHighlights = () => {
  const highlights = [
    { time: "10 min", place: "Ratnadeep Supermarket", icon: "store" },
    { time: "10 min", place: "Green Field Resorts", icon: "tree" },
    { time: "20 min", place: "TSPA ORR Junction", icon: "highway" },
    { time: "30 min", place: "RGI Airport", icon: "plane" },
    { time: "30 min", place: "Hitech-City", icon: "building" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-[#f0f9ff] to-white overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute top-10 -left-20 w-80 h-80 bg-gradient-to-br from-[#11689B]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-gradient-to-tl from-[#11689B]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* === LOCATION HIGHLIGHTS HEADING (Top) === */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#11689B] to-[#0e547e] text-white rounded-full shadow-xl mb-6">
            <span className="text-lg font-bold tracking-widest uppercase">Moinabad-Hyderabad</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Location <span className="text-[#11689B]">Highlights</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Strategically located in Moinabad, Hyderabad — close to everything that matters.
          </p>
        </div>

        {/* Interactive Timeline Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#11689B]/30 to-transparent hidden lg:block"></div>

            {highlights.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-center mb-10 lg:mb-16 transform transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                {/* Card */}
                <div
                  className={`relative w-full lg:w-80 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 hover:border-[#11689B]/50 transition-all duration-300 group cursor-pointer ${
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  }`}
                  style={{
                    transform: `translateX(${index % 2 === 0 ? "-20px" : "20px"})`,
                  }}
                >
                  {/* SVG Icon */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#11689B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon === "store" && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 5h14l-1.5 7H4.5L3 5z" />
                        <path d="M6 16a1 1 0 100-2 1 1 0 000 2zM14 16a1 1 0 100-2 1 1 0 000 2z" />
                      </svg>
                    )}
                    {item.icon === "tree" && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L6 7h3v9h2V7h3L10 2z" />
                      </svg>
                    )}
                    {item.icon === "highway" && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 8h14M7 12h6M5 16h10" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    )}
                    {item.icon === "plane" && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17 10l-7-6v4H3v4h7v4l7-6z" />
                      </svg>
                    )}
                    {item.icon === "building" && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4h12v12H4V4zm2 2v2h2V6H6zm4 0v2h2V6h-2zm-4 4v2h2v-2H6zm4 0v2h2v-2h-2zm-4 4v2h2v-2H6zm4 0v2h2v-2h-2z" />
                      </svg>
                    )}
                  </div>

                  <div className="text-center mt-4">
                    <div className="text-3xl font-bold text-[#11689B] mb-1">{item.time}</div>
                    <div className="text-gray-700 font-medium">{item.place}</div>
                  </div>

                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#11689B] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-[#11689B] rounded-full shadow-md hidden lg:block z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* === REMOVED BOTTOM TAGLINE === */}
        {/* No more "Moinabad - Hyderabad" or "Your gateway..." */}
      </div>
    </section>
  );
};

export default LocationHighlights;