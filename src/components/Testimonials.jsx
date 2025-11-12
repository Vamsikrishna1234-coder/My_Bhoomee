import React, { useState, useEffect } from "react";
import test1 from "../assets/images/testimonials/test-1.jpg";
import test2 from "../assets/images/testimonials/test-2.jpeg";
import test3 from "../assets/images/testimonials/test-4.jpg";
import test4 from "../assets/images/testimonials/test-5.jpg";
import test5 from "../assets/images/testimonials/test-6.jpg";

const testimonials = [
  {
    name: "Ram Kumar",
    location: "Hyderabad",
    text: "Bought our dream home in 30 days! Fully transparent process!",
    avatar: test1,
  },
  {
    name: "Sita Murthy",
    location: "Hyderabad",
    text: "Sold flat in 12 days! Reached 500+ buyers via app!",
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
    text: "Plot value doubled in 2 years! ROI tools are amazing!",
    avatar: test4,
  },
  {
    name: "Venkat Rao",
    location: "Hyderabad",
    text: "As builder, project sold 80% in 3 months!",
    avatar: test1,
  },
  {
    name: "Priyanka Sharma",
    location: "Hyderabad",
    text: "First-time buyer? Zero stress! 24/7 helpline!",
    avatar: test5,   
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-[#e8f4fb] to-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-[#11689B] mb-2">
          Testimonials
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          500+ Hyderabad families trusted MyBhumi
        </p>

        {/* Slide-Up Card */}
        <div className="relative h-[300px] overflow-hidden max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#11689B]/30">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-[#11689B] shadow-lg"
                />
                <span className="text-sm font-bold text-[#11689B] bg-[#11689B]/10 px-4 py-1 rounded-full">
                  {t.location}
                </span>
                <p className="mt-4 text-gray-800 italic text-base leading-tight">
                  “{t.text}”
                </p>
                <h4 className="mt-3 text-[#11689B] font-bold text-xl">{t.name}</h4>
                <div className="flex justify-center mt-2 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#11689B] w-10" : "bg-[#11689B]/30 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}