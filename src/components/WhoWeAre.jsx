import React from "react";
import companyImg from "../assets/images/wooden/wooden garden.jpg"; 
import founderImg from "../assets/images/person pic.jpg"; 

const WhoWeAre = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section 1: Who We Are + Smaller Company Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Who We Are */}
          <div className="order-1 space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Who We Are
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#11689B] to-blue-600 rounded-full"></div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p
                className="text-gray-700 leading-relaxed text-lg text-justify"
                style={{
                  hyphens: "auto",
                  textWrap: "pretty",
                  wordSpacing: "normal",
                }}
              >
                <span className="font-bold text-[#11689B] text-xl">MyBhumi</span> is more than just a real estate brand — we are your partners in building dreams and creating legacies. With expertise in land development, plotted layouts, and premium housing, we ensure legal clarity, superior infrastructure, and strategic locations that promise appreciation and lifestyle enhancement. Our customer-first philosophy means personalized attention, complete documentation support, and post-sale assistance — turning aspirations into reality with peace of mind and integrity. We constantly innovate with modern planning and eco-friendly infrastructure to build communities that last for generations. Every MyBhumi project reflects our unwavering commitment to trust, transparency, and long-term value creation for every customer.
              </p>
            </div>
          </div>

          {/* Right: Smaller Company Image */}
          <div className="order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={companyImg}
                alt="MyBhumi Projects & Team"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Founder Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left: Founder Image + Text Below */}
          <div className="order-1 flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-3xl font-bold text-[#11689B] text-center lg:text-left">
              Founder
            </h3>
            <img
              src={founderImg}
              alt="Founder - Mr. Rajesh Kumar"
              className="w-[590px] max-w-full h-[350px] object-cover rounded-2xl"
            />
          </div>

          {/* Right: Founder Description */}
          <div className="order-2 text-gray-700 leading-relaxed mt-6 lg:mt-2">
            <p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              style={{
                hyphens: "auto",
                textWrap: "pretty",
                wordSpacing: "normal",
              }}
            ><br></br>
              <strong>Mr. Rajesh Kumar started</strong>{" "}
              <span className="font-semibold text-[#11689B]">MyBhumi</span> with a simple belief: every family deserves a home built on trust. He personally visits every project site to ensure quality standards are never compromised. His vision is to make plotted development accessible, legal, and future-ready for middle-class India. Under his leadership, MyBhumi has delivered over 50 projects with 100% clear titles and approvals. He insists on complete transparency — from soil testing reports to bank loan tie-ups. Customers often say meeting him feels like talking to a family member, not a developer. He introduced weekend site visits and live project tracking apps — first in the region. His mantra: “We don’t sell plots. We hand over peace of mind in the form of land.” Today, thousands of families live happily because he refused to cut corners yesterday. MyBhumi is not just his company — it's his promise to India’s future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
