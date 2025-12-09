import React from "react";
import aboutBg from "../assets/images/home6.jpg";

const AboutHero = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Black Overlay 20% */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About MyBhumi
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
