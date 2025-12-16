import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services does MyBhumi offer?",
    answer:
      "MyBhumi offers complete real estate solutions: buying, selling, renting, and investing in properties.\nWe handle everything from verified listings to site visits and negotiations.\nOur app connects you with trusted agents in Hyderabad for seamless deals.\nGet free consultancy on market trends and legal checks.\nDownload the app for instant property alerts and ROI calculators!",
  },
  {
    question: "Who can benefit from MyBhumi?",
    answer:
      "First-time home buyers get step-by-step guidance and loan assistance.\nSellers reach 1000+ buyers quickly with premium marketing tools.\nInvestors use our ROI analyzer to find high-return plots in Hyderabad.\nBuilders promote new projects to verified agents and NRIs.\nFamilies looking for ready-to-move flats enjoy virtual tours and EMI calculators.",
  },
  {
    question: "How is transparency ensured?",
    answer:
      "Every property is verified on-site by our experts—no fake listings!\nWe provide original documents, RERA details, and encumbrance certificates.\nFair pricing based on real-time market data and government rates.\nTrack your deal progress live on the app with updates from agents.\nZero hidden charges—full cost breakdown before you commit.",
  },
  {
    question: "Do you help with loans & legal work?",
    answer:
      "Yes! We partner with SBI, HDFC, and ICICI for instant loan pre-approval.\nGet up to 90% funding with low-interest rates for Hyderabad properties.\nOur legal team handles registration, stamp duty, and title clearance.\nFree document verification to avoid disputes later.\nPost-purchase support includes mutation and possession handover.",
  },
  {
    question: "Why choose MyBhumi over others?",
    answer:
      "Tech-powered: Search 5000+ verified properties on our app in seconds.\n24/7 helpline with dedicated relationship managers for every client.\nNo brokerage fees for buyers—save lakhs on your dream home!\nLocal Hyderabad experts with 10+ years of market knowledge.\nJoin 1000+ happy families who found their perfect property hassle-free.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#11689B] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#11689B]/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start px-4 py-3 text-left focus:outline-none"
              >
                <span
                  className="font-semibold text-gray-800 leading-tight pr-6 
                  text-sm md:text-base lg:text-lg 
                  line-clamp-2"
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 md:w-6 md:h-6 text-[#11689B] flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 md:w-6 md:h-6 text-[#11689B] flex-shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600">
            Still have questions?{" "}
            <a
              href="https://wa.me/916304445766?text=Hi%20Bhumi%20Realestate!%20I%20have%20a%20question%20about%20your%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#11689B] font-bold underline hover:text-[#0E5783]"
            >
              Chat us now!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
