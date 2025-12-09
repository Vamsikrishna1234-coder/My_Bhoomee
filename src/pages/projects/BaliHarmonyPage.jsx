import React from "react";
import Fruits from "../../components/Fruits";
import BaliHarmony from "../../components/BaliHarmony";

// Hero Image (make sure this file exists)
import Banner from "../../assets/images/bali housebanner.jpg";

const BaliHarmonyPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">

        {/* Background Image */}
        <img
          src={Banner}
          alt="Bali Harmony Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Text */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Bali Harmony
          </h1>
          
        </div>
      </section>

      {/* ================= FRUITS SECTION ================= */}
      <Fruits />

      {/* ================= FULL BALI HARMONY CONTENT ================= */}
      <BaliHarmony />
    </>
  );
};

export default BaliHarmonyPage;
