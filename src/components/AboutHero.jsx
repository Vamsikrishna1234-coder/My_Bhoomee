
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#f8fff7] px-5 py-12 sm:px-8 md:py-14 lg:px-10">
      <div className="mx-auto grid max-w-[1375px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-6">

        {/* Left Side - Building Image */}
        <div className="h-[380px] w-full overflow-hidden sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[805px]">
          <img
            src="src/assets/images/bhoomatha house.webp"
            alt="Bhoomatha Group Office Building"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right Side - Company Profile */}
        <div className="w-full">
          <h2 className="mb-5 text-2xl font-bold leading-tight text-[#123d78] sm:text-3xl lg:mb-7">
            Company Profile
          </h2>

          <div className="space-y-4 text-sm leading-[1.65] text-gray-900 sm:text-base lg:text-[17px] lg:leading-[1.48]">

            <p>
              Bhoomatha Group is a trusted name in the real estate industry,
              delivering high-quality residential townships, gated communities,
              and commercial projects across North Coastal Andhra and Central
              Andhra. With a strong focus on innovation, sustainability, and
              customer satisfaction, the company has built a reputation for
              offering strategically located properties that ensure long-term
              value, modern infrastructure, and seamless connectivity.
            </p>

            <p>
              Every Bhoomatha project is meticulously designed to meet the
              evolving needs of homebuyers, investors, and businesses. From
              luxurious residential communities featuring world-class
              amenities to commercial hubs that support thriving enterprises,
              each development reflects a commitment to superior construction
              standards, architectural excellence, and long-term growth
              potential.
            </p>

            <p>
              Bhoomatha Group takes pride in developing well-planned
              neighborhoods with landscaped gardens, wide roads, and modern
              lifestyle features that promote comfort, security, and
              convenience. With a keen emphasis on quality, transparency,
              and timely project completion, the company ensures that every
              investment remains secure, profitable, and future-ready.
            </p>

            <p>
              With a strong foundation in ethical business practices and an
              unwavering focus on customer needs, Bhoomatha Group continues
              to shape the real estate landscape by creating sustainable,
              high-value properties that redefine urban living. Whether it's
              a dream home, a profitable investment, or a premium business
              location, every project is designed to offer an unparalleled
              experience, setting new benchmarks in the industry.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
