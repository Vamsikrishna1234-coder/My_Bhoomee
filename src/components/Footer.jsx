
import React from "react";
import {
  Phone,
  CalendarDays,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    ["Home", "#home"],
    ["About", "#Aboutus"],
    ["Projects", "#projects"],
    ["Gallery", "#gallery"],
    ["Contact Us", "#contact"],
  ];

  const moreLinks = [
    ["Blog", "#blog"],
    ["Privacy Policy", "#privacy-policy"],
    ["Projects", "#projects"],
    ["Careers", "#careers"],
    ["Contact Us", "#contact"],
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Youtube, url: "#", label: "YouTube" },
  ];

  return (
    <footer className="w-full font-sans">

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2876C5] via-[#A17C70] to-[#F26B0B] px-5 py-16 text-center text-white md:py-20">

        <div className="mx-auto max-w-3xl">

          <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Ready to Find Your Dream
            <br className="hidden sm:block" /> Property?
          </h2>

          <p className="mx-auto mb-7 max-w-2xl text-base font-semibold leading-7 text-white/90 md:text-lg">
            Connect with our expert team today and take the first step
            towards your ideal home or investment opportunity.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+917799753333"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#053279] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#03245A] hover:shadow-lg"
            >
              <Phone size={19} />
              Get in Touch
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FBBD23] px-7 py-3 text-sm font-bold text-black transition hover:bg-yellow-400 hover:shadow-lg"
            >
              <CalendarDays size={19} />
              Schedule Consultation
            </a>

          </div>

          {/* STATS */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">

            <div>
              <h3 className="text-3xl font-extrabold">
                &lt; 2 Hours
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/80">
                RESPONSE TIME
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold">
                98%
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/80">
                CUSTOMER SATISFACTION
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold">
                150+
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/80">
                PROPERTIES AVAILABLE
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="bg-[#053279] px-5 py-14 text-white md:px-10 lg:px-16">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* COMPANY INFO */}
          <div>

            {/* Replace with your actual logo path */}
            <a href="/" className="mb-6 inline-block">
              <img
                src="src/assets/images/bhoomatha logoH.png"
                alt="Bhoomatha Group"
                className="h-auto w-[250px] max-w-full bg-white object-contain p-2"
              />
            </a>

            <p className="max-w-md text-[15px] leading-[27px] text-blue-100">
              BHOOMATHA delivers rich-class building construction
              services. We are pioneers in the infrastructure
              industry. Continuing our legacy of innovation, we
              achieve new milestones with every endeavour.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#FBBD23] hover:text-[#053279] hover:-translate-y-1"
                >
                  <Icon size={19} strokeWidth={2.3} />
                </a>
              ))}
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="mb-3 text-lg font-bold">
              Quick Links
            </h3>

            <div className="mb-7 h-[2px] w-9 bg-[#FBBD23]" />

            <div className="grid grid-cols-2 gap-5">

              <ul className="space-y-3">
                {quickLinks.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      className="text-[15px] text-white transition hover:pl-1 hover:text-[#FDC700] !no-underline"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {moreLinks.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      className="text-[15px] text-white transition hover:pl-1 hover:text-[#FDC700] !no-underline"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* CONTACT INFO */}
          <div>

            <h3 className="mb-3 text-lg font-bold">
              Contact Us
            </h3>

            <div className="mb-7 h-[2px] w-9 bg-[#FBBD23]" />

            <div className="space-y-6">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#FBBD23]"
                />
                <p className="text-[15px] leading-[24px] text-blue-100">
                  D.No.48-14-85 & 86, 3rd & 4th Floors,
                  Rama Talkies Junction, Opp. Subham
                  Prema Hospital, Visakhapatnam - 530 013.
                </p>
              </div>

              <a
                href="tel:+917799753333"
                className="flex items-center gap-3 text-[15px] text-white transition hover:text-[#FBBD23] !no-underline"
              >
                <Phone size={19} className="shrink-0 text-[#FBBD23]" />
                +91 94419 30929
              </a>

              <a
                href="mailto:bhoomatha@gmail.com"
                className="flex items-center gap-3 text-[15px] text-white transition hover:text-[#FBBD23] !no-underline"
              >
                <Mail size={19} className="shrink-0 text-[#FBBD23]" />
                bhoomatha@gmail.com
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* COPYRIGHT */}
      <section className="border-t border-white/10 bg-[#053279] px-5 py-5">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-blue-200 sm:flex-row sm:text-left">

          <p>
            © 2026 Bhoomatha Real Estates and Developers Pvt. Ltd.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Developed by
            
            <span className="text-[9px] font-bold uppercase leading-tight">
              Bhoomatha Group
            </span>
          </p>

        </div>
      </section>

    </footer>
  );
};

export default Footer;
