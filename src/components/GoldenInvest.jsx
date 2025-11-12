import React from "react";
import bannerImg from "../assets/images/banner1.jpg";

const GoldenInvestmentBanner = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(43, 42, 42, 0.81), rgba(49, 48, 48, 0.77)), url(${bannerImg})`,
      }}
    >
      {/* Decorative Golden Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD6A5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl"></div>

      {/* Content Section */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        {/* 🌿 Main Title */}
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse">
          ONYX
        </h2>
        <p className="text-lg md:text-xl text-[#FFD6A5] font-light tracking-widest uppercase mb-8">
          A Life Closer to Nature
        </p>

        {/* ✨ Tagline */}
        <h3 className="text-2xl md:text-3xl tracking-[0.2em] text-[#FFD6A5] uppercase mb-4 animate-fadeIn">
          Come – Explore – Invest
        </h3>

        {/* 🌟 Main Banner Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A5] via-[#FFB347] to-[#FFC87C] animate-pulse">
          Golden Investment Opportunity
        </h1>
         
        
      </div>
    </section>
  );
};

export default GoldenInvestmentBanner;
