import React, { useState } from "react";
import { Shield, Search, Phone, TrendingUp, Users } from "lucide-react";

const Milestones = () => {
  const [activeCard, setActiveCard] = useState(null);

  const guarantees = [
    {
      icon: Search,
      title: "Verified Properties",
      desc: "Every listing is hand-verified on-site by our local experts in Nandurbar, ensuring accuracy and credibility.",
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-500/20",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      desc: "Bank-grade encryption and legal support for seamless, risk-free deals—your peace of mind guaranteed.",
      gradient: "from-blue-500 to-indigo-600",
      bgGlow: "bg-blue-500/20",
    },
    {
      icon: Phone,
      title: "Expert Legal Assistance",
      desc: "Professional legal guidance and documentation support to ensure compliant, hassle-free property transactions.",
      gradient: "from-purple-500 to-pink-600",
      bgGlow: "bg-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "Market Price Analysis",
      desc: "Comprehensive property valuation reports with comparative market analysis to help you make informed decisions.",
      gradient: "from-orange-500 to-red-600",
      bgGlow: "bg-orange-500/20",
    },
    {
      icon: Users,
      title: "Personalized Consultation",
      desc: "One-on-one sessions with experienced real estate advisors tailored to your specific property goals and budget.",
      gradient: "from-green-500 to-emerald-600",
      bgGlow: "bg-green-500/20",
    },
  ];

  const stats = [
    { value: "500+", label: "Verified Properties" },
    { value: "1000+", label: "Happy Customers" },
    { value: "24/7", label: "Support Available" },
    { value: "100%", label: "Secure Transactions" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#11689B]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Our Assurances to You
          </h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Building trust through verified services and unwavering support —
            your real estate journey is secure with us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`}
                ></div>

                {/* Card */}
                <div
                  className={`relative h-full p-8 rounded-2xl bg-white backdrop-blur-xl border border-gray-200 transition-all duration-500 ${
                    isActive
                      ? "shadow-2xl scale-105"
                      : "shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 ${item.bgGlow} rounded-xl blur-xl transition-all duration-500 ${
                        isActive ? "scale-125 opacity-100" : "scale-100 opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-500 ${
                        isActive ? "rotate-12 scale-110" : "rotate-0"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Badge number */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-br ${item.gradient} text-white shadow-lg`
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`
                        : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {item.desc}
                  </p>

                  {/* Animated line */}
                  <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-700 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className={`mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent translate-x-2 opacity-100`
                        : "text-gray-400 opacity-0"
                    }`}
                  >
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="relative bg-[#11689B] border border-[#0f5c89] rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="relative inline-block">
                    <div className="relative text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-gray-200 text-sm md:text-base font-medium mt-3 group-hover:text-white transition-colors duration-300">
                    {stat.label}
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

export default Milestones;
