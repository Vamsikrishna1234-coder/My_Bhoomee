
import React from "react";

const VisionMission = () => {
  const images = [
    {
      id: 1,
      src: "/src/assets/images/vision.jpg",
      alt: "Vision",
    },
    {
      id: 2,
      src: "/src/assets/images/mission.jpg",
      alt: "Mission",
    },
    {
      id: 3,
      src: "/src/assets/images/values.jpg",
      alt: "Values",
    },
  ];

  return (
    <section className="w-full bg-gray-100 px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1800px]">


        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-5 lg:gap-8">

          <h1 className="col-span-1 text-center text-2xl font-medium leading-tight text-[#053279] sm:text-3xl md:col-span-3 lg:text-4xl">
            Our Vision, Mission, and Values
          </h1>

          {images.map((image) => (
            <div
              key={image.id}
              className="flex w-full items-center justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full max-w-[500px] object-contain"
                loading="lazy"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
