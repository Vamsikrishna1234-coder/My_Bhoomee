
import React from "react";
import GoldFieldsImage from "../../assets/images/cmr-gold/CMR-mp.webp";
import LifestyleImage from "../../assets/images/cmr-gold/CMR-sitemap.webp";
import CMRGoldFieldsLocation from "../../components/CMR-direct";
import CMRPhighlights from "../../components/CMR-Phighlights";
import CMRGallery from "../../components/CMR-Gallery";

const CMRGoldfieldsPage = () => {
  return (
    <>
      {/* ================= GOLD FIELDS DESCRIPTION ================= */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1750px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-14">

          {/* LEFT SIDE DESCRIPTION */}
          <div>
            <h2 className="mb-7 text-3xl font-bold text-[#153d7a] sm:text-4xl lg:text-5xl">
              Gold Fields
            </h2>

            <div className="space-y-5 text-justify text-sm leading-8 text-gray-600 sm:text-base">
              <p>
                Gold Fields is a premium residential project that redefines
                modern living with spacious, well-designed, and luxurious
                homes. Designed with contemporary architecture and built
                using high-quality materials, it ensures durability, safety,
                and timeless elegance. Every detail is thoughtfully crafted
                to provide a perfect blend of comfort, functionality, and
                sophistication, making it an ideal choice for those seeking
                an elevated and refined lifestyle.
              </p>

              <p>
                Strategically located, Gold Fields offers seamless
                connectivity to major highways, business hubs, educational
                institutions, healthcare facilities, and shopping centers.
                Despite its proximity to urban conveniences, it maintains
                a peaceful and serene environment, providing residents with
                the perfect balance between city life and tranquility.
                Lush green surroundings, landscaped gardens, and open spaces
                create a refreshing retreat from the city’s hustle while
                ensuring that essential amenities remain within easy reach.
              </p>

              <p>
                Gold Fields is more than just a residence, it is a vibrant
                community where luxury meets peace and modernity blends with
                nature. Featuring thoughtfully designed interiors, ample
                ventilation, and top-tier amenities, it offers a lifestyle
                that balances relaxation, recreation, and urban convenience.
                Experience a new standard of living at Gold Fields, where
                every home is a testament to fine craftsmanship and superior
                living.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="h-[320px] overflow-hidden rounded-2xl sm:h-[450px] lg:h-[620px]">
            <img
              src={GoldFieldsImage}
              alt="Gold Fields Residential Project"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14">
        <div className="h-px w-full bg-gray-300"></div>
      </div>

      {/* ================= LIFESTYLE SECTION ================= */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1450px]">

          <div className="mb-9 text-center sm:mb-12">
            <h2 className="text-2xl font-bold text-[#FBBD23] sm:text-3xl lg:text-4xl">
              Everything in place for an enviable lifestyle
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#FBBD23]"></div>
          </div>

          {/* Lifestyle Image */}
          <div className="h-[280px] w-full overflow-hidden rounded-xl sm:h-[420px] lg:h-[600px]">
            <img
              src={LifestyleImage}
              alt="Everything in place for an enviable lifestyle"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>
      </section>
      {/* ================= LOCATION SECTION ================= */}
      <CMRGoldFieldsLocation />
      <CMRPhighlights />
      <CMRGallery />
    </>
  );
};

export default CMRGoldfieldsPage;
