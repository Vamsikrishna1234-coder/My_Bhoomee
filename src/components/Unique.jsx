
import React, { useEffect, useRef, useState } from "react";

const AboutBhoomatha = ({
  image = "src/assets/images/unique img.png",
  buttonLink = "#projects",
}) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Our Vision",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M4 32S14 14 32 14s28 18 28 18-10 18-28 18S4 32 4 32Z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="10"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      description:
        "To lead in real estate by delivering high-value, sustainable, and legally secure properties. We create investment opportunities with premium infrastructure, long-term appreciation, and trusted, transparent business practices.",
    },
    {
      title: "Our Mission",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="29" cy="35" r="23"/>
          <circle cx="29" cy="35" r="14"/>
          <circle cx="29" cy="35" r="5"/>
          <path d="m29 35 24-25M43 10h10v10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description:
        "We develop legally approved, strategically located properties that deliver high value and sustainable communities, combining quality, transparency, and long-term growth for homeowners and investors.",
    },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white">

      {/* ABOUT SECTION */}
      <div className="bg-[#f2f5fa] relative">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div
              className={`lg:col-span-7 about-reveal ${
                visible ? "about-visible" : ""
              }`}
            >

            {/* Heading */}

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053279] leading-[1.15]">
                What Makes
                <br className="hidden sm:block" />
                Bhoomatha <span className="relative inline-block">
                  Unique
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FBBD23]" />
                </span>
              </h2>

              <div className="w-full h-[2px] bg-[#053279] mt-7 mb-7" />

              <div className="space-y-4 text-[#263b5b] text-base md:text-[17px] leading-7">

                <p>
                  At Bhoomatha Group, we don't just build properties —
                  we create investment opportunities that promise high
                  appreciation, secure ownership, and long-term value.
                  Our commitment to trust, transparency, and excellence
                  has made us a leading real estate developer in South India.
                </p>

                <p>
                  With thousands of happy customers and investors, we
                  take pride in being one of the most trusted real estate
                  brands, delivering high-quality, affordable, and
                  future-ready projects.
                </p>

              </div>

              {/* CTA */}
              <a
                href={buttonLink}
                className="inline-flex items-center gap-5 mt-9 px-7 py-3.5 rounded-full bg-[#053279] text-white font-semibold text-sm md:text-base shadow-md hover:bg-[#FBBD23] hover:text-[#053279] hover:shadow-xl transition-all duration-300 group"
              >
                Why Choose Bhoomatha Group

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`lg:col-span-5 relative about-reveal about-delay ${
                visible ? "about-visible" : ""
              }`}
            >

              <div className="relative">

                {/* Decorative Border */}
                <div className="absolute -top-3 -right-3 w-28 h-28 border-t-[5px] border-r-[5px] border-[#FBBD23] rounded-tr-2xl" />

                <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl">

                  <img
                    src={image}
                    alt="Bhoomatha Group residential development"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#053279]/40 via-transparent to-transparent" />

                  {/* Image Label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-[#FBBD23] text-[#053279] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                      Building Trust Since Day One
                    </span>
                  </div>

                </div>

                <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-[5px] border-l-[5px] border-[#FBBD23] rounded-bl-2xl -z-0" />

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="bg-white relative py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-[#053279] text-xs font-bold tracking-[3px] uppercase">
              Our Purpose
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#053279] mt-3">
              What Drives Us Forward
            </h2>

            <div className="w-16 h-1 bg-[#FBBD23] mx-auto mt-5 rounded-full" />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {values.map((item, index) => (
              <div
                key={item.title}
                style={{ "--delay": `${index * 150}ms` }}
                className={`value-card group relative flex flex-col sm:flex-row items-center sm:items-start gap-7 p-8 md:p-10 rounded-2xl border border-[#053279]/10 bg-white shadow-[0_10px_40px_rgba(5,50,121,0.07)] hover:shadow-[0_20px_50px_rgba(5,50,121,0.14)] hover:-translate-y-2 transition-all duration-500 ${
                  visible ? "value-visible" : ""
                }`}
              >

                {/* Accent */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-[#FBBD23] rounded-b-full" />

                {/* Icon */}
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#053279] text-[#FBBD23] flex items-center justify-center group-hover:bg-[#FBBD23] group-hover:text-[#053279] transition-all duration-500 group-hover:rotate-3">

                  <div className="w-11 h-11">
                    {item.icon}
                  </div>

                </div>

                {/* Text */}
                <div className="text-center sm:text-left">

                  <h3 className="text-2xl font-bold text-[#053279] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#344b6b] text-[15px] leading-7">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        .about-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-delay {
          transition-delay: 180ms;
        }

        .value-card {
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity 0.7s ease var(--delay),
            transform 0.7s ease var(--delay),
            box-shadow 0.5s ease;
        }

        .value-card.value-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .value-card,
          .about-visible,
          .value-card.value-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

    </section>
  );
};

export default AboutBhoomatha;
