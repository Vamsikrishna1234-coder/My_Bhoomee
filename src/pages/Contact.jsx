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
      const result = await emailjs.sendForm(
        "service_oqpz6aa",      // <-- replace
        "template_wf39q4g",     // <-- replace
        formRef.current,
        "V51DwRUepCfuPwNBH"       // <-- replace
      );
      console.log(result.text);
      setStatus({ ok: true, msg: "✅ Your message has been sent. We’ll get back to you soon!" });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, msg: "❌ Failed to send. Please try again in a moment." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#11689B] via-[#0e5680] to-[#083b56] py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center text-white mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Let's Connect</h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Whether you’re looking for property insights or want to discuss opportunities,
            we’re here to help you every step of the way.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Section - Info & Map */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white shadow-xl border border-white/20 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Reach Us At</h3>
              <ul className="space-y-5 text-gray-100">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-white text-xl mt-1" />
                  <p>
                    <strong>Office Address:</strong><br />
                    MyBhumi Real Estate<br />
                    Plot No. 25, Green Valley, Near IT Park,<br />
                    Hyderabad, Telangana – 500081
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-white text-xl" />
                  <a href="tel:+918123456789" className="text-white !no-underline">
                    +91 81234 56789
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-white text-xl" />
                  <a href="mailto:office@mybhumi.com" className="text-white !no-underline">
                    office@mybhumi.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaClock className="text-white text-xl" />
                  <p>Mon–Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="mt-8">
              <iframe
                title="MyBhumi Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.563094040912!2d78.3826!3d17.4385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bf8d4e6d8d%3A0x72f693c3e6ed1f7!2sHitech%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1687512345678"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl border-2 border-white/40"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-semibold text-[#11689B] mb-6">Send Us a Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Honeypot anti-spam (keep hidden & empty) */}
              <input type="text" name="honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#11689B]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#11689B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="from_phone"
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#11689B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#11689B]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 rounded-md font-semibold text-lg shadow-md transition-all duration-200 text-white
                  ${sending ? "bg-[#0f5c89]/70 cursor-not-allowed" : "bg-[#11689B] hover:bg-[#0f5c89]"}`}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status.msg && (
                <p className={`text-center mt-2 font-medium ${status.ok ? "text-green-600" : "text-red-600"}`}>
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
