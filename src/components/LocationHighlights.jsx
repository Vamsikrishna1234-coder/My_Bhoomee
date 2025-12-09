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
      items: ["10 min – Ratnadeep Supermarket", "15 min – Asian Cinemas"],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8F2E9] py-10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SECTION */}
        <div className="px-10 py-12">

          <p className="text-[#11689B] text-3xl font-bold uppercase tracking-wide mb-3 flex items-center gap-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
              className="w-6 h-6"
            />
            LOCATION HIGHLIGHTS
          </p>

          <h2 className="text-3xl font-bold text-black leading-tight">
            Perfectly Positioned for Leisure & Transport Connectivity
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Located in a rapidly developing part of Hyderabad, this address offers seamless 
            connectivity to both leisure and key transport hubs. With Hitech City just 
            20 minutes away, Green Field Resorts within 10 minutes, and the TSPA ORR 
            Junction accessible in 20 minutes, you remain connected to major urban conveniences. 
            Even the RGI Airport is only 30 minutes away, making travel easier and stress-free 
            for both business and family journeys.
          </p>

          {/* ACCORDION LIST */}
          <div className="mt-12 space-y-6">
            {toggles.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left text-2xl font-semibold text-[#11689B] hover:text-black transition"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span> {item.title}
                  </span>
                  <span className="text-4xl font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <ul className="mt-3 ml-10 text-gray-700 text-lg space-y-2">
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

        {/* RIGHT SIDE — GOOGLE MAP WITH DARK OVERLAY */}
        <div className="relative h-[600px] lg:h-full w-full">

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>

          {/* Google Maps iframe */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.609923549259!2d78.366!3d17.439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b!2sHyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full object-cover"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;
