
import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  ArrowUpRight,
  Building2,
  Award
} from "lucide-react";

import khadarImage from "../assets/images/testimonials/test-2.jpeg";

const About = () => {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-16">

      <div className="max-w-[1250px] mx-auto px-5 sm:px-8">

        {/* SECTION HEADING */}
        <div className="text-center mb-9">

          <span className="
            text-[#B68A17] uppercase
            tracking-[3px] text-xs font-bold
          ">
            Our Leadership
          </span>

          <h2 className="
            text-[#053279] font-bold
            text-3xl sm:text-4xl
            mt-3
          ">
            Meet Our Visionary Leader
          </h2>

          <div className="w-16 h-[3px] bg-[#FBBD23] mx-auto mt-4" />

        </div>

        {/* PROFILE CARD */}
        <div className="
          grid grid-cols-1 md:grid-cols-2
          items-stretch
          bg-white
          rounded-2xl
          overflow-hidden
          border border-gray-200
          shadow-[0_12px_40px_rgba(5,50,121,0.08)]
        ">

          {/* LEFT IMAGE */}
          <div className="
            relative
            h-[350px]
            sm:h-[400px]
            md:h-[460px]
            lg:h-[780px]
            overflow-hidden
            bg-[#053279]
          ">

            <img
              src={khadarImage}
              alt="Shaik Abdul Khadar - Bhoomatha Group"
              className="
                absolute inset-0
                block w-full h-full
                object-cover object-center
              "
            />

            {/* IMAGE OVERLAY */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-[#031D49]/95
              via-[#031D49]/10
              to-transparent
            " />

            {/* TOP LABEL */}
            <div className="
              absolute top-5 left-5
              bg-white/95
              rounded-full
              px-4 py-2
              flex items-center gap-2
            ">
              <Award size={15} className="text-[#053279]" />

              <span className="
                text-[#053279]
                text-[10px] font-bold
                tracking-wider
              ">
                LEADERSHIP PROFILE
              </span>
            </div>

            {/* IMAGE TEXT */}
            <div className="
              absolute bottom-0 left-0
              w-full p-6 sm:p-8
            ">

              <span className="
                text-[#FBBD23]
                text-[11px]
                font-bold uppercase
                tracking-[3px]
              ">
                Bhoomatha Group
              </span>

              <h3 className="
                text-white
                text-2xl sm:text-3xl
                font-bold mt-2
              ">
                Shaik Abdul Khadar
              </h3>

              <p className="
                text-white/90
                text-sm mt-2
              ">
                Senior Vice President
              </p>

            </div>

            {/* GOLD CORNER */}
            <div className="
              absolute top-0 left-0
              w-16 h-16
              border-t-4 border-l-4
              border-[#FBBD23]
            " />

          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="
            h-full
            min-h-[460px]
            lg:min-h-[480px]
            p-6 sm:p-8 lg:p-9
            flex flex-col
            justify-between
          ">

            <div>

              {/* DESIGNATION */}
              <div className="mb-5">

                <span className="
                  text-[#B68A17]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[2px]
                ">
                  Leadership & Management
                </span>

                <h3 className="
                  text-[#053279]
                  text-2xl sm:text-3xl
                  font-bold mt-2
                ">
                  Shaik Abdul Khadar
                </h3>

                <p className="
                  text-gray-500
                  text-sm mt-2
                ">
                  Senior Vice President | Team Lead
                </p>

              </div>

              {/* GOLD DIVIDER */}
              <div className="
                w-14 h-[3px]
                bg-[#FBBD23] mb-5
              " />

              {/* DESCRIPTION - PARAGRAPH FORMAT */}
              <div className="
                text-gray-600
                text-[13px] sm:text-[13.5px]
                leading-[1.85]
                space-y-4
                text-justify
              ">

                <p>
                  Shaik Abdul Khadar serves as the Senior Vice
                  President and Team Lead at Bhoomatha Group,
                  contributing to the organisation's leadership
                  and real estate business activities. His
                  professional association reflects a commitment
                  to the company's vision of creating meaningful
                  property opportunities and building lasting
                  customer relationships.
                </p>

                <p>
                  Through his association with Bhoomatha Group,
                  he is involved in communicating real estate
                  developments and investment opportunities
                  across Andhra Pradesh. His professional
                  activities are connected with project promotion,
                  customer engagement and coordination with
                  team members to support the organisation's
                  business objectives.
                </p>

                <p>
                  As part of the leadership team, he represents
                  the values of trust, transparency and
                  professional commitment that Bhoomatha Group
                  aims to establish in the real estate sector.
                  His role contributes to strengthening customer
                  relationships and supporting the group's
                  continued business growth.
                </p>

              </div>

            </div>

            {/* BOTTOM COMPANY DETAILS */}
            <div className="
              border-t border-gray-100
              mt-6 pt-5
              flex flex-wrap
              items-center
              justify-between
              gap-4
            ">

              <div className="flex items-center gap-3">

                <div className="
                  w-10 h-10
                  rounded-full
                  bg-[#053279]/10
                  flex items-center justify-center
                ">
                  <Building2
                    size={19}
                    className="text-[#053279]"
                  />
                </div>

                <div>
                  <h4 className="
                    text-[#053279]
                    font-bold text-sm
                  ">
                    Bhoomatha Group
                  </h4>

                  <p className="
                    text-gray-400
                    text-xs mt-1
                  ">
                    Leadership Team
                  </p>
                </div>

              </div>

              <a
                href="https://in.linkedin.com/in/khadar-bhoomatha-78203135a"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  bg-[#053279]
                  text-white
                  px-5 py-3
                  rounded-full
                  text-xs font-semibold
                  !no-underline
                  transition-all duration-300
                  hover:bg-[#FBBD23]
                  hover:text-[#053279]
                "
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM TAGLINE */}
        <div className="text-center mt-7">

          <p className="
            text-[#053279]
            text-sm sm:text-base
            font-semibold italic
          ">
            Building Trust. Creating Opportunities. Shaping Tomorrow.
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;
