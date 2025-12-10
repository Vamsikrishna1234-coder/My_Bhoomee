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
    <section className="relative py-16 md:py-20 bg-[#F8F2E9] overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-amber-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-6">
        
        {/* Header */}
        <div
          className={`mb-10 md:mb-12 text-center transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[#11689B] uppercase text-xl sm:text-2xl md:text-3xl font-bold tracking-wide block mb-2">
            Ongoing Project
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            ONYX Luxury Villas
          </h2>
        </div>

        {/* Layout Wrapper */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* -----------------------------------------------------
               MOBILE IMAGE SECTION (Custom Layout for Mobile Only)
          ------------------------------------------------------- */}
          <div className="block lg:hidden space-y-4">

            {/* Large main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={img1}
                alt="Main Villa"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-[260px] sm:h-[340px] object-cover transition-all duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Two small images below */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img2}
                  className="w-full h-[160px] object-cover"
                  alt="Interior"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img1}
                  className="w-full h-[160px] object-cover"
                  alt="Exterior"
                />
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------
               DESKTOP IMAGE GRID (unchanged)
          ------------------------------------------------------- */}
          <div className={`hidden lg:block lg:col-span-3 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[540px]">
              <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={img1}
                  alt="ONYX Villa Main View"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={img2}
                  alt="Villa Interior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={img1}
                  alt="Villa Exterior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------
               RIGHT CONTENT (unchanged for all screens)
          ------------------------------------------------------- */}
          <div className={`lg:col-span-2 flex flex-col justify-between transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>

            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">Moinabad, Hyderabad</p>
                  <p className="text-xs text-gray-600">15 km from ORR</p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Elegance in Every Detail
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                ONYX Villas seamlessly blend sophisticated architecture with tranquil 
                natural surroundings. Each villa is crafted for those who appreciate 
                premium living, featuring expansive layouts, contemporary design, and 
                an ambiance that transforms daily life into an experience.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-6 mb-4">
                {[
                  { icon: <Ruler size={20} className="text-blue-600" />, label: "3500+ Sq.ft", sub: "Villa Size" },
                  { icon: <Calendar size={20} className="text-amber-600" />, label: "Q4 2025", sub: "Possession" },
                  { icon: <Sparkles size={20} className="text-green-600" />, label: "4 BHK", sub: "Configuration" },
                  { icon: <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>, label: "24 Units", sub: "Limited Edition" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                      <p className="text-xs text-gray-600">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => (window.location.href = "/projects")}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all"
            >
              Explore Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OngoingProject;
