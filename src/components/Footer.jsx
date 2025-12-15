// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "../components/FontAwesomeIcon";
import Logowhite from "../assets/images/logo mybhumee white.png";

const Footer = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/aboutus" },
    { label: "Our Projects", to: "/projects" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact Us", to: "/contact" },
  ];

  const socialLinks = [
    { icon: "facebook", href: "https://www.facebook.com/mybhoomee" },
    { icon: "twitter", href: "https://twitter.com/" },
    { icon: "instagram", href: "https://www.instagram.com/mybhoomeespaceinfra/" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/my-bhoomee-space-infra-developers-004b18280/" },
  ];

  return (
    <footer className="bg-black text-white-100 py-10">
      <div className="container mx-auto px-4">
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* LOGO + ABOUT */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-4">
              <img src={Logowhite} alt="Logo" className="h-30 w-auto" />
            </Link>
            <p className="text-sm mb-3 leading-relaxed text-gray-100">
              MyBhumi is committed to creating sustainable and eco-friendly projects
              that bridge innovation with nature. We focus on quality, trust, and
              community growth through every initiative.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-start md:pl-4 pl-0 sm:pl-0 mx-0">
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white hover:text-white transition !no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE ADDRESS */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-3">Our Office</h3>
            <p className="text-sm text-gray-100 leading-relaxed">
              MyBhoomee Corporate Office<br />
              Plot No. 25, Green Valley,<br />
              Near IT Park, Hyderabad, Telangana – 500081<br />
              Phone:{" "}
              <a href="tel:+918123456789" className="text-white !no-underline">
                +91 81234 56789
              </a>
              <br />
              Email:{" "}
              <a href="mailto:office@mybhumi.com" className="text-white !no-underline">
                office@mybhumi.com
              </a>
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-lg md:text-xl"  // ⭐ Smaller on mobile, bigger on desktop
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-100">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">MyBhoomee</span>. All rights reserved. | Designed by{" "}
          <a
            href="https://brick2tech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white !no-underline"
          >
            Brick2tech
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
