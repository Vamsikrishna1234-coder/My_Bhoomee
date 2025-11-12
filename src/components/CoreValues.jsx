import React from "react";
import { ShieldCheck, HeartHandshake, Leaf, Target } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Integrity & Transparency",
      description:
        "We believe in honesty, trust, and transparency in every transaction — ensuring our clients feel confident and secure when investing with MyBhumi.",
      stat: "100%",
      statLabel: "Verified Projects"
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Customer Commitment",
      description:
        "Our clients are at the heart of everything we do. We go the extra mile to deliver exceptional experiences and help them find their dream properties.",
      stat: "500+",
      statLabel: "Happy Families"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustainability",
      description:
        "We are dedicated to building eco-friendly communities that promote green living and harmony with nature — a foundation for a sustainable future.",
      stat: "50%",
      statLabel: "Green Spaces"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Excellence in Execution",
      description:
        "Precision, planning, and perfection — our projects stand as a testament to our commitment to quality and timely delivery.",
      stat: "98%",
      statLabel: "On-Time Delivery"
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#11689B 1px, transparent 1px), linear-gradient(90deg, #11689B 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#11689B] mb-6 tracking-tight">
            Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The foundation of everything we build, every promise we make
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative h-full">
                <div className="bg-white rounded-3xl p-8 border-2 border-[#11689B]/10 shadow-xl hover:shadow-2xl hover:border-[#11689B]/30 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#11689B] to-[#0e547f] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <div className="text-white">
                        {val.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#11689B] text-center mb-4">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed mb-6 flex-grow text-base">
                    {val.description}
                  </p>

                  {/* Stat */}
                  <div className="text-center pt-6 border-t-2 border-[#11689B]/10 mt-auto">
                    <div className="text-5xl font-black text-[#11689B] mb-1">
                      {val.stat}
                    </div>
                    <div className="text-sm font-semibold text-[#11689B] uppercase tracking-wider">
                      {val.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16">
          <p className="text-2xl text-[#11689B] font-medium italic">
            "Values that build trust, trust that builds homes"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;