import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import h1 from "../assets/images/wooden/wooden pool.jpg";
import h2 from "../assets/images/manduva/kerala manduva2.jpg";
import h3 from "../assets/images/wooden/wooden natural .jpg";
import h4 from "../assets/images/glassvilla/glass villa.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProjectHighlights = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      image: h1,
      title1: "ACRES",
      value1: "25+ Acres Gated Community",
      title2: "VILLAS",
      value2: "150 Luxury Villas",
    },
    {
      image: h2,
      title1: "DESIGN",
      value1: "Contemporary Tropical Architecture",
      title2: "PLOTS",
      value2: "400 - 1000 Sq.Yards",
    },
    {
      image: h3,
      title1: "AMENITIES",
      value1: "60+ World-Class Amenities",
      title2: "CLUBHOUSE",
      value2: "1,00,000 Sq.Ft.",
    },
    {
      image: h4,
      title1: "LOCATION",
      value1: "Moinabad, Hyderabad",
      title2: "CONNECTIVITY",
      value2: "15 Min to Gachibowli",
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      gsap.set(cardRefs.current.slice(1), {
        y: 120,
        opacity: 0,
        scale: 0.95,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: sectionRef.current,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cardRefs.current.slice(1).forEach((card, i) => {
        tl.to(
          card,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          i * 0.6
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F2E9] overflow-hidden pb-0 lg:pb-32"
    >
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 px-6 lg:px-12 gap-12">

        {/* LEFT FIXED CONTENT */}
        <div className="sticky top-24 self-start z-20 py-6 lg:py-16">
          <p className="text-2xl text-[#11689B] font-bold tracking-widest mb-4">
            PROJECT HIGHLIGHTS
          </p>


          {/* DESCRIPTION */}
          <div className="space-y-5 text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">
            <p>
              Welcome to <span className="font-bold text-black">MyBhoomee</span> — where luxury meets serenity in the green
              heart of Moinabad, Hyderabad.
            </p>
            <p>
              Spread across 25+ acres of pristine land, this exclusive gated villa community offers a lifestyle of
              peace, privacy, and prestige.
            </p>
            <p>
              Each villa is crafted with contemporary tropical architecture, blending indoor-outdoor living with lush
              landscapes and natural light.
            </p>
            <p>
              Enjoy a 1,00,000 sq.ft. clubhouse, 60+ world-class amenities, and a location just 15 minutes from
              Gachibowli & Financial District.
            </p>
            <p>
              Your dream home isn’t just a residence — it’s a legacy in the making.
            </p>
          </div>

          <div className="mt-12">
            {/* SMALLER BUTTON */}
            <a
              href="#enquire"
              className="inline-block bg-[#11689B] hover:bg-[#b07d2a] text-white font-semibold text-base px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl !no-underline"
            >
              Explore MyBhoomee
            </a>
          </div>
        </div>

        {/* RIGHT — STACKING CARDS */}
        <div className="relative min-h-screen pb-10">
            <div className="sticky top-24 h-screen flex items-start translate-y-40">
            <div className="relative w-full max-w-8xl">  
              
              {cards.map((card, i) => (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="
                    absolute 
                    w-full 
                    h-[500px]     /* reduced height */
                    bg-white 
                    rounded-3xl 
                    overflow-hidden 
                    shadow-2xl 
                    border border-gray-100
                  "
                  style={{
                    top: `${i * 15}px`,
                    zIndex: i + 1,
                  }}
                >
                  {/* IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex items-end p-10 lg:p-12">
                    <div className="text-white max-w-lg">
                      <div className="grid grid-cols-2 gap-10">
                        
                        {/* LEFT BOX */}
                        <div>
                          <div className="w-24 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                            <span className="text-xs font-bold tracking-widest">
                              {card.title1}
                            </span>
                          </div>
                          <p className="text-xl lg:text-2xl font-bold">
                            {card.value1}
                          </p>
                        </div>

                        {/* RIGHT BOX */}
                        <div>
                          <div className="w-26 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                            <span className="text-xs font-bold tracking-widest">
                              {card.title2}
                            </span>
                          </div>
                          <p className="text-xl lg:text-2xl font-bold">
                            {card.value2}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectHighlights;   
