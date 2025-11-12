import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo mybhumee.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/aboutus" },
    { label: "Our Projects", to: "/projects" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact Us", to: "/contact" },
  ];

  const activeIndex = navItems.findIndex(
    (item) => item.to === location.pathname
  );

  useEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current || activeIndex === -1) {
        setUnderlineStyle({ width: 0, left: 0 });
        return;
      }
      const activeLink = navRef.current.children[activeIndex];
      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setUnderlineStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    };
    const timeout = setTimeout(updateUnderline, 100);
    window.addEventListener("resize", updateUnderline);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [location.pathname, activeIndex]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ease-in">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="MyBhumi Logo"
              className="h-14 w-auto lg:h-[72px] transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-8 relative"
          >
            {navItems.map((item) => {
              const isActive = item.to === location.pathname;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    color: isActive ? "#11689B" : "#11689B",
                    textDecoration: "none",
                  }}
                  className={`relative text-[17px] font-semibold tracking-wide transition-colors duration-300 px-1 hover:text-[#0e5785]`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Underline */}
            <span
              className="absolute -bottom-[2px] h-[2px] bg-[#11689B] rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                opacity: activeIndex !== -1 ? 1 : 0,
              }}
            />

            {/* Enquiry Now Button */}
            <Link
              to="/contact"
              className="relative px-4 py-2 bg-white !text-[#11689B] font-semibold rounded-full shadow-md transition duration-300 overflow-hidden group ml-4"
              style={{ textDecoration: "none" }}
            >
              <span
                className="absolute inset-0 rounded-full border-2 border-transparent 
                bg-[conic-gradient(from_0deg,#11689B_0%,#0e5785_50%,#11689B_100%)] animate-spin-slow"
              ></span>
              <span className="absolute inset-[2px] bg-white rounded-full group-hover:animate-glow"></span>
              <span className="relative z-10">Enquiry Now</span>

              <style>{`
                @keyframes spin-slow {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes glow {
                  0%,100% { box-shadow: 0 0 8px rgba(17,104,155,0.5); }
                  50% { box-shadow: 0 0 18px rgba(17,104,155,0.8); }
                }
                .animate-spin-slow { animation: spin-slow 3s linear infinite; }
                .animate-glow { animation: glow 1.5s ease-in-out infinite; }
              `}</style>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-[#11689B] hover:bg-[#11689B]/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4 pt-2">
            {navItems.map((item) => {
              const isActive = item.to === location.pathname;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    color: "#11689B",
                    textDecoration: "none",
                  }}
                  className={`text-[17px] font-medium px-2 py-1 rounded-md transition-all duration-300 ${
                    isActive ? "bg-[#e2eff7]" : "hover:text-[#0e5785]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-block text-center px-4 py-2 bg-[#11689B] text-white font-semibold rounded-full shadow-md hover:bg-[#0e5785] transition duration-300"
              style={{ textDecoration: "none" }}
            >
              Enquiry Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
