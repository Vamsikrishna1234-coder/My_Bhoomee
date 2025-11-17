import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo mybhumee.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopScrolled, setDesktopScrolled] = useState(false);
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

  const activeIndex = navItems.findIndex(item => item.to === location.pathname);

  // Scroll only applies on desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setDesktopScrolled(window.scrollY > 80);
      } else {
        setDesktopScrolled(true); // mobile always white
      }
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Underline animation
  useEffect(() => {
    const animateUnderline = () => {
      if (!navRef.current || activeIndex === -1) {
        setUnderlineStyle({ width: 0, left: 0 });
        return;
      }
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = navRef.current.children[activeIndex].getBoundingClientRect();
      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
      });
    };

    setTimeout(animateUnderline, 100);
    window.addEventListener("resize", animateUnderline);
    return () => window.removeEventListener("resize", animateUnderline);
  }, [location.pathname, activeIndex]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${desktopScrolled ? "bg-white shadow-md" : "bg-transparent"}
        lg:${desktopScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="MyBhumi Logo" className="h-14 lg:h-[72px]" />
          </Link>

          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-semibold text-[17px] transition !no-underline ${
                  desktopScrolled
                    ? "!text-[#11689B] hover:text-[#0d5275]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Underline */}
            <span
              className={`absolute bottom-0 h-[2px] rounded-full transition-all duration-300 ${
                desktopScrolled ? "bg-[#11689B]" : "bg-white"
              }`}
              style={{ left: underlineStyle.left, width: underlineStyle.width, opacity: activeIndex !== -1 ? 1 : 0 }}
            />

            {/* Enquiry Button */}
            <Link
              to="/contact"
              className={`
                ml-4 px-4 py-2 font-semibold rounded-full shadow-md transition !no-underline
                ${desktopScrolled ? "bg-[#11689B] text-white" : "bg-white text-black"}
              `}
            >
              Enquiry Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#11689B] text-5xl sm:text-6xl p-1"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="lg:hidden bg-white shadow-xl divide-y divide-gray-100 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 !text-[#11689B] font-medium hover:bg-[#EAF4FF] !no-underline"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 text-center px-4 py-2 bg-[#11689B] text-white font-semibold rounded-full !no-underline"
            >
              Enquiry Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
