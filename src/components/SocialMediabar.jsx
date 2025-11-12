// src/components/SocialBar.jsx
import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#11689B] transition-all duration-300 shadow-md hover:bg-[#11689B] hover:text-white hover:scale-125"
      >
        <FaWhatsapp className="text-lg" />
      </a>

      {/* Instagram */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#11689B] transition-all duration-300 shadow-md hover:bg-[#11689B] hover:text-white hover:scale-125"
      >
        <FaInstagram className="text-lg" />
      </a>

      {/* Facebook */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#11689B] transition-all duration-300 shadow-md hover:bg-[#11689B] hover:text-white hover:scale-125"
      >
        <FaFacebookF className="text-lg" />
      </a>

      {/* YouTube */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#11689B] transition-all duration-300 shadow-md hover:bg-[#11689B] hover:text-white hover:scale-125"
      >
        <FaYoutube className="text-lg" />
      </a>

      {/* Twitter */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#11689B] transition-all duration-300 shadow-md hover:bg-[#11689B] hover:text-white hover:scale-125"
      >
        <FaTwitter className="text-lg" />
      </a>
    </div>
  );
};

export default SocialBar;
