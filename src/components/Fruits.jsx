import React from "react";
import mango from "../assets/images/mango.png"
import orange from "../assets/images/orange.png"
import Custardapple from "../assets/images/custard apple.jpg"
import Guava from "../assets/images/guava.jpg"
import Lemon from "../assets/images/lemon.jpg"
import coconut from "../assets/images/coconut.jpg"
import jackfruit from "../assets/images/jackfruit.jpg"
import pomogranate from "../assets/images/pomogranate.jpg"

const fruits = [
    {
        name: "Mango",
        benefit: "King of fruits – packed with Vitamin A, C & antioxidants for glowing skin & immunity",
        img: mango,
    },
    {
        name: "Orange",
        benefit: "Bursting with Vitamin C – strengthens immunity & promotes radiant skin",
        img: orange,
    },
    {
        name: "Custard Apple",
        benefit: "Creamy superfood – rich in fiber, magnesium & Vitamin B6 for heart & brain health",
        img: Custardapple,
    },
    {
        name: "Guava",
        benefit: "Fiber powerhouse – 4x more Vitamin C than oranges, aids digestion & weight control",
        img: Guava,
    },
    {
        name: "Lemon",
        benefit: "Natural detoxifier – high in Vitamin C & citric acid, supports liver & skin clarity",
        img: Lemon,
    },
    {
        name: "Coconut",
        benefit: "Nature’s hydration – rich in electrolytes, MCT fats & supports energy & heart health",
        img: coconut,
    },
    {
        name: "Jackfruit",
        benefit: "Tropical giant – high in fiber, potassium & antioxidants, promotes gut health & energy",
        img: jackfruit,
    },
    {
        name: "Pomegranate",
        benefit: "Jewel of wellness – loaded with punicalagins & anthocyanins for heart & anti-aging",
        img: pomogranate,
    },
];


const FruitsGallery = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Fruit Plants from Our Site
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our site is nestled in fertile, tropical land, thoughtfully landscaped with 
                <span className="font-semibold text-green-700"> thriving fruit orchards</span>. 
                Residents enjoy the rare privilege of plucking fresh, organic mangoes, bananas, 
                jackfruit, and more — right from their backyard. Every harvest reflects our 
                commitment to sustainability, wellness, and a harmonious blend of luxury living 
                with nature’s bounty.
          </p>
        </div>

        {/* Fruits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fruits.map((fruit, index) => (
            <div
              key={index}
              className="relative h-90 preserve-3d group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* 3D Flip Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* FRONT: Image + Name */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={fruit.img}
                    alt={fruit.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{fruit.name}</h3>
                  </div>
                </div>

                {/* BACK: Benefit */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-600 to-emerald-700 p-6 flex flex-col justify-center items-center text-center text-white">
                  <h3 className="text-2xl font-bold mb-3">{fruit.name}</h3>
                  <p className="text-sm font-medium leading-tight">
                    {fruit.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind 3D Utilities (Add to your CSS or use @layer) */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default FruitsGallery;