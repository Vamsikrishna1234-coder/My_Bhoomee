import React from "react";
import aboutBg from "../assets/images/wooden/wooden-villa1.jpg"; 

const AboutHero = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }} 
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About MyBhumi</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Building trust, one home at a time.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
