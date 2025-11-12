import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Team1 from "../assets/images/person pic.jpg";

const teamMembers = [
  {
    name: "Vijay Bhaskar",
    role: "Founder & Managing Director",
    img: Team1,
  },
  {
    name: "Shyam Varma",
    role: "Head of Sales & Marketing",
    img: Team1,
  },
  {
    name: "Ravi Kumar",
    role: "Chief Architect",
    img: Team1,
  },
  {
    name: "Rahul Kumar",
    role: "Project Development Manager",
    img: Team1,
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-[#f5f7fa]" id="team">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-4"
          style={{
            background: "linear-gradient(to right, #11689B, #0e5a87)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Meet Our Team
        </h2>
        <p className="text-gray-600 mb-12">
          The passionate people behind Bhumi Real Estate.
        </p>

        {/* ✅ Perfectly Responsive Grid with Centering Fix */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-y-4 sm:gap-y-6 md:gap-y-8 
            gap-x-4 sm:gap-x-6 md:gap-x-8 
            justify-items-center
            mx-auto
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[90%] sm:w-[85%] md:w-[260px] lg:w-[240px] xl:w-[260px] h-[380px] group perspective cursor-pointer"
            >
              {/* ---------- DESKTOP VERSION (Hover Animation) ---------- */}
              <div className="hidden lg:block relative w-full h-[380px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-[900ms] group-hover:bg-[150px_0]"
                  style={{ backgroundImage: `url(${member.img})` }}
                ></div>

                {/* Flip Box */}
                <div
                  className="absolute left-0 top-0 w-[230px] h-full bg-[#11689B] text-white text-center box-border px-3 py-24 transform origin-left rotate-y-[-90deg] transition-all duration-[900ms] group-hover:rotate-y-0"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <h1 className="text-xl font-bold leading-tight">
                    {member.name}
                    <br />
                    <span className="text-sm text-gray-200">{member.role}</span>
                  </h1>
                  <p className="mt-4 text-sm px-2">
                    Dedicated to creating premium, nature-connected living spaces.
                  </p>
                  <ul className="flex justify-center gap-2 mt-6">
                    <li>
                      <a
                        href="#"
                        className="bg-white text-[#11689B] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0d4e72] hover:text-white transition"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white text-[#11689B] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0d4e72] hover:text-white transition"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white text-[#11689B] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0d4e72] hover:text-white transition"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white text-[#11689B] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0d4e72] hover:text-white transition"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- MOBILE & TABLET VERSION ---------- */}
              <div className="block lg:hidden text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <h3 className="text-xl font-semibold text-[#11689B] mt-3">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
