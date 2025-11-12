// src/components/DownloadBrochure.jsx
import React from "react";

const DownloadBrochure = () => {
  return (
    <div className="fixed right-3 top-1/3 transform -translate-y-1/2 z-50">
      <a
        href="/mybhumee brochure.pdf"
        download
        className="flex flex-col items-center justify-center bg-white text-[#11689B] font-semibold text-[15px] tracking-wide px-3 py-2 rounded-tl-lg rounded-bl-lg shadow-lg transition-all duration-300 hover:bg-[#11689B] hover:text-white hover:scale-105 origin-center no-underline"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          textDecoration: "none",
        }}
        title="Download Brochure"
      >
        <span>Download Brochure</span>
      </a>
    </div>
  );
};

export default DownloadBrochure;
