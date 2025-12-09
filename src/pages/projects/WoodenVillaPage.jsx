import React from "react";

// EXACT correct path for your hero image:
import Banner1 from "../../assets/images/home3.jpg";
import Woodenvilla from "../../components/Woodenvilla"
import Fruits from "../../components/Fruits"

const WoodenVillaPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">

        {/* Hero Image */}
        <img
          src={Banner1}
          alt="Wooden Villa Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/15"></div>

        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl lg:text-6xl font-bold drop-shadow-lg">
            European Wooden Villa
          </h1>
          
        </div>
      </section>

      {/* Fruits Section */}
      <Fruits />

      {/* Wooden Villa Full Page Content */}
      <Woodenvilla />
    </>
  );
};

export default WoodenVillaPage;
