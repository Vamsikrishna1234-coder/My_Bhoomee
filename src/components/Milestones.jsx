
import React, { useEffect, useRef, useState } from "react";

const milestones = [
  { value: 5000, suffix: "+", label: "Verified Properties", icon: "🏡" },
  { value: 1000, suffix: "+", label: "Happy Customers", icon: "🤝" },
  { value: 24, suffix: "/7", label: "Support Available", icon: "◷" },
  { value: 100, suffix: "%", label: "Secure Transactions", icon: "🔒" },
];

export default function Milestones() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(milestones.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    let frame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(
        milestones.map((item) =>
          Math.floor(item.value * eased)
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setCounts(milestones.map((item) => item.value));
      return;
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8fafc] py-18 md:py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700 mb-2">
            <span className="w-8 h-[2px] bg-[#053279]" />
            Our Milestones
            <span className="w-8 h-[2px] bg-[#053279]" />
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Digits That Build Trust
            
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Our journey is defined by trust, excellence and
            lasting relationships with every family we serve.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {milestones.map((item, index) => (
            <div
              key={item.label}
              style={{ "--delay": `${index * 150}ms` }}
              className={`milestone-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 md:p-9 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-900/10 ${
                started ? "milestone-visible" : ""
              }`}
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-700 to-cyan-400 transition-all duration-700 group-hover:w-full" />

              {/* Icon */}
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-100">
                {item.icon}
              </div>

              {/* Counter */}
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent tabular-nums">
                  {counts[index].toLocaleString("en-IN")}
                </span>

                <span className="text-3xl font-bold text-blue-600">
                  {item.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="mt-4 text-base font-semibold text-slate-600">
                {item.label}
              </p>

              {/* Bottom Indicator */}
              <div className="mt-7 mx-auto h-1 w-12 rounded-full bg-blue-100 overflow-hidden">
                <div className="h-full w-full origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-1000 delay-500 group-hover:scale-x-100" />
              </div>

              {/* Hover Background */}
              <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-[2.5] group-hover:opacity-60 -z-0" />
            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <p className="text-sm font-medium tracking-wide text-slate-500">
            Growing Together. Building Trust. Creating Futures.
          </p>
        </div>

      </div>

      <style>{`
        .milestone-card {
          opacity: 0;
          transform: translateY(35px);
        }

        .milestone-card.milestone-visible {
          animation: milestoneEnter 0.8s cubic-bezier(.2,.8,.2,1)
            var(--delay) forwards;
        }

        @keyframes milestoneEnter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .milestone-card,
          .milestone-card.milestone-visible {
            animation: none;
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
