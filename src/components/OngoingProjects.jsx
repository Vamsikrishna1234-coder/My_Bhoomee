
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const projects = [
  {
    id: 1,
    name: "SVN",
    location: "Vizianagaram - Tatipudi",
    category: "Other",
    image: "src/assets/images/SVN.webp",
    slug: "/projects/SVN-SwapnlokPage",
  },
  {
    id: 2,
    name: "Nature Valley",
    location: "Srikakulam - Ranastalam",
    category: "Other",
    image: "src/assets/images/NatureV.jpeg",
    slug: "/projects/Nature-ValleyPage",
  },
  {
    id: 3,
    name: "CMR Goldfields",
    location: "Visakhapatnam - Ravada",
    category: "Other",
    image: "src/assets/images/CMR GOLD.webp",
    slug: "/projects/CMR-GoldfieldsPage",
  },
  {
    id: 4,
    name: "Sugundha Meadows",
    location: "Bobbili",
    category: "Other",
    image: "src/assets/images/Sugandha.webp",
    slug: "/projects/Sugandha-MeadowsPage",
  },
  {
    id: 5,
    name: "Purna Sai",
    location: "Visakhapatnam - Maddi Village",
    category: "Township",
    image: "src/assets/images/Purnasai.webp",
    slug: "/projects/Purna-SaiPage",
  },
  {
    id: 6,
    name: "Anadapuram Venture",
    location: "Anandapuram",
    category: "Upcoming",
    image: "src/assets/images/Apuram up.png",
    slug: "/projects/anadapuram",
    upcoming: true,
    acres: "130",
    description: "Luxury apartments with world-class amenities",
  },
  {
    id: 7,
    name: "Boyapalem Construction",
    location: "Boyapalem",
    category: "Upcoming",
    image: "src/assets/images/Bpalem up.png",
    slug: "/projects/boyapalem",
    upcoming: true,
    acres: "65",
    description: "Premium office spaces for global enterprises",
  },
  {
    id: 8,
    name: "Housing Project",
    location: "Kadiri",
    category: "Upcoming",
    image: "src/assets/images/Kadiri up.png",
    slug: "/projects/kadiri",
    upcoming: true,
    acres: "30",
    description: "Integrated township with retail and residential spaces",
  },
];


const filters = [
  "All Projects",
  "Township",
  "Other",
  "Upcoming",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-16">

          <span className="block font-serif italic text-lg sm:text-xl text-[#053279] mb-3">
            Our Projects
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black tracking-tight">
            Featured Developments
          </h2>

          <p className="text-gray-500 text-sm sm:text-base font-medium mt-4">
            Discover our portfolio of exceptional properties designed for modern living
          </p>

          <div className="w-16 h-[3px] bg-[#FBBD23] rounded-full mx-auto mt-5" />

        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-4 mb-12">

          {filters.map((filter) => (

            <label
              key={filter}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >

              <input
                type="radio"
                name="projectFilter"
                checked={activeFilter === filter}
                onChange={() => setActiveFilter(filter)}
                className="w-[18px] h-[18px] accent-[#A51E16] cursor-pointer"
              />

              <span className={`
                text-sm sm:text-[15px] transition-colors duration-300
                ${activeFilter === filter
                  ? "text-[#053279] font-semibold"
                  : "text-gray-700 group-hover:text-[#053279]"
                }
              `}>
                {filter === "Other"
                  ? "Other"
                  : filter === "Township"
                    ? "Townships"
                    : filter === "Upcoming"
                      ? "Upcoming Projects"
                      : "All Projects"}
              </span>

            </label>

          ))}

        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">

          {filteredProjects.map((project) => (

            <article
              key={project.id}
              className="
                group relative bg-white rounded-md overflow-hidden
                border border-gray-200
                shadow-[0_2px_7px_rgba(0,0,0,0.14)]
                hover:shadow-[0_12px_28px_rgba(5,50,121,0.18)]
                hover:-translate-y-1.5
                transition-all duration-500
                flex flex-col
              "
            >

              {/* IMAGE */}
              <div className="relative w-full h-[225px] sm:h-[235px] overflow-hidden bg-gray-100">

                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* CATEGORY BADGE */}
                <span className="
                  absolute top-3 right-3
                  bg-[#053279] text-white
                  text-[11px] font-bold
                  px-3 py-1.5 rounded-full shadow-md
                ">
                  {project.category === "Upcoming"
                    ? "Upcoming"
                    : project.category}
                </span>

                {/* ACREAGE */}
                {project.acres && (
                  <div className="
                    absolute bottom-3 left-3
                    bg-[#FBBD23] text-[#053279]
                    px-4 py-2 rounded-md
                    shadow-lg
                  ">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold">
                        {project.acres}
                      </span>
                      <span className="text-[10px] font-bold tracking-widest">
                        ACRES
                      </span>
                    </div>
                  </div>
                )}

                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-[#053279]/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "/>

              </div>

              {/* CONTENT */}
              <div className="px-4 py-4 flex flex-col flex-1 min-h-[160px]">

                <h3 className="
                  text-[#053279] text-lg font-bold leading-snug
                  group-hover:text-[#B68A17]
                  transition-colors duration-300
                ">
                  {project.name}
                </h3>

                <p className="text-black text-sm font-semibold mt-2">
                  {project.location}
                </p>

                {/* UPCOMING PROJECT DESCRIPTION */}
                {project.description && (
                  <p className="
                    text-gray-500 text-[13px]
                    leading-relaxed mt-3
                  ">
                    {project.description}
                  </p>
                )}

                <div className="flex-1" />

                {/* DETAILS LINK */}
                <Link
                  to={project.slug}
                  className="
                    flex items-center justify-end gap-2
                    mt-5 text-[#FBBD23]
                    text-sm font-bold !no-underline
                    group/link
                  "
                >
                  View Details

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                  />

                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* VIEW ALL */}
        <div className="flex justify-center mt-12 sm:mt-16">

          <Link
            to="/projects"
            className="
              inline-flex items-center justify-center gap-3
              bg-[#053279] text-white
              px-8 py-3 rounded-full
              text-sm font-bold shadow-md
              !no-underline
              transition-all duration-300
              hover:bg-[#FBBD23] hover:text-[#053279]
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Projects;
