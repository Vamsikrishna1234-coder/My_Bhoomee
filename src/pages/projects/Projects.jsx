import React from "react";
import { Link } from "react-router-dom";
import Fruits from "../../components/Fruits";

const Projects = () => {
  return (
    <main className="pt-28 pb-20">

      <Fruits />

      {/* FULL WIDTH SECTION WITH BACKGROUND */}
      <section className="bg-[#F8F2E9] py-16 w-full mt-10">

        {/* CENTER WRAPPER */}
        <div className="max-w-[1200px] mx-auto px-6">

          {/* MAIN HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-[#0c283d]">
            Our Projects
          </h1>

          {/* SUBTITLE */}
          <p className="text-center text-gray-600 mt-3 text-lg">
            Explore our premium villa categories
          </p>

          {/* GRID CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {/* Wooden Villa */}
            <Link
              to="/projects/woodenvilla"
              className="group bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-[#e8e8e8] !no-underline"
            >
              <h3 className="text-2xl font-semibold !text-[#11689B] !no-underline">
                Wooden Villa
              </h3>
            </Link>

            {/* Glass Villa */}
            <Link
              to="/projects/glassvilla"
              className="group bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-[#e8e8e8] !no-underline"
            >
              <h3 className="text-2xl font-semibold !text-[#11689B] !no-underline">
                Glass Villa
              </h3>
            </Link>

            {/* Kerala Manduva */}
            <Link
              to="/projects/keralamanduva"
              className="group bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-[#e8e8e8] !no-underline"
            >
              <h3 className="text-2xl font-semibold !text-[#11689B] !no-underline">
                Kerala Manduva
              </h3>
            </Link>

            {/* Bali Harmony */}
            <Link
              to="/projects/baliharmony"
              className="group bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-[#e8e8e8] !no-underline"
            >
              <h3 className="text-2xl font-semibold !text-[#11689B] !no-underline">
                Bali Harmony
              </h3>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
