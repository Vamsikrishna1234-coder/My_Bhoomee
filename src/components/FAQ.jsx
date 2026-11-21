
import React, { useState } from "react";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the key highlights of the project?",
    answer:
      "The project offers thoughtfully planned amenities like landscaped parks, wide roads, gated community security, and convenient proximity to key landmarks. Every development is designed to provide a comfortable lifestyle and a valuable investment opportunity.",
  },
  {
    question: "What types of properties are available?",
    answer:
      "Bhoomatha Group offers different property options based on project availability, including residential plots, apartments, villas, and premium residential developments to cater to different buyer requirements.",
  },
  {
    question: "What documents should I check before buying a property?",
    answer:
      "You should verify the legal approvals, land title documents, building permits (where applicable), property tax receipts, and RERA registration (where applicable). We also recommend consulting a qualified property lawyer before completing your purchase.",
  },
  {
    question: "Is Bhoomatha Group a good choice for property investment?",
    answer:
      "Bhoomatha Group focuses on strategically located developments, quality infrastructure, and thoughtfully planned projects. Buyers can evaluate the location, connectivity, legal approvals, project details, and future development potential before making an investment decision.",
  },
  {
    question: "How can I book a property or schedule a site visit?",
    answer:
      "You can contact the Bhoomatha Group sales team through our website, phone, or enquiry form. Our team can help you understand available properties, pricing, project details, and arrange a site visit based on your requirements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-[1450px]">

        {/* Heading */}
        <div className="mb-12 text-center">

          

          <h2 className="mt-5 text-3xl font-extrabold text-[#053279] sm:text-4xl lg:text-5xl">
            Frequently Asked
            <span className="text-[#FBBD23]"> Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Find answers to common questions about Bhoomatha Group,
            our projects, property options, and investment process.
          </p>

        </div>

        {/* FAQ Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">

          {/* Left Information */}
          <div className="rounded-2xl bg-[#053279] p-7 text-white sm:p-9">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FBBD23] text-[#053279]">
              <MessageCircle size={28} />
            </div>

            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
              Need More
              <span className="block text-[#FBBD23]">
                Information?
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/85">
              Have questions about our projects or looking for the right
              property? Our team is here to guide you through every step
              of your property journey.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FBBD23] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-white !no-underline sm:text-base"
            >
              Contact Our Team
              <span>→</span>
            </a>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-xs uppercase tracking-widest text-[#FBBD23]">
                Bhoomatha Group
              </p>
              <p className="mt-2 text-sm text-white/80">
                Building Trust. Creating Landmarks.
              </p>
            </div>

          </div>

          {/* Right FAQ Accordion */}
          <div className="space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#FBBD23] shadow-[0_8px_25px_rgba(5,50,121,0.08)]"
                      : "border-[#053279]/15"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >

                    <div className="flex items-center gap-4">

                      <span className="hidden text-sm font-bold text-[#FBBD23] sm:block">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-bold leading-6 text-[#053279] sm:text-base">
                        {faq.question}
                      </span>

                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FBBD23] text-[#053279]"
                          : "bg-[#053279] text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#053279]/10 px-5 pb-6 pt-4 sm:px-6 sm:pl-[4.25rem]">
                        <p className="text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
