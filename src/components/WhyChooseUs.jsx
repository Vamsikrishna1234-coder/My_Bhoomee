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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
            Why Choose MyBhoomee?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience trust, transparency, and excellence in every plot you own.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Accordion */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={index}>

                  {/* HEADER */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`
                      w-full text-left rounded-2xl p-6 flex items-center justify-between
                      transition-all duration-300
                      border
                      ${isActive
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:shadow-md"
                      }
                    `}
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`
                          w-14 h-14 rounded-2xl flex items-center justify-center
                          border transition-all
                          ${isActive
                            ? "bg-white text-black border-white"
                            : "bg-white text-black border-gray-300"
                          }
                        `}
                      >
                        {reason.icon}
                      </div>

                      <h3 className="text-xl font-bold">
                        {reason.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`
                        w-6 h-6 transition-transform duration-300
                        ${isActive ? "rotate-180 text-white" : "text-black"}
                      `}
                    />
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-5 leading-relaxed">
                        {reason.description}
                      </p>

                      <ul className="space-y-3">
                        {reason.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center mt-0.5">
                              <svg
                                className="w-4 h-4 text-black"
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
              );
            })}
          </div>

          {/* Image */}
          <div className="sticky top-24">
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src={reasons[activeIndex ?? 0].image}
                alt={reasons[activeIndex ?? 0].title}
                className="w-full h-96 object-cover transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
