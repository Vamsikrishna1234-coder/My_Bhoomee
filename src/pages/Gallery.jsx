import React, { useState } from "react";
import Wooden1 from "../assets/images/wooden/wooden natural .jpg"
import Wooden2 from "../assets/images/wooden/wooden interior.jpg"
import Wooden3 from "../assets/images/wooden/wooden garden.jpg"
import Wooden4 from "../assets/images/wooden/wooden pool.jpg"
import Wooden5 from "../assets/images/wooden/wooden-villa.jpg"
import Wooden6 from "../assets/images/wooden/wooden night.jpg"
import Kerala1 from "../assets/images/manduva/kerala manduva1.jpg"
import Kerala2 from "../assets/images/manduva/kerala manduva2.jpg"
import Kerala3 from "../assets/images/manduva/kerala manduva3.jpg"
import Kerala4 from "../assets/images/manduva/kerala manduva4.jpg"
import Kerala5 from "../assets/images/manduva/Mandava exterior.jpg"
import Glass1 from "../assets/images/glassvilla/glass villa.jpg"
import Glass2 from "../assets/images/glassvilla/glass villa1.png"
import Glass3 from "../assets/images/glassvilla/glass villa2.jpg"
import Glass4 from "../assets/images/glassvilla/glass villa2.jpg"
import Bali1 from "../assets/images/bali/baliimg1.jpg"
import Bali2 from "../assets/images/bali/baliimg2.jpg"
import Bali3 from "../assets/images/bali/baliimg3.png"
import Bali4 from "../assets/images/bali/baliimg4.png"

const galleryData = [
  {
    category: "Wooden Villa",
    key: "wooden-villa",
    images: [
      { id: 1, src: Wooden1, alt: "Wooden Villa Front" },
      { id: 2, src: Wooden2, alt: "Wooden Villa Interior" },
      { id: 3, src: Wooden3, alt: "Wooden Villa Garden" },
      { id: 4, src: Wooden4, alt: "Wooden Villa Pool" },
      { id: 5, src: Wooden5, alt: "Wooden Villa Exterior" },
      { id: 6, src: Wooden6, alt: "Wooden Villa Night" }
    ],
  },
  {
    category: "Kerala Manduva",
    key: "kerala-manduva",
    images: [
      { id: 7, src: Kerala1, alt: "Kerala Manduva Entrance" },
      { id: 8, src: Kerala2, alt: "Kerala Manduva Courtyard" },
      { id: 9, src: Kerala4, alt: "Kerala Manduva Poolside" },
      { id: 10, src: Kerala3, alt: "Kerala Manduva Terrace" },
      { id: 11, src: Kerala2, alt: "Kerala Manduva Interior" },
      { id: 12, src: Kerala5, alt: "Kerala Manduva Garden" },
    ],
  },
  {
    category: "Glass Villa",
    key: "glass-villa",
    images: [
      { id: 13, src:Glass1, alt: "Glass Villa Facade" },
      { id: 14, src:Glass2 , alt: "Glass Villa Pool" },
      { id: 15, src:Glass3 , alt: "Glass Villa Interior" },
      { id: 16, src:Glass4, alt: "Glass Villa Living" },
      { id: 17, src:Glass1, alt: "Glass Villa Exterior" },
      { id: 18, src:Glass2 , alt: "Glass Villa View" },
    ],
  },
  {
    category: "Bali Harmony",
    key: "bali-harmony",
    images: [
      { id: 19, src: Bali1 , alt: "Bali Harmony Pavilion" },
      { id: 20, src: Bali2, alt: "Bali Harmony Bedroom" },
      { id: 21, src: Bali3, alt: "Bali Harmony Garden" },
      { id: 22, src: Bali4, alt: "Bali Harmony Pool" },
      { id: 23, src: Bali1, alt: "Bali Harmony Lounge" },
      { id: 24, src: Bali2, alt: "Bali Harmony View" },
    ],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse of MyBhumi's premium real estate projects — where modern
            living meets nature's serenity.
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="space-y-20">
          {galleryData.map((section) => (
            <div key={section.key}>
              {/* Category Heading with Line */}
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-4xl font-bold text-gray-900">
                  {section.category}
                </h3>
                <div className="flex-1 h-px text-center"></div>
              </div>

              {/* Image Grid - No Borders or Rounded Corners */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.images.map((img) => (
                  <div
                    key={img.id}
                    className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
                    onClick={() => setSelectedImage(img.src)}
                    onMouseEnter={() => setHoveredId(img.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                    />
                    
                    {/* Overlay with Text */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${hoveredId === img.id ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                        <p className="text-white font-medium text-lg">
                          {img.alt}
                        </p>
                        <div className="w-12 h-0.5 bg-green-500 mt-2"></div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-green-500 border-l-[60px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white text-lg font-medium hover:text-green-500 transition-colors flex items-center gap-2"
                aria-label="Close"
              >
                <span>CLOSE</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;