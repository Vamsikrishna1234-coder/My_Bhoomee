
import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  Building2,
  ShieldCheck,
  Leaf
} from "lucide-react";

const AboutPreview = () => {

  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning designs and quality construction.",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with our clients.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering sustainable development solutions.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Consistent delivery and expanding horizons.",
    },
  ];

  return (
    <section className="relative bg-[#EDF1F7] py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* BACKGROUND DECORATION */}
      <div className="
        absolute -top-32 -right-32
        w-96 h-96 rounded-full
        bg-[#053279]/5 blur-3xl
      " />

      <div className="
        absolute -bottom-32 -left-32
        w-96 h-96 rounded-full
        bg-[#FBBD23]/10 blur-3xl
      " />

      <div className="
        relative z-10
        max-w-[1450px] mx-auto
        px-5 sm:px-8 lg:px-12
      ">

        {/* MAIN ABOUT CONTENT */}
        <div className="
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-14
          items-center
        ">

          {/* LEFT CONTENT */}
          <div>

            <span className="
              block text-[#B68A17]
              text-sm sm:text-base
              italic font-semibold
              mb-3
            ">
              About Bhoomatha Group
            </span>

            <h2 className="
              text-[#101010]
              text-3xl sm:text-4xl
              lg:text-[46px]
              font-bold leading-[1.2]
              tracking-tight
            ">
              Trusted Expertise,
              <span className="
                block text-[#053279] mt-1
              ">
                Sustainable Growth
              </span>
            </h2>

            <div className="
              w-16 h-1
              bg-[#FBBD23]
              rounded-full mt-5 mb-6
            " />

            <div className="
              text-gray-700
              text-sm sm:text-[15px]
              leading-[1.7]
              space-y-4
            ">

              <p>
                Bhoomatha Real Estates was established in 1999
                and incorporated as a Private Limited company
                in 2010 with ₹6 Crores authorized capital.
                Bhoomatha is a leading real estate developer
                in Andhra Pradesh and Telangana.
              </p>

              <p>
                Leveraging over 25 years of expertise, we
                specialize in premium apartments, independent
                homes, and villas across Visakhapatnam,
                Vizianagaram, Srikakulam, Vijayawada, and Khammam.
                Our projects combine modern design, timely
                delivery, and sustainability, featuring
                eco-friendly Sandalwood and Teakwood plantations.
                Renowned for reliability, innovation, and
                creating green communities, Bhoomatha delivers
                enduring value for generations.
              </p>

            </div>

            {/* LEARN MORE BUTTON */}
            <Link
              to="/aboutus"
              className="
                group inline-flex
                items-center gap-3
                mt-7 px-7 py-3.5
                rounded-full
                bg-[#053279]
                text-white
                font-semibold text-sm
                shadow-[0_5px_15px_rgba(5,50,121,0.2)]
                !no-underline
                transition-all duration-300
                hover:bg-[#FBBD23]
                hover:text-[#053279]
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Learn More About Us

              <ArrowRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

          {/* RIGHT FEATURE CARDS */}
          <div className="
            grid grid-cols-1
            sm:grid-cols-2
            gap-5
          ">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative
                    min-h-[185px]
                    bg-white
                    p-6 sm:p-7
                    flex flex-col
                    items-center justify-center
                    text-center
                    rounded-xl
                    border border-gray-100
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    overflow-hidden
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_18px_40px_rgba(5,50,121,0.13)]
                  "
                >

                  {/* TOP ACCENT */}
                  <div className="
                    absolute top-0 left-0
                    w-0 h-[4px]
                    bg-[#FBBD23]
                    transition-all duration-500
                    group-hover:w-full
                  " />

                  {/* ICON */}
                  <div className="
                    w-14 h-14
                    flex items-center justify-center
                    rounded-full
                    bg-[#053279]/[0.07]
                    mb-4
                    transition-all duration-500
                    group-hover:bg-[#053279]
                    group-hover:scale-110
                  ">
                    <Icon
                      size={29}
                      strokeWidth={2}
                      className="
                        text-[#053279]
                        transition-colors duration-300
                        group-hover:text-[#FBBD23]
                      "
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-[#101010]
                    font-bold text-base sm:text-lg
                    mb-2
                    transition-colors duration-300
                    group-hover:text-[#053279]
                  ">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="
                    text-gray-600
                    text-sm leading-relaxed
                    max-w-[230px]
                  ">
                    {feature.description}
                  </p>

                  {/* BOTTOM DECORATION */}
                  <div className="
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    w-0 h-[3px]
                    bg-[#053279]
                    transition-all duration-500
                    group-hover:w-1/3
                  " />

                </div>
              );
            })}

          </div>

        </div>

        {/* BOTTOM ABOUT DESCRIPTION CARD */}
        <div className="
          mt-20 sm:mt-24
          bg-white
          rounded-xl
          border border-gray-200
          shadow-[0_10px_35px_rgba(0,0,0,0.06)]
          px-5 py-9
          sm:px-10 sm:py-10
          lg:px-16
          text-center
          relative overflow-hidden
        ">

          {/* DECORATIVE TOP LINE */}
          <div className="
            absolute top-0 left-0
            w-full h-[4px]
            bg-gradient-to-r
            from-[#053279]
            via-[#FBBD23]
            to-[#053279]
          " />

          <div className="
            flex justify-center mb-4
          ">
            <div className="
              w-12 h-12
              bg-[#053279]/[0.07]
              rounded-full
              flex items-center justify-center
            ">
              <Building2
                size={25}
                className="text-[#053279]"
              />
            </div>
          </div>

          <h3 className="
            text-[#053279]
            text-2xl sm:text-3xl
            font-bold mb-5
          ">
            Explore More About Bhoomatha Group
          </h3>

          <p className="
            max-w-[1000px]
            mx-auto
            text-gray-700
            text-sm sm:text-base
            leading-[1.8]
          ">
            Bhoomatha Group is one of the trusted names in
            real estate, known for its commitment to quality,
            transparency, and customer satisfaction. With
            a proven track record of delivering successful
            projects, Bhoomatha continues to focus on plot
            development, integrated townships, and
            value-driven real estate solutions. Our focus
            on trust, innovation, and long-term value
            guides our commitment to customers and communities.
          </p>

          {/* BRAND VALUES */}
          <div className="
            flex flex-wrap
            justify-center
            items-center gap-5 sm:gap-8
            mt-6 mb-7
          ">

            <div className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#053279]" />
              <span className="text-gray-600 text-xs font-semibold">
                Trust & Transparency
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Leaf size={17} className="text-[#053279]" />
              <span className="text-gray-600 text-xs font-semibold">
                Sustainable Development
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Award size={17} className="text-[#053279]" />
              <span className="text-gray-600 text-xs font-semibold">
                Quality & Excellence
              </span>
            </div>

          </div>

          {/* EXPLORE MORE BUTTON */}
          <Link
            to="/aboutus"
            className="
              group inline-flex
              items-center justify-center
              gap-3
              px-8 py-3
              rounded-full
              bg-[#053279]
              border border-[#053279]
              text-white
              font-bold text-sm
              !no-underline
              shadow-sm
              transition-all duration-300
              hover:bg-[#FBBD23] 
              hover:text-white
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Explore More

            <ArrowRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;
