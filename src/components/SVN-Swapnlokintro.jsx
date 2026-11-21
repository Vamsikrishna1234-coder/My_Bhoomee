
import React from "react";
import { Download, ShieldCheck, MapPin } from "lucide-react";

// Import project image
import SwapnlokImage from "../assets/images/svn-swapnlok/swapnlok-intro.webp";

// Import brochure PDF


const SVNSwapnlokintro = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-9xl mx-auto px-5 md:px-10">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-[3px] uppercase text-[#053279] mb-4">
              Bhoomatha Group Presents
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              SVN <span className="text-[#FBBD23]">Swapnlok</span>
            </h2>

            <div className="w-20 h-1 bg-[#FBBD23] mb-7"></div>

            <p className="text-gray-600 text-base md:text-[17px] leading-8 mb-5 text-justify">
              Bhoomatha Group proudly presents SVN Swapnalok, an upcoming
              premium residential township designed to offer a secure,
              well-planned, and future-ready living experience. Developed as
              per VMRDA norms, this mega venture ensures legal security,
              modern infrastructure, and high investment potential.
            </p>

            <p className="text-gray-600 text-base md:text-[17px] leading-8 mb-5 text-justify">
              Strategically located, SVN Swapnalok provides seamless
              connectivity to major highways, business hubs, top educational
              institutions, and healthcare centers, making it an ideal choice
              for families and investors. The township features wide B.T.
              roads, lush avenue plantations, 24/7 security, parks, playgrounds,
              a modern clubhouse, a swimming pool, and a fully equipped gym,
              ensuring a balanced lifestyle with urban convenience and natural
              serenity.
            </p>

            <p className="text-gray-600 text-base md:text-[17px] leading-8 text-justify">
              With a strong focus on quality, innovation, and long-term value,
              Bhoomatha Group is set to redefine modern real estate living
              with SVN Swapnalok, offering a premium community where security,
              comfort, and investment potential come together seamlessly.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-800">
                <ShieldCheck className="text-[#FBBD23]" size={22} />
                <span className="font-semibold text-sm">
                  VMRDA Norms
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-800">
                <MapPin className="text-[#FBBD23]" size={22} />
                <span className="font-semibold text-sm">
                  Strategic Location
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
           

            <img
              src={SwapnlokImage}
              alt="SVN Swapnalok Premium Residential Township"
              className="relative z-10 w-[800px] h-[350px] md:h-[580px] object-cover rounded-2xl shadow-xl"
            />

            
          </div>

        </div>

        {/* DOWNLOAD BROCHURE */}
        <div className="flex justify-center mt-16 md:mt-20">
          <a
            href="#"
            download="SVN-Swapnalok-Brochure.pdf"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#053279] hover:bg-[#FBBD23] text-white font-semibold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 !no-underline"
          >
            <Download size={21} />
            Download Brochure
          </a>
        </div>

      </div>
    </section>
  );
};

export default SVNSwapnlokintro;
