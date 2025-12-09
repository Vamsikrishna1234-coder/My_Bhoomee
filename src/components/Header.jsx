import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo mybhumee.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [mobileProjectOpen, setMobileProjectOpen] = useState(false);

  const closeTimer = useRef(null);

  const location = useLocation();
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/aboutus" },

    {
      label: "Our Projects",
      to: "/projects",
      dropdown: [
        { label: "Wooden Villa", to: "/projects/woodenvilla" },
        { label: "Glass Villa", to: "/projects/glassvilla" },
        { label: "Kerala Manduva", to: "/projects/keralamanduva" },
        { label: "Bali Harmony", to: "/projects/baliharmony" },
      ],
    },

    { label: "Gallery", to: "/gallery" },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact Us", to: "/contact" },
  ];

  const activeIndex = navItems.findIndex(
    (item) => item.to === location.pathname
  );

  // Underline animation
  useEffect(() => {
    const animateUnderline = () => {
      if (!navRef.current || activeIndex === -1) {
        setUnderlineStyle({ width: 0, left: 0 });
        return;
      }

      const navRect = navRef.current.getBoundingClientRect();
      const linkRect =
        navRef.current.children[activeIndex].getBoundingClientRect();

      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
      });
    };

    setTimeout(animateUnderline, 100);
    window.addEventListener("resize", animateUnderline);
    return () => window.removeEventListener("resize", animateUnderline);
  }, [location.pathname, activeIndex]);

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // OPEN DROPDOWN
  const openProjects = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProjectOpen(true);
  };

  // CLOSE DROPDOWN (but after delay)
  const closeProjects = () => {
    closeTimer.current = setTimeout(() => {
      setProjectOpen(false);
    }, 180); // smooth delay (prevents flicker)
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          isScrolled
            ? "bg-white/30 backdrop-blur-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Link to="/">
            <img src={logo} alt="MyBhumi Logo" className="h-14 lg:h-[72px]" />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-8 relative"
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && openProjects()}
                onMouseLeave={() => item.dropdown && closeProjects()}
              >
                {/* MAIN LINK + ARROW */}
                <Link
                  to={item.to}
                  className="font-semibold text-[17px] !text-black hover:text-gray-700 !no-underline flex items-center gap-1"
                >
                  {item.label}

                  {item.dropdown && (
                    <span
                      className={`transition-transform duration-300 text-[16px] ${
                        projectOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </Link>

                {/* GLASS DROPDOWN */}
                {item.dropdown && projectOpen && (
                  <div
                    className="
                      absolute left-0 
                      w-64 mt-4
                      py-4 
                      rounded-xl
                      backdrop-blur-xl bg-white/20
                      shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                      border border-white/30
                      animate-slideDown
                    "
                    style={{ top: "100%" }}
                    onMouseEnter={openProjects}
                    onMouseLeave={closeProjects}
                  >
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.to}
                        className="
                          block px-5 py-3 
                          text-black font-medium 
                          hover:bg-white/40 
                          rounded-lg 
                          transition 
                          !no-underline
                        "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* UNDERLINE */}
            <span
              className="absolute bottom-0 h-[2px] bg-black rounded-full transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                opacity: activeIndex !== -1 ? 1 : 0,
              }}
            />

            {/* BUTTON */}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 bg-black text-white rounded-full font-semibold !no-underline"
            >
              Enquiry Now
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black text-5xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <nav className="lg:hidden bg-white shadow-xl py-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center px-4 py-2 !text-black font-medium hover:bg-gray-100">
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="!no-underline"
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <button
                      onClick={() =>
                        setMobileProjectOpen(!mobileProjectOpen)
                      }
                      className="text-xl"
                    >
                      {mobileProjectOpen ? "▲" : "▼"}
                    </button>
                  )}
                </div>

                {item.dropdown && mobileProjectOpen && (
                  <div className="ml-6 bg-gray-50 rounded-lg">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.to}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-black hover:bg-gray-200 !no-underline"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 text-center px-4 py-2 bg-black text-white rounded-full font-semibold !no-underline"
            >
              Enquiry Now
            </Link>
          </nav>
        )}
      </div>

      {/* SLIDE DOWN ANIMATION */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
