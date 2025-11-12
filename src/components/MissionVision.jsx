import React from "react";

const MissionVision = () => {
  return (
    <section className="relative py-24 px-6 bg-[#11689B] overflow-hidden">
      {/* Subtle decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11689B] via-[#0e547e] to-[#11689B] opacity-90"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our Mission & Vision
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#11689B] to-[#0e547e] rounded-3xl transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500 border border-blue-100">
              {/* Icon */}
              <div className="absolute -top-8 left-10">
                <div className="bg-gradient-to-br from-[#11689B] to-[#0e547e] w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 ring-4 ring-white">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-3xl font-bold text-[#11689B] mb-6">Our Mission</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To <span className="font-semibold text-[#11689B]">revolutionize property ownership</span> by making it simple, secure, and accessible to every Indian family. We break down barriers and eliminate complexities that often discourage first-time buyers.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    We empower individuals with <span className="font-semibold text-[#11689B]">complete transparency</span>, verified legal documentation, and well-planned developments that promise long-term value and growth.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Through innovative practices and customer-centric approaches, we ensure every investment is backed by trust, integrity, and unwavering support from inquiry to possession.
                  </p>
                </div>

                {/* Features list */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#11689B] rounded-full shadow-md"></div>
                    <span className="text-base font-medium text-gray-800">100% Legal & Verified Properties</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#11689B] rounded-full shadow-md"></div>
                    <span className="text-base font-medium text-gray-800">Complete Documentation Support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#11689B] rounded-full shadow-md"></div>
                    <span className="text-base font-medium text-gray-800">Customer-First Philosophy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0e547e] to-[#0c4a6e] rounded-3xl transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500 border border-blue-100">
              {/* Icon */}
              <div className="absolute -top-8 left-10">
                <div className="bg-gradient-to-br from-[#11689B] to-[#0c4a6e] w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500 ring-4 ring-white">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-3xl font-bold text-[#11689B] mb-6">Our Vision</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To become <span className="font-semibold text-[#11689B]">India's most trusted real estate brand</span>, recognized for ethical practices, exceptional quality, and unwavering commitment to customer satisfaction.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    We envision creating <span className="font-semibold text-[#11689B]">sustainable communities</span> that enhance lifestyles, promote environmental responsibility, and contribute to India's urban development with thoughtfully designed spaces.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Our goal is to set new industry standards by delivering value-driven projects that not only appreciate over time but also create lasting legacies for generations to come.
                  </p>
                </div>

                {/* Vision goals */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#11689B] rounded-full shadow-md"></div>
                    <span className="text-base font-medium text-gray-800">Building 100+ Communities by 2030</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#11689B] rounded-full shadow-md"></div>
                    <span className="text-base font-medium text-gray-800">Sustainable & Eco-Friendly Developments</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#11689B] rounded-full shadow-md"></div>
                    <span className="text-base font-medium text-gray-800">Industry-Leading Customer Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;