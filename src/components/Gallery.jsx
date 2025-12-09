import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// IMPORT YOUR IMAGES
import img1 from "../assets/images/wooden/wooden natural .jpg";
import img2 from "../assets/images/wooden/wooden garden.jpg";
import img3 from "../assets/images/manduva/kerala manduva2.jpg";
import img4 from "../assets/images/manduva/kerala manduva3.jpg";
import img5 from "../assets/images/glassvilla/glass villa1.png";
import img6 from "../assets/images/glassvilla/glass villa2.jpg";

const sets = [
  [img1, img2, img3],
  [img4, img5, img6],
];

export default function NivritiStyleGallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % sets.length);
  const prev = () => setIndex((prev) => (prev - 1 + sets.length) % sets.length);

  return (
    <section className="bg-[#F8F2E9] py-14">
      
      {/* HEADING */}
      <h2 className="text-center text-3xl md:text-4xl font-serif italic mb-10">
         Premium Villas @ MyBhoomee
      </h2>

      {/* GALLERY WRAPPER */}
      <div className="max-w-[1500px] mx-auto relative px-4">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white 
          shadow-xl w-10 h-10 flex items-center justify-center rounded-full"
        >
          <ChevronLeft size={28} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white
          shadow-xl w-10 h-10 flex items-center justify-center rounded-full"
        >
          <ChevronRight size={28} />
        </button>

        {/* 3 IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {sets[index].map((img, i) => (
            <div key={i} className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>

      </div>

      {/* VIEW GALLERY BUTTON */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => (window.location.href = "/gallery")}
          className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full shadow-md 
           transition-all duration-300"
        >
          View Gallery
        </button>
      </div>

    </section>
  );
}
