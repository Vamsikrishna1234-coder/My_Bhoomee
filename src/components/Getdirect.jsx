import React from "react";

import {
  Facebook,
  Linkedin,
  Share2,
  Copy,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

// Import your static QR code image
import ProjectQR from "../assets/images/svn-swapnlok/svn-barcode.png";

const SVNSwapnlokLocation = () => {

  // Replace with your actual deployed project website URL
  const projectUrl = "https://yourwebsite.com/svn-swapnalok";

  const shareText = "Explore SVN Swapnalok by Bhoomatha Group";

  const encodedUrl = encodeURIComponent(projectUrl);
  const encodedText = encodeURIComponent(shareText);

  // Copy project URL
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(projectUrl);
      alert("Project website link copied successfully!");
    } catch (error) {
      alert("Unable to copy link. Please copy it manually.");
    }
  };

  // Native share
  const shareProject = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "SVN Swapnalok",
          text: shareText,
          url: projectUrl,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Sharing failed:", error);
        }
      }
    } else {
      copyLink();
    }
  };

  return (
    <section className="w-full bg-[#f8fff5] py-16 md:py-20">

      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#07377f] mb-12">
          Get Directions to the Project
        </h2>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-center">

          {/* LEFT - GOOGLE MAP */}
          <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-sm rounded-sm">

            <iframe
              src="https://www.google.com/maps?q=SVN+SWAPNLOK+Approach+Road,+Cheedipalem,+Andhra+Pradesh&output=embed"
              title="SVN Swapnalok Project Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          {/* RIGHT - QR CARD */}
          <div className="w-full max-w-[400px] mx-auto bg-white rounded-[25px] border border-gray-100 shadow-md px-6 py-8 md:px-8 md:py-9 text-center">

            <h3 className="text-xl font-bold text-[#07377f] leading-8 mb-6">
              Scan the below QR to know about
              <br />
              the project
            </h3>

            {/* STATIC QR CODE IMAGE */}
            <div className="flex justify-center mb-8">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit SVN Swapnalok Website"
              >
                <img
                  src={ProjectQR}
                  alt="Scan QR Code to visit SVN Swapnalok website"
                  className="w-[260px] h-[260px] object-contain cursor-pointer"
                />
              </a>
            </div>

            {/* SHARE BUTTON */}
            <div className="flex justify-center mb-9">
              <button
                onClick={shareProject}
                aria-label="Share project"
                className="text-[#a11d16] hover:text-red-700 transition-transform hover:scale-110"
              >
                <Share2 size={23} />
              </button>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center justify-center gap-6 md:gap-7 text-[#a11d16]">

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="hover:text-green-600 transition-transform hover:-translate-y-1"
              >
                <FaWhatsapp size={25} />
              </a>

              {/* FACEBOOK */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="hover:text-blue-600 transition-transform hover:-translate-y-1"
              >
                <Facebook size={23} fill="currentColor" />
              </a>

              {/* X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="text-xl font-bold hover:text-black transition-transform hover:-translate-y-1"
              >
                X
              </a>

              {/* LINKEDIN */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="hover:text-blue-700 transition-transform hover:-translate-y-1"
              >
                <Linkedin size={23} fill="currentColor" />
              </a>

              {/* COPY LINK */}
              <button
                onClick={copyLink}
                aria-label="Copy project website link"
                className="hover:text-gray-700 transition-transform hover:-translate-y-1"
              >
                <Copy size={22} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SVNSwapnlokLocation;

