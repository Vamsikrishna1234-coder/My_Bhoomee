
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

      <div className="mx-auto grid max-w-[1375px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left - Founder Image */}
        <div className="relative mx-auto w-full max-w-[520px]">

          {/* Decorative Border */}
          <div className="absolute -left-4 -top-4 h-full w-full rounded-tl-[100px] border-l-[6px] border-t-[6px] border-[#FBBD23] sm:-left-6 sm:-top-6" />

          {/* Founder Image */}
          <div className="relative z-10 h-[430px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] bg-gray-100 sm:h-[550px] lg:h-[600px]">
            <img
              src="src/assets/images/founder bh.jpg"
              alt="Founder of Bhoomatha Group"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Founder Details */}
          <div className="absolute -bottom-5 right-0 z-20 max-w-[280px] rounded-tl-2xl bg-[#053279] px-6 py-5 text-white shadow-xl sm:-right-5 sm:px-8">
            <h3 className="text-xl font-bold">
              T. Purnachandra Rao
            </h3>

            <p className="mt-1 text-sm text-[#FBBD23]">
              Founder & Chairman
            </p>
          </div>

        </div>

        {/* Right - Content */}
        <div className="pt-5 lg:pt-0">

          {/* Section Label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#FBBD23]" />

            <span className="text-sm font-bold uppercase tracking-[3px] text-[#053279]">
              About Bhoomatha
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#053279] sm:text-4xl lg:text-[46px]">
            Who We Are
            <span className="mt-2 block text-[#FBBD23]">
              Building Trust, Creating Landmarks
            </span>
          </h2>

          {/* Company Description */}
          <div className="space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base">

            <p>
              Bhoomatha Group is a trusted name in the real estate industry,
              committed to transforming the way people live, invest, and
              experience modern infrastructure. With a strong presence across
              North Coastal Andhra and Central Andhra, we specialize in
              residential townships, gated communities, and commercial
              developments.
            </p>

            <p>
              Our journey is driven by a vision to create thoughtfully
              planned spaces that combine modern infrastructure, strategic
              locations, and sustainable development. Every project reflects
              our commitment to quality, transparency, and customer
              satisfaction.
            </p>

            <p>
              Under the leadership of our founder, Bhoomatha Group continues
              to focus on building lasting relationships, delivering
              value-driven developments, and creating opportunities for
              individuals, families, and businesses.
            </p>

          </div>

          {/* Founder's Message */}
          <div className="mt-2 border-l-4 border-[#FBBD23] bg-[#053279]/5 p-2 sm:p-6">

            <p className="text-[15px] italic leading-7 text-[#053279]">
              "Our commitment is not just to develop properties, but to build
              trust, create opportunities, and shape a better future for
              generations to come."
            </p>

            <p className="mt-4 font-bold text-[#053279]">
              — Founder, Bhoomatha Group
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;
