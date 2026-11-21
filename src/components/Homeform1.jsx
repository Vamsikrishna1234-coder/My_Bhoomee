
import React, { useState } from "react";

export default function LeadEnquiry({
  image = "../src/assets/images/homepage bhoomatha.webp",
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Enquiry:", formData);
      }

      setSubmitted(true);
    } catch (error) {
      alert("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[650px] md:min-h-[720px] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Bhoomatha Township"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#053279]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-5 md:px-10 py-10">

        <div className="flex justify-end">

          {/* Enquiry Form */}
          <div className="lead-form w-full max-w-[580px] bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="bg-[#053279] px-7 py-7 md:px-9">

              <span className="inline-flex items-center gap-2 text-[#FBBD23] text-xs font-bold uppercase tracking-[2px]">
                <span className="w-7 h-[2px] bg-[#FBBD23]" />
                Let's Get Started
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
                Find Your Dream
                <span className="block text-[#FBBD23]">
                  Property
                </span>
              </h2>

              <p className="text-white/75 text-sm mt-3 leading-6">
                Share your details and our property experts
                will get in touch with you.
              </p>

            </div>

            {/* Form Body */}
            <div className="p-7 md:p-9">

              {submitted ? (
                <div className="py-10 text-center">

                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FBBD23] flex items-center justify-center text-[#053279] text-3xl">
                    ✓
                  </div>

                  <h3 className="text-2xl font-bold text-[#053279] mt-5">
                    Thank You!
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Your enquiry has been submitted successfully.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        property: "",
                      });
                    }}
                    className="mt-6 text-[#053279] font-semibold underline"
                  >
                    Submit another enquiry
                  </button>

                </div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#053279] mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none text-sm text-[#053279] focus:border-[#053279] focus:ring-2 focus:ring-[#053279]/10 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#053279] mb-2">
                      Mobile Number *
                    </label>

                    <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:border-[#053279] focus-within:ring-2 focus-within:ring-[#053279]/10">

                      <span className="px-4 py-3 bg-gray-50 text-[#053279] text-sm border-r border-gray-200">
                        +91
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                          setFormData({
                            ...formData,
                            phone: value,
                          });
                        }}
                        placeholder="Enter mobile number"
                        required
                        maxLength={10}
                        className="w-full px-4 py-3 outline-none text-sm text-[#053279]"
                      />

                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#053279] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none text-sm text-[#053279] focus:border-[#053279] focus:ring-2 focus:ring-[#053279]/10 transition-all"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-semibold text-[#053279] mb-2">
                      Interested Property *
                    </label>

                    <select
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none text-sm text-[#053279] bg-white focus:border-[#053279] focus:ring-2 focus:ring-[#053279]/10 transition-all"
                    >
                      <option value="">Select Property Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Ventures">Ventures</option>
                      <option value="Townships">Townships</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-[#FBBD23] text-[#053279] font-bold py-4 rounded-lg hover:bg-[#053279] hover:text-white transition-all duration-300 shadow-md disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                    {!loading && <span className="text-xl">→</span>}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Your information is safe and secure with us.
                  </p>

                </form>
              )}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lead-form {
          animation: leadFormEnter 0.9s ease-out both;
        }

        @keyframes leadFormEnter {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lead-form {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
