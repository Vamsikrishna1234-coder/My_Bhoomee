import React from "react";
import Banner from "../../assets/images/home5.jpg"
import GlassVilla from "../../components/GlassVilla";


const GlassVillaPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">

        {/* Background Image */}
        <img
          src={Banner}
          alt="Glass Villa Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Text */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-5xl lg:text-6xl font-bold">
            Luxury Glass Villa
          </h1>
        </div>

      </section>

      {/* ================= FULL GLASS VILLA CONTENT ================= */}
      <GlassVilla />
    </>
  );
};

export default GlassVillaPage;
