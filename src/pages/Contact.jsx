import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ ok: false, msg: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ ok: false, msg: "" });

    try {
      await emailjs.sendForm(
        "service_oqpz6aa",
        "template_wf39q4g",
        formRef.current,
        "V51DwRUepCfuPwNBH"
      );
      setStatus({ ok: true, msg: "✅ Your message has been sent successfully!" });
      formRef.current.reset();
    } catch (err) {
      setStatus({ ok: false, msg: "❌ Failed to send message. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-white via-[#EFF7FF] to-[#D9EEFF]">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#11689B] mb-3">
            Let's Connect
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Whether you’re looking for property insights or want to discuss opportunities,
            we are here to assist you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-[#11689B]">Reach Us At</h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-[#11689B] text-xl mt-1" />
                <p>
                  <strong>Office Address</strong><br />
                  MyBhumi Real Estate<br />
                  Plot No. 25, Green Valley, Near IT Park,<br />
                  Hyderabad, Telangana – 500081
                </p>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#11689B] text-xl" />
                <a href="tel:+918123456789" className="hover:text-[#11689B]">
                  +91 81234 56789
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#11689B] text-xl" />
                <a href="mailto:office@mybhumi.com" className="hover:text-[#11689B]">
                  office@mybhumi.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-[#11689B] text-xl" />
                <p>Mon–Sat: 9AM – 6PM<br />Sunday: Closed</p>
              </li>
            </ul>

            {/* WORKING MAP */}
            <div className="mt-8">
              <iframe
                title="MyBhumi Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.543080798609!2d78.37724677509444!3d17.439497602315335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c95b07028d%3A0xba5a353a0d873d61!2sHITEC%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1706611846954!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                className="rounded-xl border border-[#11689B]/40 shadow-md"
              ></iframe>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-200">
            <h3 className="text-3xl font-semibold text-[#11689B] mb-6">Send Us a Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <input type="text" name="honeypot" style={{ display: "none" }} />

              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  name="from_name"
                  required
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#11689B]"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#11689B]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="from_phone"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#11689B]"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#11689B]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                disabled={sending}
                className={`w-full py-3 rounded-md text-white font-semibold transition ${
                  sending ? "bg-[#0f5c89]/60 cursor-not-allowed" : "bg-[#11689B] hover:bg-[#0f5c89]"
                }`}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status.msg && (
                <p className={`text-center font-medium ${status.ok ? "text-green-600" : "text-red-600"}`}>
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
