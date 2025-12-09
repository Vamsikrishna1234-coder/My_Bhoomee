import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, Sparkles, Calendar, Ruler } from "lucide-react";
import img1 from "../assets/images/ongoing img1.jpeg"
import img2 from "../assets/images/ongoing img2.jpeg"

const OngoingProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="relative py-20 bg-[#F8F2E9] overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-8xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className={`mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>

          {/* Centered Ongoing Project */}
          <span className="text-[#11689B] uppercase text-3xl font-bold tracking-widest block text-center mb-3">
            Ongoing Project
          </span>

          {/* Keep heading same */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            ONYX Luxury Villas
          </h2>

        </div>


        {/* Split Layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Left: Image Gallery Style - 3 columns */}
          <div className={`lg:col-span-3 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[540px]">
              
              {/* Large Main Image */}
              <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={img1}
                  alt="ONYX Villa Main View"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
              </div>

              {/* Small Images */}
              <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={img2}
                  alt="Villa Interior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={img1}
                  alt="Villa Exterior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right: Content - 2 columns */}
          <div className={`lg:col-span-2 flex flex-col justify-between transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            
            {/* Top Content */}
            <div>
              <div className="flex items-start gap-2 mb-4">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-black-600 font-medium">Moinabad, Hyderabad</p>
                  <p className="text-ms text-black-600">15 km from ORR</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Elegance in Every Detail
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ONYX Villas seamlessly blend sophisticated architecture with tranquil natural surroundings. Each villa is crafted for those who appreciate premium living, featuring expansive layouts, contemporary design, and an ambiance that transforms daily life into an experience.
                </p>
              </div>

              {/* Key Features - Compact Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Ruler size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">3500+ Sq.ft</p>
                    <p className="text-xs text-gray-600">Villa Size</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Q4 2025</p>
                    <p className="text-xs text-gray-600">Possession</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">4 BHK</p>
                    <p className="text-xs text-gray-600">Configuration</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">24 Units</p>
                    <p className="text-xs text-gray-600">Limited Edition</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = "/projects"}
                className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Project
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProject;