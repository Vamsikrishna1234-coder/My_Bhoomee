import React, { useEffect, useState } from "react";
import img1 from "../assets/images/wooden/wooden-villa.jpg";
import img2 from "../assets/images/glassvilla/glass villa2.jpg";
import img3 from "../assets/images/bali/bali img2.jpeg";
import maskLogo from "../assets/images/logo mybhumee.png";

export default function AboutCircleSection() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F8F2E9] py-12 px-4 md:px-12">
      
      {/* MAIN SECTION HEADING */}
      <div className="text-center mb-5">
        <h3 className="text-2xl md:text-5xl font-bold !text-[#11689B] tracking-wide ">
          ABOUT US
        </h3>

        <h2 className="text-2xl md:text-2xl text-black-600 font-medium">
          Premium Villas in Moinabad with modern Creation 
        </h2>
      </div>

      <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* MASKED LOGO */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-[520px] h-[480px] md:h-[520px]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                WebkitMaskImage: `url(${maskLogo})`,
                maskImage: `url(${maskLogo})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                backgroundImage: `url(${images[current]})`,
              }}
            ></div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="pr-6">
          <h3 className="text-3xl md:text-4xl font-bold text-black-600 leading-snug mb-4">
            Experience Modern Living at Its Finest
          </h3>

          <p className="text-gray-600 text-sm md:text-xl leading-relaxed text-justify">
            MyBhoomee redefines luxury villa living with a harmonious blend 
            of contemporary design, lush landscapes, and world-class 
            construction standards. Nestled in the calm surroundings of 
            Moinabad, MyBhoomee offers effortless access to Hyderabad while 
            keeping you close to nature.
            Every villa is thoughtfully planned to maximise natural light, 
            cross ventilation, and privacy for your family. From spacious 
            interiors to serene outdoor spaces, each home provides the perfect 
            balance of comfort and elegance.
            With premium amenities and a secure gated environment, MyBhoomee 
            ensures a lifestyle that prioritises wellness, convenience, and 
            long-term value.
          </p>

          <div className="flex gap-6 mt-8">
            <button className="px-8 py-3 bg-[#11689B] text-white rounded-full text-lg shadow-md hover:scale-105 transition-all">
              Read More...
            </button>

            
          </div>
        </div>

      </div>
    </section>
  );
}
