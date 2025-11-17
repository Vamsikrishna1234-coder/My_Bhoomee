import React from "react";
import villa1 from "../assets/images/wooden/wooden-villa.jpg";
import villa2 from "../assets/images/wooden/wooden-villa1.jpg";
import villa3 from "../assets/images/glassvilla/glass villa1.png";
import { MapPin } from "lucide-react";

const projectData = [
  {
    title: "ONYX (A life closer to nature)",
    size: "180 Sqyd",
    buildup: "2400 Sft",
    type: "3BHK",
    price: "1.85 Cr*",
    location: "Moinabad, Hyderabad",
    image: villa1,
  },
  {
    title: "ONYX European Wooden villas ",
    size: "160 Sqyd",
    buildup: "2100 Sft",
    type: "3BHK",
    price: "1.55 Cr*",
    location: "Moinabad, Hyderabad",
    image: villa2,
  },
  {
    title: "ONYX glass Villas",
    size: "200 Sqyd",
    buildup: "2600 Sft",
    type: "4BHK",
    price: "2.25 Cr*",
    location: "Moinabad, Hyderabad",
    image: villa3,
  }
];

const OngoingProjects = () => {
  const handleProjectClick = () => window.location.href = "/projects";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-left mb-12">
          <span className="text-[#11689B] font-semibold tracking-widest uppercase text-sm">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-1">
            Ongoing Developments
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer shadow-xl bg-white"
              onClick={handleProjectClick}
            >
              {/* Top Image */}
              <div className="w-full h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Title + Location */}
              <div className="p-4 pb-1">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 flex items-center gap-1 text-sm mt-1">
                  <MapPin size={15} /> {item.location}
                </p>
              </div>

              {/* Detail Info Row */}
              <div className="border-t border-gray-200 px-4 py-3 grid grid-cols-4 text-center text-sm text-gray-700 font-medium">
                <div>
                  <p className="text-xs text-gray-500">Size</p>
                  <p>{item.size}</p>
                </div>
                <div className="border-l border-gray-200">
                  <p className="text-xs text-gray-500">Buildup</p>
                  <p>{item.buildup}</p>
                </div>
                <div className="border-l border-gray-200">
                  <p className="text-xs text-gray-500">Type</p>
                  <p>{item.type}</p>
                </div>
                <div className="border-l border-gray-200">
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="text-[#11689B] font-bold">{item.price}</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-end px-5 py-4">
              <button className="px-6 py-2 border border-[#11689B] rounded-full text-sm font-semibold text-[#11689B] hover:bg-[#11689B] hover:text-white transition-all duration-300">
                View Project
              </button>
            </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OngoingProjects;
