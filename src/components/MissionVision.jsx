import React from "react";

const MissionVision = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-white via-[#EFF7FF] to-[#D9EEFF] text-black">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 !text-[#11689B] animated-text">
            Our Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-[#11689B] mx-auto"></div>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Mission */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 !text-[#11689B] animated-text">
              Our Mission
            </h3>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg animated-text">
              To <span className="font-semibold text-black">revolutionize property ownership</span> by making it simple, secure,
              and accessible to every Indian family through clarity and confidence.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg animated-text">
              Our goal is to provide <span className="font-semibold text-black">complete transparency</span>, legal clarity,
              and value-driven projects that bring long-lasting trust and growth.
            </p>

            <p className="text-gray-800 mb-6 leading-relaxed text-lg animated-text">
              We focus on building relationships through integrity, guidance, and end-to-end support throughout
              the buying journey.
            </p>

            <ul className="text-gray-900 space-y-2 text-lg">
              <li className="animated-list-item">• 100% Legal & Verified Properties</li>
              <li className="animated-list-item">• Complete Documentation Support</li>
              <li className="animated-list-item">• Customer-First Approach</li>
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 !text-[#11689B] animated-text">
              Our Vision
            </h3>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg animated-text">
              To become <span className="font-semibold text-black">India’s most trusted real estate brand</span>, recognized
              for ethics, quality, and long-term value creation.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg animated-text">
              We aim to build <span className="font-semibold text-black">sustainable communities</span> that enrich urban living
              while staying environment-focused and future-ready.
            </p>

            <p className="text-gray-800 mb-6 leading-relaxed text-lg animated-text">
              Our vision is to create remarkable developments that grow in value and serve generations to come.
            </p>

            <ul className="text-gray-900 space-y-2 text-lg">
              <li className="animated-list-item">• Build 100+ Communities by 2030</li>
              <li className="animated-list-item">• Eco-Friendly & Future-Proof Developments</li>
              <li className="animated-list-item">• Leading Customer Satisfaction & Trust</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Hover Animation Style */}
      <style>{`
        .animated-text {
          display: inline-block;
          transition: transform 0.35s ease, color 0.3s ease;
          cursor: default;
        }
        .animated-text:hover {
          transform: translateY(-4px);
          color: #11689B;
        }

        .animated-list-item {
          display: block;
          transition: transform 0.35s ease, color 0.3s ease;
          cursor: default;
        }
        .animated-list-item:hover {
          transform: translateY(-4px);
          color: #11689B;
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
