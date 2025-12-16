import React, { useEffect, useRef } from "react";

export default function Milestones() {
  const counters = [
    { value: 500, label: "Verified Properties" },
    { value: 1000, label: "Happy Customers" },
    { value: 24, label: "Support Available" },
    { value: 100, label: "Secure Transactions" },
  ];

  const counterRefs = useRef([]);

  useEffect(() => {
    counterRefs.current.forEach((ref, i) => {
      if (!ref) return;

      let start = 0;
      const end = counters[i].value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start >= end) {
          ref.innerText = end + (end === 24 ? "/7" : "+");
        } else {
          ref.innerText = Math.floor(start);
          requestAnimationFrame(animate);
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) animate();
        },
        { threshold: 0.6 }
      );

      observer.observe(ref);
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Milestones
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Trusted by thousands of families with strong performance over years.
          </p>
        </div>

        {/* Milestone Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-8
                text-center
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Counter */}
              <div
                ref={(el) => (counterRefs.current[i] = el)}
                className="text-5xl font-extrabold text-black tracking-wide"
              >
                0
              </div>

              <p className="mt-3 text-gray-700 text-base font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Smooth counter effect */}
      <style>{`
        .odometer-digit {
          display: inline-block;
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
