
import React from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";



const HeroSection = () => {
  const stats = [
    { number: "20+", label: "Our Ventures" },
    { number: "40+", label: "Residential Apartments" },
    { number: "10+", label: "Commercial Apartments" },
    { number: "50+", label: "Duplex Villas" },
  ];

  return (
    <section className="
      relative w-full overflow-hidden
      min-h-[calc(100svh-110px)]
      lg:min-h-[calc(100svh-152px)]
      bg-[#053279]
      flex items-center
    ">

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">

        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="public/videos/bhoomatha vc.mp4"
            type="video/mp4"
          />
        </video>

      </div>


      {/* GRADIENT OVERLAY */}
      <div className="
        absolute inset-0 z-[2]
        bg-gradient-to-r
        from-[#053279]/95
        via-[#053279]/85
        to-[#053279]/65
      " />

      {/* HERO CONTENT */}
      <div className="
        relative z-10 w-full
        max-w-[1500px] mx-auto
        px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20
        py-14 sm:py-16 lg:py-12
      ">

        <div className="max-w-[1000px]">

          {/* EYEBROW TEXT */}
          <p className="
            hero-script
            text-white
            text-[35px] sm:text-[43px]
            md:text-[52px] lg:text-[60px]
            leading-tight
            mb-3
          ">
            Andhra Pradesh
          </p>

          {/* MAIN HEADING */}
          <h1 className="
            text-white font-bold
            text-[34px] sm:text-[43px]
            md:text-[54px] lg:text-[62px]
            leading-[1.12]
            tracking-[-1.5px]
            mb-1
          ">
            The Bhoomatha Growth Story
          </h1>

          {/* HIGHLIGHTED HEADING */}
          <h2 className="
            text-[#FBBD23] font-bold
            text-[32px] sm:text-[42px]
            md:text-[53px] lg:text-[62px]
            leading-[1.15]
            tracking-[-1.5px]
            mb-5
          ">
            Legacy of Trust Future of Scale
          </h2>

          {/* DESCRIPTION */}
          <p className="
            text-white/90
            text-[14px] sm:text-[16px]
            md:text-[17px]
            leading-[1.65]
            max-w-[790px]
            mb-8
          ">
            Bhoomatha stands as a symbol of vision and reliability in
            Andhra's real estate landscape. With a legacy of trust and
            a future shaped by bold townships and transformative
            communities, we are redefining growth corridors and
            creating enduring value for investors, partners, and
            generations to come.
          </p>

          {/* CTA BUTTONS */}
          <div className="
            flex flex-wrap items-center
            gap-3 sm:gap-4
            mb-12 lg:mb-16
          ">

            {/* EXPLORE PROJECTS */}
            <Link
              to="/projects"
              className="
                group flex items-center justify-center gap-3
                px-6 sm:px-7
                h-[43px] sm:h-[46px]
                min-w-[190px]
                rounded-full
                bg-[#FBBD23]
                text-black
                text-[13px] sm:text-[14px]
                font-bold
                !no-underline
                shadow-lg
                transition-all duration-300
                hover:bg-white
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Explore Our Projects

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* WATCH OVERVIEW */}
            <Link
              to="/aboutus"
              className="
                group flex items-center justify-center gap-3
                px-6 sm:px-7
                h-[43px] sm:h-[46px]
                min-w-[190px]
                rounded-full
                border border-white/80
                bg-white/5
                backdrop-blur-sm
                text-white
                text-[13px] sm:text-[14px]
                font-bold
                !no-underline
                transition-all duration-300
                hover:bg-[#FBBD23]
                hover:text-black
                hover:-translate-y-1
              "
            >
              <Play size={15} fill="currentColor" />

              Watch Overview
            </Link>

          </div>

          {/* COMPANY STATISTICS */}
          <div className="
            grid grid-cols-2
            sm:grid-cols-4
            gap-x-5 gap-y-7
            max-w-[850px]
          ">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  flex flex-col
                  items-center sm:items-center
                  text-center
                  group
                "
              >
                <h3 className="
                  text-white
                  text-[29px] sm:text-[32px]
                  md:text-[35px]
                  font-bold
                  leading-none
                  mb-3
                  transition-colors duration-300
                  group-hover:text-[#FBBD23]
                ">
                  {item.number}
                </h3>

                <p className="
                  text-white/90
                  text-[13px] sm:text-[15px]
                  md:text-[17px]
                  font-medium
                  leading-relaxed
                  max-w-[150px]
                ">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* SCRIPT FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&display=swap');

        .hero-script {
          font-family: 'Dancing Script', cursive;
          font-weight: 500;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-script {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
};

export default HeroSection;








































// import { useState, useEffect } from "react";
// import home1 from "../assets/images/bannerhero1.jpg";
// import home2 from "../assets/images/home2.jpg";
// import home3 from "../assets/images/home5.jpg";
// import home4 from "../assets/images/home4.jpg";

// const slides = [
//   { image: home1 },
//   { image: home2 },
//   { image: home3 },
//   { image: home4 },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);
//   const [curtainOpen, setCurtainOpen] = useState(false);

//   // Curtain animation on load
//   useEffect(() => {
//     setTimeout(() => setCurtainOpen(true), 300);
//   }, []);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div
//       className="
//         relative w-full
//         min-h-[70vh]           /* Mobile height */
//         sm:min-h-[80vh]        /* Tablet height */
//         md:min-h-[90vh]        /* Small desktop height */
//         xl:min-h-screen        /* Large desktop unchanged */
//         bg-black overflow-hidden
//       "
//     >
//       {/* Slides */}
//       {slides.map((slide, index) => {
//         const isActive = index === current;

//         return (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-[800ms] ${
//               isActive ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               className="
//                 w-full h-full object-cover
//                 object-center
//               "
//             />

//             {/* Caption */}
//             {isActive && (
//               <div
//                 className="
//                   absolute inset-0 flex flex-col justify-center items-center
//                   text-center px-4 sm:px-6
//                   z-20
//                 "
//               >
//                 <h1
//                   className="
//                     text-white 
//                     text-3xl sm:text-5xl md:text-6xl xl:text-6xl 
//                     font-bold mb-4 drop-shadow-xl
//                   "
//                 >
//                   {/* Optional caption */}
//                 </h1>

//                 <p
//                   className="
//                     text-gray-200
//                     text-base sm:text-xl md:text-2xl 
//                     max-w-[700px] leading-relaxed
//                   "
//                 ></p>
//               </div>
//             )}
//           </div>
//         );
//       })}

//       {/* PREV / NEXT BUTTONS */}
//       <div
//         className="
//           absolute 
//           bottom-4 right-4 
//           sm:bottom-6 sm:right-6 
//           flex gap-3 
//           z-30
//         "
//       >
//         <button
//           onClick={prevSlide}
//           className="
//             px-4 py-2 sm:px-6 
//             bg-white/90 text-black 
//             font-semibold rounded-lg shadow-md 
//             hover:bg-white transition
//           "
//         >
//           Prev
//         </button>

//         <button
//           onClick={nextSlide}
//           className="
//             px-4 py-2 sm:px-6 
//             bg-white/90 text-black 
//             font-semibold rounded-lg shadow-md 
//             hover:bg-white transition
//           "
//         >
//           Next
//         </button>
//       </div>

//       {/* Curtain Animation */}
//       <div
//         className={`
//           absolute inset-0 bg-black z-40 
//           transition-transform duration-[2000ms]
//           ${curtainOpen ? "translate-y-full" : ""}
//         `}
//       >
//         <div
//           className="
//             absolute top-1/2 left-1/2 
//             -translate-x-1/2 -translate-y-1/2 
//             text-white
//             text-3xl sm:text-4xl md:text-5xl xl:text-6xl
//             font-bold tracking-wide
//           "
//         >
//           Welcome To MyBhoomee
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
