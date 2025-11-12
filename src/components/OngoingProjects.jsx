import React from "react";
import WoodenVilla from "../assets/images/wooden/wooden-villa.jpg";

const OngoingProjects = () => {
  const handleProjectClick = () => {
    window.location.href = "/projects";
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-xm font-bold text-[#11689B] tracking-[0.3em] uppercase mb-3">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#11689B]">
            Ongoing Project
          </h2>
        </div>

        {/* Combined Project Card */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          {/* Image Section */}
          <div className="relative h-64 sm:h-80 md:h-[400px] w-full">
            <img
              src={WoodenVilla}
              alt="ONYX Project"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            {/* Badge */}
            <div className="absolute top-6 right-6 bg-[#11689B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              In Progress
            </div>
          </div>

          {/* Text Section */}
          <div className="bg-white p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Project Title */}
              <div className="md:col-span-1">
                <h3 className="text-3xl md:text-4xl font-bold text-[#11689B] mb-1">
                  ONYX
                </h3>
                <p className="text-[#11689B] font-medium text-sm md:text-base italic">
                  A Life Closer to Nature
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-1 md:border-l md:border-r border-gray-200 md:px-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Modern luxury meets natural serenity in this thoughtfully
                  designed community surrounded by lush greenery.
                </p>
              </div>

              {/* CTA Button */}
              <div className="md:col-span-1 flex justify-start md:justify-end">
                <button
                  onClick={handleProjectClick}
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-[#11689B] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#0e557f] hover:shadow-lg hover:scale-105"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Features Row */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
