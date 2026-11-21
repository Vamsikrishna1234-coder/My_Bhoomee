
import React from "react";

export default function BhoomathaJourney({ youtubeUrl = "" }) {

  // Extract YouTube video ID from different URL formats
  const getVideoId = (url) => {
    if (!url) return "";

    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.slice(1);
      }

      if (parsed.pathname.includes("/shorts/")) {
        return parsed.pathname.split("/shorts/")[1].split("/")[0];
      }

      if (parsed.pathname.includes("/embed/")) {
        return parsed.pathname.split("/embed/")[1].split("/")[0];
      }

      return parsed.searchParams.get("v") || "";
    } catch {
      return "";
    }
  };

  const videoId = getVideoId(youtubeUrl);

  return (
    <section className="w-full bg-white py-10 md:py-20 px-5 overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-4">
          <span className="text-[#FBBD23] text-sm font-bold uppercase tracking-[3px]">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#053279] mt-2">
            Bhoomatha Journey
          </h2>

          <div className="w-16 h-1 bg-[#FBBD23] mx-auto mt-4 rounded-full" />
        </div>

        {/* Video Container */}
        <div className="w-full max-w-[840px] mx-auto">

          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#053279] shadow-lg">

            {videoId ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="Bhoomatha Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

                <div className="w-20 h-20 rounded-full border border-[#FBBD23]/50 flex items-center justify-center mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9 text-[#FBBD23] ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <p className="text-white font-semibold text-lg">
                  Bhoomatha Journey
                </p>

                <p className="text-white/60 text-sm mt-2">
                  YouTube video will appear here
                </p>

              </div>
            )}

          </div>

        </div>

        {/* Description */}
        <div className="max-w-[680px] text-center mt-7 md:mt-8">

          <p className="text-gray-600 text-base md:text-lg leading-7 md:leading-8">
            Bhoomatha's journey is built on a foundation of trust,
            innovation, and excellence. With each milestone, we
            continue to transform visions into reality, creating
            impactful projects that inspire growth and long-term success.
          </p>

        </div>

      </div>

    </section>
  );
}
