import React from "react";
import investBanner from "../assets/images/wooden/wooden natural .jpg"; 

const InvestmentReasons = () => {
  const reasons = [
    "Leverage",
    "Suitable Investment",
    "Extra Income",
    "A Necessity",
    "An Asset",
    "Retirement Plan",
    "Diversification",
    "Appreciation Potential",
    "Steady Cash Flow",
    "Land Security",
  ];

  return (
    <section
      className="relative py-28 text-white bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(36, 35, 35, 0.85), rgba(40, 39, 39, 0.9)), url(${investBanner})`,
      }}
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#FFD6A5]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB347]/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FFD6A5] tracking-[0.3em] text-sm uppercase mb-4">
            Invest Smartly, Live Beautifully
          </h3>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse mb-6">
            10 Good Reasons to Invest
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200">
            in <span className="text-[#FFD6A5] font-semibold">MY BHOOMEE ONYX PROPERTIES</span>
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative border border-[#FFD6A5]/40 bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-gradient-to-br from-[#FFD6A5]/10 to-[#FFB347]/10 hover:scale-105 transition-all duration-500"
            >
              <div className="absolute top-3 right-3 text-[#FFD6A5] text-lg font-bold opacity-60">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <h2 className="text-xl font-semibold mt-4 text-[#FFD6A5] group-hover:text-[#FFC87C] transition-colors duration-300">
                {reason}
              </h2>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-20">
          <p className="text-lg md:text-xl text-gray-300 italic">
            “Building wealth through smart land investments.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentReasons;
