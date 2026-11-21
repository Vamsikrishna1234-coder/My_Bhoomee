
import React from "react";
import {
  MapPin,
  ShieldCheck,
  Gem,
  Users,
  TrendingUp,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Strategic Locations",
    description:
      "Every development is thoughtfully positioned with convenient connectivity and access to essential destinations.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Quality Development",
    description:
      "We focus on quality planning, reliable infrastructure, and attention to detail in every project.",
    icon: Gem,
  },
  {
    number: "03",
    title: "Trust & Transparency",
    description:
      "We believe in honest communication, transparent processes, and building relationships based on trust.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Customer First",
    description:
      "Understanding customer needs and delivering meaningful property solutions remains our priority.",
    icon: Users,
  },
  {
    number: "05",
    title: "Future-Ready Investments",
    description:
      "Our developments are planned with long-term usability, growth potential, and evolving lifestyle needs in mind.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Lasting Relationships",
    description:
      "We value every customer relationship and strive to create experiences that go beyond property transactions.",
    icon: Handshake,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-[1375px]">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FBBD23] px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#053279]">
            <span className="h-2 w-2 rounded-full bg-[#FBBD23]" />
            The Bhoomatha Advantage
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-[#053279] sm:text-4xl lg:text-5xl">
            Why Choose
            <span className="text-[#FBBD23]"> Bhoomatha?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#053279] sm:text-base">
            More than real estate, we deliver trust, thoughtful development,
            and opportunities designed around your future.
          </p>

        </div>

        {/* Six Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-[#053279]/15 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#FBBD23] hover:shadow-[0_15px_40px_rgba(5,50,121,0.12)] sm:p-8"
              >

                {/* Background Number */}
                <span className="pointer-events-none absolute -right-2 -top-7 text-[115px] font-black leading-none text-[#053279]/[0.045] transition-colors duration-500 group-hover:text-[#FBBD23]/20">
                  {item.number}
                </span>

                {/* Top Row */}
                <div className="relative z-10 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#053279] text-[#FBBD23] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#FBBD23] group-hover:text-[#053279]">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-2xl font-extrabold text-[#FBBD23]">
                    {item.number}
                  </span>

                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-8">

                  <h3 className="text-xl font-bold text-[#053279] transition-colors duration-300 group-hover:text-[#FBBD23]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#053279]">
                    {item.description}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div className="relative z-10 mt-7 flex items-center justify-between">

                  <div className="h-1 w-12 rounded-full bg-[#FBBD23] transition-all duration-500 group-hover:w-24" />

                  <ArrowUpRight
                    size={21}
                    className="text-[#053279] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FBBD23]"
                  />

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Brand Statement */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-[#053279] px-6 py-9 text-center sm:px-10 sm:py-12">

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Your Trust. Our Commitment.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            At Bhoomatha Group, every project begins with a commitment to
            quality and ends with a relationship built on trust.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#FBBD23]" />

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
