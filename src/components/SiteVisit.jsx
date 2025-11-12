import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SiteVisit = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_oqpz6aa",     
        "template_wf39q4g",  
        formRef.current,
        "V51DwRUepCfuPwNBH"      
      )
      .then(
        () => {
          setStatus("✅ Your site visit request has been sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send your request. Please try again later.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e6f5f9] via-white to-[#b8e1ef] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-[#11689B] mb-2 text-center">
          🏡 Book a Site Visit
        </h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          Fill out the form below and our team will reach out to confirm your appointment.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Hidden field to identify where this form came from */}
          <input type="hidden" name="form_source" value="Site Visit Page" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#11689B] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="from_phone"
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#11689B] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Visit Date
            </label>
            <input
              type="date"
              name="visit_date"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#11689B] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (optional)
            </label>
            <textarea
              name="message"
              rows="3"
              placeholder="Any specific preferences?"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#11689B] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`w-full text-white font-semibold py-3 rounded-lg transition duration-300 ${
              sending
                ? "bg-[#11689B]/70 cursor-not-allowed"
                : "bg-[#11689B] hover:bg-[#0f5c89]"
            }`}
          >
            {sending ? "Sending..." : "Submit Request"}
          </button>
        </form>

        {/* Status message */}
        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default SiteVisit;
