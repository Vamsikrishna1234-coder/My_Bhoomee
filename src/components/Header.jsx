

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Home,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import logo from "../assets/images/bhoomatha logoH.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const navItems = [
    { label: "About Us", to: "/aboutus" },
    {
      label: "Projects",
      to: "/projects",
      dropdown: [
        { label: "SVN", to: "/projects/SVN-SwapnlokPage" },
        { label: "CMR Gold Fields", to: "/projects/CMR-GoldfieldsPage" },
        { label: "Nature Valley", to: "/projects/Nature-ValleyPage" },
        { label: "Purnasai", to: "/projects/Purna-SaiPage" },
        { label: "Sugandha Meadows", to: "/projects/Sugundha-MeadowsPage" },
      ],
    },
    { label: "Gallery", to: "/Gallery" },
    
    { label: "Contact Us", to: "/contact" },
  ];

  const socialLinks = [
    { Icon: Facebook, link: "#" },
    { Icon: Twitter, link: "#" },
    { Icon: Instagram, link: "#" },
    { Icon: Youtube, link: "#" },
    { Icon: Linkedin, link: "#" },
    { Icon: Sparkles, link: "#" },
  ];

  return (
    <>
      <header className="w-full relative z-50">

        {/* TOP BLUE BAR */}
        <div className="bg-[#053279] text-white h-[45px]">
          <div className="max-w-[1500px] mx-auto px-5 lg:px-2 h-full flex items-center justify-between">

            {/* EMAIL */}
            <a
              href="mailto:khadarbhoomatha@
              gmail.com"
              className="flex items-center gap-4 text-white !no-underline text-[16px] md:text-[18px]"
            >
              <Mail size={15} fill="white" strokeWidth={1.5} />
              <span>khadarbhoomatha@gmail.com</span>
            </a>

            {/* SOCIAL ICONS */}
            <div className="hidden sm:flex items-center gap-[19px]">
              {socialLinks.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 transition"
                >
                  <Icon size={17} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="bg-white shadow-sm">
          <div className="max-w-[1500px] mx-auto px-5 lg:px-2">

            <div className="h-[110px] flex items-center justify-between">

              {/* LOGO */}
              <Link
                to="/"
                className="flex-shrink-0 no-underline"
              >
                <img
                  src={logo}
                  alt="Bhoomatha Group"
                  className="w-[185px] h-auto object-contain"
                />
              </Link>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center gap-[48px] ml-auto mr-auto">

                {/* HOME ICON */}
                <Link
                  to="/"
                  className="text-black hover:text-[#0B3479] transition"
                  aria-label="Home"
                >
                  <Home size={18} fill="black" strokeWidth={2.5} />
                </Link>

                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() =>
                      item.dropdown && setProjectOpen(true)
                    }
                    onMouseLeave={() =>
                      item.dropdown && setProjectOpen(false)
                    }
                  >
                    <Link
                      to={item.to}
                      className="flex items-center gap-1 text-[18px] font-semibold text-black hover:text-[#0B3479] !no-underline whitespace-nowrap transition"
                    >
                      {item.label}

                      {item.dropdown && (
                        <ChevronDown
                          size={15}
                          className={`transition-transform ${
                            projectOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* PROJECT DROPDOWN */}
                    {item.dropdown && projectOpen && (
                      <div className="absolute left-0 top-full pt-5 w-[220px] z-50">
                        <div className="bg-white shadow-xl border border-gray-100 rounded-md py-2">
                          {item.dropdown.map((sub, i) => (
                            <Link
                              key={i}
                              to={sub.to}
                              onClick={() => setProjectOpen(false)}
                              className="block px-5 py-3 text-[14px] font-medium text-black hover:bg-[#FBBD23] hover:text-white !no-underline transition"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* RIGHT SIDE CONTENT */}
              
              <div className="hidden lg:flex flex-col items-center justify-center min-w-[360px]">

                {/* PHONE NUMBER */}
                <a
                  href="tel:+919441930929"
                  className="flex items-center gap-3 text-black !no-underline font-semibold text-[18px] mb-4"
                >
                  <Phone size={15} fill="black" />
                  <span>+91 94419 30929</span>
                </a>

                {/* MATCHING ANIMATED BUTTONS */}
                <div className="flex items-center gap-4 w-full">

                  <Link
                    to="/contact"
                    className="premium-cta"
                  >
                    <span>Book Now</span>
                    <span className="cta-arrow">↗</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="premium-cta"
                  >
                    <span>Site Visit</span>
                    <span className="cta-arrow">↗</span>
                  </Link>

                </div>

                <style>{`
                  .premium-cta {
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    flex: 1;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    border-radius: 50px;
                    background: #FBBD23;
                    color: #ffffff !important;
                    border: 1px solid #000000;
                    text-decoration: none !important;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                    box-shadow: 0 3px 8px rgba(5, 50, 121, 0.2);
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                  }

                  /* Moving golden shine */
                  .premium-cta::before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    left: -120%;
                    width: 65%;
                    height: 100%;
                    background: linear-gradient(
                      110deg,
                      transparent,
                      #08418f,
                      transparent
                    );
                    transform: skewX(-25deg);
                    animation: ctaShine 3s ease-in-out infinite;
                  }

                  /* Animated golden border */
                  .premium-cta::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 50px;
                    border: 1px solid rgba(251, 189, 35, 0.8);
                    opacity: 0;
                    animation: ctaBorder 2.5s ease-in-out infinite;
                    pointer-events: none;
                  }

                  .premium-cta:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 7px 18px rgba(5, 50, 121, 0.35);
                    background: #08418f;
                  }

                  .cta-arrow {
                    font-size: 15px;
                    transition: transform 0.3s ease;
                  }

                  .premium-cta:hover .cta-arrow {
                    transform: translate(3px, -3px);
                    color: #FBBD23;
                  }

                  @keyframes ctaShine {
                    0%, 15% {
                      left: -120%;
                    }
                    65%, 100% {
                      left: 160%;
                    }
                  }

                  @keyframes ctaBorder {
                    0%, 100% {
                      opacity: 0.15;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @media (prefers-reduced-motion: reduce) {
                    .premium-cta::before,
                    .premium-cta::after {
                      animation: none;
                    }
                  }
                `}</style>

              </div>


              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-[#0B3479]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>

            {/* MOBILE NAVIGATION */}
            {isOpen && (
              <nav className="lg:hidden bg-white border-t border-gray-200 py-4">

                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-black font-semibold no-underline"
                >
                  Home
                </Link>

                {navItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center px-4 py-3">

                      <Link
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="text-black font-semibold no-underline"
                      >
                        {item.label}
                      </Link>

                      {item.dropdown && (
                        <button
                          onClick={() => setProjectOpen(!projectOpen)}
                          className="text-black"
                        >
                          <ChevronDown
                            className={projectOpen ? "rotate-180" : ""}
                          />
                        </button>
                      )}
                    </div>

                    {item.dropdown && projectOpen && (
                      <div className="bg-gray-50">
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.to}
                            onClick={() => {
                              setIsOpen(false);
                              setProjectOpen(false);
                            }}
                            className="block px-8 py-3 text-gray-700 no-underline"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* MOBILE BUTTONS */}
                <div className="flex gap-3 px-4 pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-3 rounded-full border border-[#0B3479] text-[#0B3479] font-semibold no-underline"
                  >
                    Book Now
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-3 rounded-full bg-[#0B3479] text-white font-semibold no-underline"
                  >
                    Site Visit
                  </Link>
                </div>

              </nav>
            )}
          </div>
        </div>
      </header>

      {/* FLOATING RIGHT SIDE ICON */}
      <div className="fixed right-0 top-[44%] z-[60]">
        <button
          aria-label="Quick assistance"
          className="w-[43px] h-[49px] bg-[#171717] text-[#E5F000] flex items-center justify-center rounded-l-lg shadow-lg"
        >
          <Sparkles size={29} strokeWidth={3} />
        </button>
      </div>
    </>
  );
};

export default Header;
