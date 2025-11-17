import React, { useState } from "react";
import { ChevronDown, MapPin, Shield, Users } from "lucide-react";
import chooseus1 from "../assets/images/chooseus img1.jpg";
import chooseus2 from "../assets/images/chooseus img2.jpg";
import chooseus3 from "../assets/images/chooseus img3.jpg";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const reasons = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Projects",
      description:
        "Every MyBhumi property is legally verified and approved, ensuring complete transparency and peace of mind.",
      details: [
        "100% RERA approved with complete documentation",
        "Clear land titles with no legal disputes",
        "Government-approved layouts",
      ],
      image: chooseus1,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Locations",
      description:
        "Our properties are strategically located with excellent connectivity and high potential for appreciation.",
      details: [
        "Close to major highways & transport hubs",
        "Near schools, hospitals & shopping centers",
        "High appreciation potential areas",
      ],
      image: chooseus2,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer-First Approach",
      description:
        "From your first enquiry to registration, we offer personal guidance every step of the way.",
      details: [
        "Dedicated relationship manager",
        "Flexible payment plans",
        "Complete documentation assistance",
      ],
      image: chooseus3,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-white via-[#EFF7FF] to-[#D9EEFF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#11689B] mb-4 tracking-tight">
            Why Choose MyBhumi?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience trust, transparency, and excellence in every plot you own.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Accordion */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="group">

                {/* Accordion header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left rounded-2xl p-6 flex items-center justify-between transition-all duration-500 shadow-lg border-2 
                    ${
                      activeIndex === index
                        ? "bg-[#11689B] text-white border-[#11689B]"
                        : "bg-white text-gray-800 border-gray-200 hover:border-[#11689B]/40"
                    }`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 
                        ${
                          activeIndex === index
                            ? "bg-white/25 text-white"
                            : "bg-[#11689B]/10 text-[#11689B]"
                        }`}
                    >
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold">{reason.title}</h3>
                  </div>

                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-500 
                      ${
                        activeIndex === index
                          ? "rotate-180 text-white"
                          : "text-[#11689B]"
                      }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out 
                  ${activeIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-white rounded-2xl p-6 border-l-4 border-[#11689B] shadow-inner">
                    <p className="text-gray-700 mb-5 leading-relaxed">
                      {reason.description}
                    </p>
                    <ul className="space-y-3">
                      {reason.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#11689B] flex items-center justify-center mt-0.5">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#11689B]/20">
                <img
                  src={
                    activeIndex !== null
                      ? reasons[activeIndex].image
                      : reasons[0].image
                  }
                  alt={reasons[activeIndex ?? 0].title}
                  className="w-full h-96 lg:h-[380px] object-cover transition-all duration-700 ease-in-out"
                />

                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8 text-white drop-shadow-md">
                  <h3 className="text-3xl font-bold">
                    {reasons[activeIndex ?? 0].title}
                  </h3>
                  <p className="text-lg opacity-90">
                    Trusted by hundreds of families
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
