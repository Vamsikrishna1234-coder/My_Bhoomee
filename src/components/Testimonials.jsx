
import React from "react";

import test1 from "../assets/images/testimonials/test-1.jpg";
import test2 from "../assets/images/testimonials/test-2.jpeg";
import test3 from "../assets/images/testimonials/test-4.jpg";
import test4 from "../assets/images/testimonials/test-5.jpg";
import test5 from "../assets/images/testimonials/test-6.jpg";

const testimonials = [
  {
    name: "Ram Kumar",
    location: "Visakhapatnam",
    text: "Bought our dream home in 30 days!",
    avatar: test1,
  },
  {
    name: "Sita Murthy",
    location: "Visakhapatnam",
    text: "Sold flat in 12 days! 500+ buyers via app!",
    avatar: test2,
  },
  {
    name: "Krishna Reddy",
    location: "Rajahmundry",
    text: "Full support: loan, registration, interiors!",
    avatar: test3,
  },
  {
    name: "Lakshmi Devi",
    location: "Hyderabad",
    text: "Plot value doubled in 2 years! Amazing experience.",
    avatar: test4,
  },
  {
    name: "Venkat Rao",
    location: "Vizianagaram",
    text: "As a builder, my project sold 80% in 3 months!",
    avatar: test1,
  },
  {
    name: "Priyanka Sharma",
    location: "Visakhapatnam",
    text: "24/7 helpline and complete guidance throughout!",
    avatar: test5,
  },
];

const StarRating = () => (
  <div className="flex gap-1 text-[#FBBD23] text-lg">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star}>★</span>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    className="w-10 h-10 text-[#FBBD23]"
  >
    <path d="M8 9h10v12H8v4c0 2 2 3 4 3v4C5 32 3 28 3 23V14c0-3 2-5 5-5Zm17 0h10v12H25v4c0 2 2 3 4 3v4c-7 0-9-4-9-9v-9c0-3 2-5 5-5Z" />
  </svg>
);

const TestimonialCard = ({ item }) => (
  <div className="testimonial-card group relative flex flex-col justify-between min-w-[290px] sm:min-w-[340px] w-[290px] sm:w-[340px] min-h-[230px] bg-white border border-[#053279]/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(5,50,121,0.07)] hover:shadow-[0_15px_40px_rgba(5,50,121,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">

    {/* Golden Top Accent */}
    <div className="absolute top-0 left-0 w-0 h-1 bg-[#FBBD23] group-hover:w-full transition-all duration-500" />

    {/* Quote Icon */}
    <div className="flex items-start justify-between">
      <QuoteIcon />

      <span className="text-xs font-semibold text-[#053279]/50 bg-[#053279]/5 px-3 py-1 rounded-full">
        Verified Client
      </span>
    </div>

    {/* Testimonial Text */}
    <p className="text-[#053279]/80 text-sm sm:text-base leading-7 mt-5 whitespace-normal">
      "{item.text}"
    </p>

    {/* Rating */}
    <div className="mt-4">
      <StarRating />
    </div>

    {/* Client Details */}
    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#053279]/10">

      <div className="w-12 h-12 rounded-full p-[2px] bg-[#FBBD23] shrink-0">
        <img
          src={item.avatar}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-full border-2 border-white"
        />
      </div>

      <div className="min-w-0">
        <h4 className="font-bold text-[#053279] text-sm sm:text-base truncate">
          {item.name}
        </h4>

        <p className="text-xs text-[#053279]/60 mt-1">
          {item.location}
        </p>
      </div>

      <div className="ml-auto w-8 h-8 rounded-full bg-[#FBBD23]/20 flex items-center justify-center text-[#053279] shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left" }) => (
  <div className="testimonial-marquee overflow-hidden relative py-5">

    <div
      className={`testimonial-track flex w-max gap-5 sm:gap-6 ${
        direction === "right"
          ? "testimonial-right"
          : "testimonial-left"
      }`}
    >

      {[...items, ...items].map((item, index) => (
        <TestimonialCard
          key={`${direction}-${index}`}
          item={item}
        />
      ))}

    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="relative bg-[#F5F7FB] py-10 md:py-24 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#FBBD23]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#053279]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10">

        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-10 md:mb-14">

          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-[#FBBD23]" />

            <span className="text-[#053279] uppercase text-xs sm:text-sm font-bold tracking-[3px]">
              Client Experiences
            </span>

            <span className="w-9 h-[2px] bg-[#FBBD23]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053279] leading-tight">
            What Our Clients
            
              Say About Us<span className="text-[#FBBD23]">.</span>
            
          </h2>

          <p className="text-[#053279]/65 text-sm sm:text-base md:text-lg mt-5 max-w-2xl mx-auto leading-7">
            Every successful property journey begins with trust.
            Discover the experiences of families and investors
            who chose Bhoomatha Group.
          </p>

          {/* Trust Indicator */}
          <div className="inline-flex items-center gap-3 mt-7 px-5 py-3 rounded-full bg-white shadow-sm border border-[#053279]/10">

            <StarRating />

            <span className="w-px h-5 bg-[#053279]/20" />

            <span className="text-[#053279] text-xs sm:text-sm font-semibold">
              500+ Families Trusted Us
            </span>

          </div>

        </div>

        {/* First Row - Left to Right */}
        {/* <MarqueeRow
          items={testimonials}
          direction="left"
        /> */}

        {/* Second Row - Right to Left */}
        <MarqueeRow
          items={[...testimonials].reverse()}
          direction="right"
        />

      </div>

      {/* Animations */}
      <style>{`

        .testimonial-left {
          animation: testimonialLeft 38s linear infinite;
        }

        .testimonial-right {
          animation: testimonialRight 42s linear infinite;
        }

        @keyframes testimonialLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes testimonialRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        

        /* Smooth card movement */
        .testimonial-card {
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .testimonial-left {
            animation-duration: 32s;
          }

          .testimonial-right {
            animation-duration: 36s;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .testimonial-left {
            animation-duration: 28s;
          }

          .testimonial-right {
            animation-duration: 32s;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
          }

          .testimonial-marquee {
            overflow-x: auto;
          }
        }

      `}</style>

    </section>
  );
}
