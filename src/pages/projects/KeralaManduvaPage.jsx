import React from "react";
import Fruits from "../../components/Fruits";
import KeralaManduva from "../../components/KeralaManduva";

// Hero image (make sure this image exists in your folder)
import Banner from "../../assets/images/home6.jpg";

const KeralaManduvaPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">

        {/* Background Image */}
        <img
          src={Banner}
          alt="Kerala Manduva Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Text */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Kerala Manduva House
          </h1>
          
        </div>
      </section>

      {/* ================= FRUITS SECTION ================= */}
      <Fruits />

      {/* ================= FULL MANDUVA CONTENT ================= */}
      <KeralaManduva />
    </>
  );
};

export default KeralaManduvaPage;
