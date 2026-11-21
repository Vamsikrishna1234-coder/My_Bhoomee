import React from "react";

// EXACT correct path for your hero image:
import Banner1 from "../../assets/images/home3.jpg";
import NatureValley from "../../components/SVN-Swapnlokintro";


const NatureValleyPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[75vh] flex items-center justify-center">


        <h1 className="absolute text-white text-4xl lg:text-6xl font-bold drop-shadow-lg">
          Nature Valley
        </h1>
      

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

      

      {/* Nature Valley Full Page Content */}
      <NatureValley />
    </>
  );
};

export default NatureValleyPage;
