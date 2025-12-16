import React, { useState } from "react";

const LocationHighlights = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggles = [
    {
      title: "IT, Leisure & Transport Hubs",
      icon: "🧭",
      items: [
        "20 min – Hitech City",
        "10 min – Green Field Resorts",
        "20 min – TSPA ORR Junction",
        "30 min – RGI Airport",
      ],
    },
    {
      title: "Shopping & Entertainment",
      icon: "🛍️",
      items: [
        "10 min – Ratnadeep Supermarket",
        "15 min – Asian Cinemas",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* CENTERED HEADING */}
        <div className="text-center mb-10">
          <p className="text-black text-3xl font-medium uppercase tracking-wide mb-4">
            Location Highlights
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight max-w-4xl mx-auto">
            Perfectly Positioned for Leisure & Transport Connectivity
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
          Located in a rapidly developing part of Hyderabad, this address offers seamless 
          connectivity to both leisure and key transport hubs. With Hitech City just 
          20 minutes away, Green Field Resorts within 10 minutes, and the TSPA ORR 
          Junction accessible in 20 minutes, you remain connected to major urban conveniences. 
          Even the RGI Airport is only 30 minutes away, making travel easier and stress-free 
          for both business and family journeys.The surrounding infrastructure continues to grow, ensuring strong future appreciation
          and long-term value for homeowners and investors alike.
          Essential schools, healthcare facilities, and daily conveniences are easily accessible,
          supporting a comfortable and well-connected lifestyle.
        </p>

        {/* ACCORDION LIST */}
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {toggles.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left text-xl md:text-2xl font-semibold text-black transition"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  {item.title}
                </span>
                <span className="text-3xl font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <ul className="mt-4 ml-8 text-gray-700 text-lg space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              )}

              <div className="border-b border-gray-300 mt-4"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationHighlights;
