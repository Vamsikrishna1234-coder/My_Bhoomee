import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const address =
    "D.No.48-14-85 & 86, 3rd & 4th Floors, Rama Talkies Junction, Opp. Subham Prema Hospital, Visakhapatnam - 530 013.";

  const mapAddress =
    "Bhoomatha Group, D.No.48-14-85 & 86, 3rd & 4th Floors, Rama Talkies Junction, Opp. Subham Prema Hospital, Visakhapatnam, Andhra Pradesh 530013";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const subject = encodeURIComponent(
      `Website Enquiry - ${formData.service}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date of Visit: ${formData.visitDate || "Not specified"}
Service: ${formData.service}`
    );

    window.location.href =
      `mailto:khadarbhoomatha@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Our Office",
      detail: address,
      link: "https://www.google.com/maps/search/?api=1&query=Bhoomatha+Group+Rama+Talkies+Junction+Visakhapatnam",
      linkText: "Get Directions",
    },
    {
      icon: Phone,
      title: "Phone Number",
      detail: "+91 94419 30929 - Shaik Khadar",
      secondDetail: "+91 9949922225",
      link: "tel:+919441930929",
      linkText: "Call Us",
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "khadarbhoomatha@gmail.com",
      link: "mailto:khadarbhoomatha@gmail.com",
      linkText: "Send Email",
    },
  ];

  const inputClass =
    "w-full rounded-md border border-[#053279]/20 bg-white px-5 py-4 text-sm text-[#053279] outline-none transition-all placeholder:text-gray-500 focus:border-[#FBBD23] focus:ring-1 focus:ring-[#FBBD23]";

  return (
    <section className="w-full bg-[#f7fff2] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px]  text-[#053279] ">
            Get In Touch
          </span>

          <h2 className="mt-3 text-3xl text-center font-bold text-[#053279] sm:text-4xl lg:text-[42px]">
            Contact Us
            <span className="text-[#FBBD23]">.</span>
          </h2>

          
        </div>

        {/* CONTACT INFORMATION CARDS */}
        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group flex h-full flex-col rounded-xl border border-[#053279]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FBBD23] hover:shadow-lg sm:p-7"
              >

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#053279] text-[#FBBD23] transition-colors duration-300 group-hover:bg-[#FBBD23] group-hover:text-[#053279]">
                    <Icon size={26} />
                  </div>

                  <span className="text-3xl font-bold text-[#053279]/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#053279]">
                  {card.title}
                </h3>

                <p className="break-words text-sm leading-7 text-gray-600">
                  {card.detail}
                </p>

                {card.secondDetail && (
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    {card.secondDetail}
                  </p>
                )}

                <a
                  href={card.link}
                  target={index === 0 ? "_blank" : undefined}
                  rel={index === 0 ? "noreferrer" : undefined}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-bold text-[#053279] transition-colors hover:text-[#b98200]"
                >
                  {card.linkText}
                  <ArrowUpRight size={17} />
                </a>

                <div className="mt-5 h-[3px] w-12 rounded-full bg-[#FBBD23] transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* CONTACT FORM + MAP BIG BOX */}
        <div className="overflow-hidden rounded-2xl border border-[#053279]/10 bg-white shadow-[0_10px_40px_rgba(5,50,121,0.07)]">

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT - ENQUIRY FORM */}
            <div className="p-6 sm:p-9 lg:p-11">

              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#b98200]">
                  Send An Enquiry
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#053279] sm:text-3xl">
                  Let's Connect With Us
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Fill in your details and our team will get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone/WhatsApp Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      min={new Date().toLocaleDateString("en-CA")}
                      className={inputClass}
                      aria-label="Date of Visit"
                    />
                  </div>

                </div>

                {/* Service */}
                <div className="relative mt-5">

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">Select Service</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="Project Info">Project Info</option>
                    <option value="Sales">Sales</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#053279]"
                  />

                  {errors.service && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.service}
                    </p>
                  )}

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#053279] px-9 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#FBBD23] hover:text-[#053279]"
                >
                  Submit Enquiry
                  <Send size={17} />
                </button>

              </form>

            </div>

            {/* RIGHT - GOOGLE MAP */}
            <div className="relative min-h-[350px] bg-gray-100 lg:min-h-full">

              <iframe
                title="Bhoomatha Group Office Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                  minHeight: "350px",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;

