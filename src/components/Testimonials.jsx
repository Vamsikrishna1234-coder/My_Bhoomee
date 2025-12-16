import React from "react";
import test1 from "../assets/images/testimonials/test-1.jpg";
import test2 from "../assets/images/testimonials/test-2.jpeg";
import test3 from "../assets/images/testimonials/test-4.jpg";
import test4 from "../assets/images/testimonials/test-5.jpg";
import test5 from "../assets/images/testimonials/test-6.jpg";

const testimonials = [
  {
    name: "Ram Kumar",
    location: "Hyderabad",
    text: "Bought our dream home in 30 days!",
    avatar: test1,
  },
  {
    name: "Sita Murthy",
    location: "Hyderabad",
    text: "Sold flat in 12 days! 500+ buyers via app!",
    avatar: test2,
  },
  {
    name: "Krishna Reddy",
    location: "Hyderabad",
    text: "Full support: loan, registration, interiors!",
    avatar: test3,
  },
  {
    name: "Lakshmi Devi",
    location: "Hyderabad",
    text: "Plot value doubled in 2 years! amazing",
    avatar: test4,
  },
  {
    name: "Venkat Rao",
    location: "Hyderabad",
    text: "As builder, my project sold 80% in 3 months! ",
    avatar: test1,
  },
  {
    name: "Priyanka Sharma",
    location: "Hyderabad",
    text: " 24/7 helpline & full guidance!",
    avatar: test5,   
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-[#11689B] mb-2">
          Testimonials
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          500+ Hyderabad families trusted MyBhumi
        </p>

        {/* Row 1 - Left to Right */}
        <div className="overflow-hidden mb-8">
          <div className="flex gap-6 whitespace-nowrap animate-scroll-left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`row1-${i}`}
                className="bg-white border-2 border-[#11689B]/20 shadow-md rounded-2xl px-6 py-5 min-w-[330px] inline-block align-top"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-[#11689B] flex-shrink-0"
                  />
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-[#11689B] leading-tight">{t.name}</h4>
                    <span className="text-sm text-gray-600 leading-tight">{t.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 italic text-sm leading-snug break-words">
                  “{t.text}”
                </p>

                <div className="text-yellow-500 mt-2 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden">
          <div className="flex gap-6 whitespace-nowrap animate-scroll-right">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`row2-${i}`}
                className="bg-white border-2 border-[#11689B]/20 shadow-md rounded-2xl px-6 py-5 min-w-[330px] inline-block align-top"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-[#11689B] flex-shrink-0"
                  />
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-[#11689B] leading-tight">{t.name}</h4>
                    <span className="text-sm text-gray-600 leading-tight">{t.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 italic text-sm leading-snug break-words">
                  “{t.text}”
                </p>

                <div className="text-yellow-500 mt-2 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        /* Default (Desktop & Large Screens) */
        .animate-scroll-left {
          animation: scroll-left 22s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 22s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Tablets: Faster */
        @media (max-width: 1024px) {
          .animate-scroll-left, .animate-scroll-right {
            animation-duration: 15s !important;
          }
        }

        /* Mobiles: Much faster */
        @media (max-width: 640px) {
          .animate-scroll-left, .animate-scroll-right {
            animation-duration: 10s !important;
          }
        }
      `}
      </style>
    </section>
  );
}
