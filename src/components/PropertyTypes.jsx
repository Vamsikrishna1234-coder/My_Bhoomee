
import React from "react";

const properties = [
  {
    id: "01",
    title: "Residential",
    subtitle: "Luxury Apartments",
    description: "Discover thoughtfully designed homes that bring comfort, elegance and modern living together.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 29L32 9l24 20M14 25v30h36V25M25 55V38h14v17M22 29h.1M42 29h.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Commercial",
    subtitle: "Office & Retail",
    description: "Premium commercial spaces designed to support businesses, retail ventures and professional growth.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 55V13h40v42M7 55h50M22 23h7m7 0h7M22 34h7m7 0h7M22 45h7m7 0h7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Ventures",
    subtitle: "Joint Developments",
    description: "Explore strategic land ventures and development opportunities built around shared growth.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 52h50M13 45l19-33 19 33M20 45h24M32 12v33M23 28h18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Townships",
    subtitle: "Planned Communities",
    description: "Integrated communities combining residential, retail and lifestyle infrastructure.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 55V24l14-10 14 10v31M36 55V19l10-7 10 7v36M3 55h58M17 32h.1M27 32h.1M17 42h.1M27 42h.1M44 29h.1M44 40h.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Industrial",
    subtitle: "Estates & Parks",
    description: "Strategically planned industrial estates and business parks for enterprises and industries.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 55V29l16 10V29l16 10V17h16v38H8ZM15 47h5m10 0h5m10 0h5M44 25h5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function PropertyTypes() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 md:mb-20">

          

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#053279] leading-[1.1] max-w-2xl">
              <span className="relative inline-block">
                Our Property Types
                <span className="absolute -bottom-2 left-0 w-2/3 h-2 bg-[#FBBD23]" />
              </span>
            </h2>

            <p className="max-w-md text-[#053279]/75 text-base md:text-lg leading-8">
              Find your perfect property type from our diverse portfolio.
              From dream homes to business destinations, we create spaces
              for every ambition.
            </p>

          </div>
        </div>

        {/* Category List */}
        <div className="border-t border-[#053279]/20">

          {properties.map((item) => (
            <div
              key={item.id}
              className="group relative border-b border-[#053279]/20"
            >

              <div className="relative grid grid-cols-1 md:grid-cols-[70px_100px_1fr_1fr_50px] items-center gap-5 md:gap-8 py-9 md:py-10 transition-all duration-500">

                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#053279] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />

                {/* Number */}
                <span className="relative z-10 text-sm font-bold tracking-widest text-[#FBBD23]">
                  {item.id}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-[68px] h-[68px] flex items-center justify-center rounded-full border border-[#053279]/20 text-[#053279] transition-all duration-500 group-hover:border-[#FBBD23] group-hover:text-[#FBBD23] group-hover:rotate-12">
                  <div className="w-9 h-9">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#053279] transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#053279]/60 group-hover:text-[#FBBD23] transition-colors duration-500">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="relative z-10 text-sm md:text-base leading-7 text-[#053279]/70 max-w-md transition-colors duration-500 group-hover:text-white/80">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-[#FBBD23] text-[#053279] flex items-center justify-center transition-all duration-500 group-hover:translate-x-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">

          <p className="text-[#053279] font-semibold text-sm">
            Building spaces. Creating opportunities.
          </p>

          <span className="bg-[#FBBD23] text-[#053279] px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
            05 Property Segments
          </span>

        </div>

      </div>

    </section>
  );
}
