import React from "react";
import companyImg from "../assets/images/wooden/wooden garden.jpg";
import founderImg from "../assets/images/person pic.jpg";

const WhoWeAre = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section 1: Who We Are */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left: Content */}
          <div className="order-1 space-y-6">
            <h2 className="text-5xl font-bold text-black leading-tight">
              Who We Are
            </h2>

            {/* Simple divider */}
            <div className="w-20 h-1.5 bg-black rounded-full"></div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p
                className="text-gray-700 leading-relaxed text-lg text-justify"
                style={{
                  hyphens: "auto",
                  textWrap: "pretty",
                  wordSpacing: "normal",
                }}
              >
                <span className="font-bold text-black text-xl">MyBhoomee</span> is more than just a real estate brand — we are your partners in building dreams and creating legacies. With expertise in land development, plotted layouts, and premium housing, we ensure legal clarity, superior infrastructure, and strategic locations that promise appreciation and lifestyle enhancement. Our customer-first philosophy means personalized attention, complete documentation support, and post-sale assistance — turning aspirations into reality with peace of mind and integrity. We constantly innovate with modern planning and eco-friendly infrastructure to build communities that last for generations. Every MyBhoomee project reflects our unwavering commitment to trust, transparency, and long-term value creation for every customer.
              </p>
            </div>
          </div>

          {/* Right: Company Image */}
          <div className="order-2">
            <div className="rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src={companyImg}
                alt="MyBhoomee Projects & Team"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Founder */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* Founder Image */}
          <div className="order-1 flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-3xl font-bold text-black text-center lg:text-left">
              Founder
            </h3>
            <img
              src={founderImg}
              alt="Founder - Mr. Rajesh Kumar"
              className="w-[590px] max-w-full h-[350px] object-cover rounded-2xl"
            />
          </div>

          {/* Founder Description */}
          <div className="order-2 text-gray-700 leading-relaxed mt-6 lg:mt-2">
            <p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              style={{
                hyphens: "auto",
                textWrap: "pretty",
                wordSpacing: "normal",
              }}
            >
              <br />
              <strong className="text-black">Mr. Rajesh Kumar started</strong>{" "}
              <span className="font-semibold text-black">MyBhoomee</span> with a simple belief: every family deserves a home built on trust. He personally visits every project site to ensure quality standards are never compromised. His vision is to make plotted development accessible, legal, and future-ready for middle-class India. Under his leadership, MyBhoomee has delivered over 50 projects with 100% clear titles and approvals. He insists on complete transparency — from soil testing reports to bank loan tie-ups. Customers feel like talking to a family member, not a developer. He introduced weekend site visits and live project tracking apps — first in the region. His mantra: “We don’t sell plots. We hand over peace of mind in the form of land.” MyBhoomee is not just his company — it's his promise to India’s future.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
