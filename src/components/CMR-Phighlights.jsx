
import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Send,
  Navigation,
  Building2,
  Waves,
  Film,
  ShoppingCart,
  Route,
  Trees,
} from "lucide-react";

const projectHighlights = [
  {
    icon: Navigation,
    title: "Close to Vizag City",
    description: "Venture close to Vizag City and IT Zone.",
  },
  {
    icon: Waves,
    title: "Beach Road",
    description: "Close to the beautiful Beach Road.",
  },
  {
    icon: Film,
    title: "Film Industry",
    description: "Conveniently located close to the Film Industry.",
  },
  {
    icon: ShoppingCart,
    title: "Mega Mart & D-Mart",
    description: "Close to Mega Mart and D-Mart.",
  },
  {
    icon: Route,
    title: "NH-5",
    description: "Easy connectivity to NH-5.",
  },
  {
    icon: Building2,
    title: "IT Hills",
    description: "Close to the IT Hills.",
  },
  {
    icon: MapPin,
    title: "VUDA Mega Layouts",
    description: "Close to the mega layouts of VUDA, Kapuluppada.",
  },
  {
    icon: Trees,
    title: "Bheemili Tourism",
    description: "Close to the popular Bheemili Tourism destination.",
  },
];

const faqs = [
  {
    question: "Where is CMR Gold Fields located?",
    answer:
      "CMR Gold Fields is located close to Vizag City and the IT Zone, with convenient access to several important destinations.",
  },
  {
    question: "What are the nearby landmarks?",
    answer:
      "The project is close to Beach Road, Film Industry, Mega Mart, D-Mart, NH-5, IT Hills, VUDA Mega Layouts at Kapuluppada and Bheemili Tourism.",
  },
  {
    question: "Is the project well connected to major areas?",
    answer:
      "Yes. The project highlights its proximity to NH-5, Vizag City, IT Hills and other important surrounding locations.",
  },
  {
    question: "Is CMR Gold Fields close to shopping destinations?",
    answer:
      "Yes. Mega Mart and D-Mart are among the nearby destinations highlighted for this project.",
  },
  {
    question: "How can I arrange a site visit?",
    answer:
      "Fill in the enquiry form with your contact details and preferred visit date. Our team can get in touch with you regarding your enquiry.",
  },
];

const CMRGoldFieldsHighlights = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "Site Visit",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend/API here
    console.log("Enquiry Details:", formData);
    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      service: "Site Visit",
      message: "",
    });
  };

  return (
    <section className="w-full bg-white">

      {/* PROJECT HIGHLIGHTS */}
      <div className="bg-[#f8fff5] px-5 py-16 sm:px-8 md:py-20 lg:px-14">
        <div className="mx-auto max-w-[1450px]">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#82bd40]">
              CMR Gold Fields
            </p>

            <h2 className="text-3xl font-bold text-[#07377f] sm:text-4xl lg:text-5xl">
              Project Highlights
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#82bd40]" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Enjoy excellent connectivity to major destinations,
              lifestyle conveniences and key developments around Vizag.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {projectHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#82bd40] hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef7e5] text-[#82bd40] transition-colors duration-300 group-hover:bg-[#82bd40] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#07377f]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* FAQ AND ENQUIRY */}
      <div className="px-5 py-16 sm:px-8 md:py-20 lg:px-14">
        <div className="mx-auto max-w-[1450px]">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#82bd40]">
              We're Here to Help
            </p>

            <h2 className="text-3xl font-bold text-[#07377f] sm:text-4xl">
              Have Questions About CMR Gold Fields?
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#82bd40]" />
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

            {/* LEFT - FAQ */}
            <div>
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-[#07377f] sm:text-3xl">
                  Frequently Asked Questions
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Find answers to common questions about CMR Gold Fields
                  and its location advantages.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                      activeFaq === index
                        ? "border-[#82bd40] bg-[#f8fff5] shadow-sm"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? -1 : index)
                      }
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-sm font-semibold leading-6 text-[#07377f] sm:text-base">
                        {faq.question}
                      </span>

                      {activeFaq === index ? (
                        <ChevronUp
                          size={21}
                          className="shrink-0 text-[#82bd40]"
                        />
                      ) : (
                        <ChevronDown
                          size={21}
                          className="shrink-0 text-gray-500"
                        />
                      )}
                    </button>

                    {activeFaq === index && (
                      <div className="px-5 pb-5">
                        <div className="h-px w-full bg-[#dce9d0]" />

                        <p className="pt-4 text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - ENQUIRY FORM */}
            <div className="rounded-2xl border border-gray-100 bg-[#f8fff5] p-6 shadow-md sm:p-8 lg:p-9">

              <div className="mb-7">
                <h3 className="text-2xl font-bold text-[#07377f] sm:text-3xl">
                  Get in Touch
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Interested in CMR Gold Fields? Share your details
                  and our team will contact you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME AND EMAIL */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                  </div>

                </div>

                {/* PHONE AND DATE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone / WhatsApp *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      pattern="[0-9+ ]{10,15}"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Date of Visit
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                    />
                  </div>

                </div>

                {/* SERVICE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    I'm Interested In
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                  >
                    <option value="Site Visit">Site Visit</option>
                    <option value="Project Information">Project Information</option>
                    <option value="Pricing Details">Pricing Details</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#82bd40] focus:ring-2 focus:ring-[#82bd40]/20"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#07377f] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#82bd40]"
                >
                  Submit Enquiry
                  <Send size={18} />
                </button>

                <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                  <CheckCircle2 size={15} className="text-[#82bd40]" />
                  Your information will be used to respond to your enquiry.
                </p>

              </form>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default CMRGoldFieldsHighlights;
