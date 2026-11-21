
import React from "react";

// Import Images
import MasterPlanImage from "../assets/images/svn-swapnlok/svn-mp.webp";
import LifestyleImage1 from "../assets/images/svn-swapnlok/svn-map.png";
import LifestyleImage2 from "../assets/images/svn-swapnlok/svn-Highway.webp";

const SVNSwapnlokMasterPlan = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-9xl mx-auto px-5 md:px-10">

        {/* ================= MASTER PLAN SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group">

            <img
              src={MasterPlanImage}
              alt="SVN Swapnalok Proposed Master Plan"
              className="relative z-10 w-full h-[320px] md:h-[680px] object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-[#053279] uppercase tracking-[3px] text-sm font-semibold">
              SVN Swapnalok
            </span>

            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Proposed <span className="text-[#FBBD23]">Master Plan</span>
            </h2>

            <div className="w-20 h-1 bg-[#FBBD23] mb-7"></div>

            <p className="text-gray-600 text-base md:text-[17px] leading-8 text-justify mb-6">
              The master-planned community at SVN Swapnalok by Bhoomatha Group
              seamlessly integrates urban convenience with expansive open
              spaces, creating a harmonious and thoughtfully designed
              residential environment. Whether you're looking for a cozy
              retreat, a spacious family home, or a long-term investment,
              SVN Swapnalok offers a variety of plot sizes to cater to diverse
              needs. Designed to provide modern comforts while preserving
              the beauty of nature, this vibrant township is ideal for those
              seeking a secure, peaceful, and fulfilling lifestyle.
            </p>

            <p className="text-gray-600 text-base md:text-[17px] leading-8 text-justify">
              Featuring world-class infrastructure, well-laid wide roads,
              and excellent connectivity, every aspect of SVN Swapnalok is
              designed to enhance daily living experiences. Residents enjoy
              easy access to top educational institutions, advanced healthcare
              facilities, shopping centers, and entertainment hubs, ensuring
              ultimate convenience. Strategically located, the township offers
              seamless connectivity to major highways, business districts,
              and the upcoming Bhogapuram Airport Aviation City, making it
              a high-appreciation investment opportunity.
            </p>
          </div>

        </div>

        {/* ================= HORIZONTAL DIVIDER ================= */}
        <div className="flex items-center gap-5 my-16 md:my-20">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-3 h-3 rotate-45 bg-amber-500"></div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* ================= LIFESTYLE SECTION ================= */}
        <div className="text-center mb-10 md:mb-14">

          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Everything in place for an
            <span className="block text-[#FBBD23] mt-2">
              enviable lifestyle
            </span>
          </h2>

          <div className="w-24 h-1 bg-[#FBBD23] mx-auto mt-6"></div>

        </div>

        {/* TWO IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* IMAGE 1 */}
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src={LifestyleImage1}
              alt="SVN Swapnalok Lifestyle and Amenities"
              className="w-full h-[280px] md:h-[800px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src={LifestyleImage2}
              alt="SVN Swapnalok Premium Township Lifestyle"
              className="w-full h-[280px] md:h-[800px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default SVNSwapnlokMasterPlan;
