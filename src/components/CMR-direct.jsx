import React from "react";

import {
  Facebook,
  Linkedin,
  Share2,
  Copy,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

// Import CMR Gold Fields QR code image
import ProjectQR from "../assets/images/cmr-gold/cmr-barcode.png";

const CMRGoldFieldsLocation = () => {
  // Replace with your actual deployed CMR Gold Fields website URL
  const projectUrl = "https://yourwebsite.com/cmr-gold-fields";

  const shareText = "Explore CMR Gold Fields by Bhoomatha Group";

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
          title: "CMR Gold Fields",
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
      <div className="mx-auto max-w-[1800px] px-5 md:px-8">

        {/* HEADING */}
        <h2 className="mb-12 text-center text-3xl font-bold text-[#07377f] md:text-4xl">
          Get Directions to the Project
        </h2>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">

          {/* LEFT - GOOGLE MAP */}
          <div className="h-[350px] w-full overflow-hidden rounded-sm shadow-sm md:h-[450px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=CMR+Gold+Fields+Andhra+Pradesh&output=embed"
              title="CMR Gold Fields Project Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* RIGHT - QR CARD */}
          <div className="mx-auto w-full max-w-[400px] rounded-[25px] border border-gray-100 bg-white px-6 py-8 text-center shadow-md md:px-8 md:py-9">

            <h3 className="mb-6 text-xl font-bold leading-8 text-[#07377f]">
              Scan the below QR to know about
              <br />
              the project
            </h3>

            {/* STATIC QR CODE IMAGE */}
            <div className="mb-8 flex justify-center">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit CMR Gold Fields Website"
              >
                <img
                  src={ProjectQR}
                  alt="Scan QR Code to visit CMR Gold Fields website"
                  className="h-[260px] w-[260px] cursor-pointer object-contain"
                />
              </a>
            </div>

            {/* SHARE BUTTON */}
            <div className="mb-9 flex justify-center">
              <button
                onClick={shareProject}
                aria-label="Share project"
                className="text-[#a11d16] transition-transform hover:scale-110 hover:text-red-700"
              >
                <Share2 size={23} />
              </button>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center justify-center gap-6 text-[#a11d16] md:gap-7">

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="transition-transform hover:-translate-y-1 hover:text-green-600"
              >
                <FaWhatsapp size={25} />
              </a>

              {/* FACEBOOK */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="transition-transform hover:-translate-y-1 hover:text-blue-600"
              >
                <Facebook size={23} fill="currentColor" />
              </a>

              {/* X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="text-xl font-bold transition-transform hover:-translate-y-1 hover:text-black"
              >
                X
              </a>

              {/* LINKEDIN */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="transition-transform hover:-translate-y-1 hover:text-blue-700"
              >
                <Linkedin size={23} fill="currentColor" />
              </a>

              {/* COPY LINK */}
              <button
                onClick={copyLink}
                aria-label="Copy project website link"
                className="transition-transform hover:-translate-y-1 hover:text-gray-700"
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

export default CMRGoldFieldsLocation;