
import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Send } from "lucide-react";

const faqs = [
  {
    question: "What makes Bhoomatha projects unique?",
    answer:
      "Bhoomatha creates thoughtfully planned residential communities with premium amenities, beautiful landscapes, modern infrastructure and lifestyle experiences designed to offer a better way of living.",
  },
  {
    question: "Can I schedule a site visit to explore the project?",
    answer:
      "Yes! You can submit the enquiry form to schedule a site visit. Our team will contact you to coordinate a convenient date and time for your visit.",
  },
  {
    question: "What amenities and facilities are available?",
    answer:
      "Our communities feature landscaped gardens, recreational spaces, indoor games, children's play areas, private cinema, fitness facilities, yoga spaces and several lifestyle amenities.",
  },
  {
    question: "How can I get more information about the project?",
    answer:
      "You can submit the enquiry form with your contact details and select Project Information or Sales. Our team will get in touch with you and provide the information you need.",
  },
];

const ProjectExperience = ({
  image = "../src/assets/images/homepage bhoomatha.webp",
}) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    service: "Site Visit",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend/API here.
    console.log("Enquiry Details:", formData);

    setSubmitted(true);
  };

  return (
    <section className="w-full overflow-hidden bg-[#f5fbed]">

      {/* ================= JOURNEY SECTION ================= */}

      <div className="mx-auto max-w-[1800px] px-5 pb-12 pt-14 sm:px-8 lg:px-16 lg:pt-20">

        {/* Heading */}
        <div className="mb-10 flex items-center gap-3 sm:mb-12">
          <h2 className="shrink-0 text-2xl font-extrabold text-[#103e83] sm:text-3xl lg:text-[38px]">
            In a journey of wonder and discovery
          </h2>

          <div className="mt-2 h-[2px] flex-1 bg-[#103e83]/70" />
        </div>

        {/* Introduction */}
        <div className="mb-9 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="pl-0 sm:pl-5 lg:pl-16">

            <h3 className="mb-5 text-xl font-bold text-[#103e83] sm:text-2xl">
              One of Its Kind in India
            </h3>

            <ul className="space-y-4">
              {[
                "Meticulously Designed Miniatures",
                "Over 10 World Famous Monuments",
                "Surrounded by Manicured Gardens",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-sm text-gray-800 sm:text-base lg:text-lg"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 fill-[#103e83] text-white"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center space-y-4 text-sm leading-7 text-gray-800 sm:text-base sm:leading-8">
            <p>
              Plot owners can now experience the world at their doorstep.
              Never before something like this has been done anywhere
              in a residential layout project.
            </p>

            <p>
              At SVN Swapnolok we have created a magical wonderland for
              you, with replicas of world-famous attractions from every
              continent right here in Thatipudi.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="group relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[400px] lg:h-[770px]">
          <img
            src={image}
            alt="Bhoomatha Project Experience"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* ================= FAQ + ENQUIRY SECTION ================= */}

      <div className="mx-auto max-w-[1800px] px-5 pb-16 pt-10 sm:px-8 lg:px-16 lg:pb-24 lg:pt-16">

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* FAQ LEFT SIDE */}
          <div>

            <span className="mb-3 block text-medium font-bold uppercase tracking-[3px] text-[#FBBD23]">
              Frequently Asked Questions
            </span>

            <h2 className="mb-3 text-3xl font-extrabold text-[#153d7a] sm:text-4xl">
              Got Questions?
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Find answers to some of the most common questions about
              our projects, amenities and site visits.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? "border-[#FBBD23] bg-white shadow-md"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-medium font-bold text-[#FBBD23] sm:text-base">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-bold text-gray-800 sm:text-base">
                          {faq.question}
                        </span>
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#053279] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-gray-100 px-5 py-5 text-sm leading-7 text-gray-600 sm:px-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ENQUIRY FORM RIGHT SIDE */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-[0_10px_45px_rgba(0,0,0,0.07)] sm:p-8 lg:p-9">

            <div className="mb-7">
              <span className="mb-2 block text-medium font-bold uppercase tracking-[3px] text-[#053279]">
                Get In Touch
              </span>

              <h2 className="text-2xl font-extrabold text-[#153d7a] sm:text-3xl">
                Plan Your Visit
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Interested in exploring our project? Fill in your
                details and our team will get in touch with you.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl bg-[#f2f9eb] px-5 py-10 text-center">
                <CheckCircle2
                  size={45}
                  className="mx-auto mb-4 text-[#82bd40]"
                />

                <h3 className="text-xl font-bold text-[#153d7a]">
                  Thank You!
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Your enquiry has been captured in this demo.
                  Please connect the form to your backend to receive
                  actual enquiries.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-bold text-[#153d7a] underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              
                <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-[#fafafa] px-3 py-2.5 text-sm outline-none focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                    </div>

                    <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-[#fafafa] px-3 py-2.5 text-sm outline-none focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                    </div>
                </div>

                {/* Phone + Date */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Phone / WhatsApp *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        pattern="[0-9+\-\s()]{7,20}"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-[#fafafa] px-3 py-2.5 text-sm outline-none focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                    </div>

                    <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Date of Visit
                    </label>
                    <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        min={new Date().toLocaleDateString("en-CA")}
                        className="w-full min-w-0 rounded-lg border border-gray-200 bg-[#fafafa] px-3 py-2.5 text-sm outline-none focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                    </div>
                </div>

                {/* Service */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Select Service *
                    </label>
                    <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-[#fafafa] px-3 py-2.5 text-sm outline-none focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    >
                    <option value="Select Service">Select Service</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="Project Information">Project Information</option>
                    <option value="Sales">Sales</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Message
                    </label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-[#fafafa] px-3 py-2.5 text-sm outline-none focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FBBD23] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#053279] hover:shadow-lg"
                >
                    Submit Enquiry
                    <Send size={16} />
                </button>

                <p className="text-center text-xs text-gray-400">
                    Our team will contact you regarding your enquiry.
                </p>

                </form>

            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
