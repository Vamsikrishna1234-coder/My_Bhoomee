import React from "react";
import PurnaSai from "../../components/Purna-Sai";

// Hero Image (make sure this file exists)
import Banner from "../../assets/images/bali housebanner.jpg";

const PurnaSaiPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">

        {/* Background Image */}
        <img
          src={Banner}
          alt="Purna Sai Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Text */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Purna Sai
          </h1>
          
        </div>
      </section>


      {/* ================= FULL PURNA SAI CONTENT ================= */}
      <PurnaSai />
    </>
  );
};

export default PurnaSaiPage;
