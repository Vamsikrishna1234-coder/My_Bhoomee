import React, { useEffect, useRef, useState } from "react";
import { Ruler, Building2, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import AOS from "aos";
import img1 from "../assets/images/glassvilla/glass villa2.jpg";
import img2 from "../assets/images/manduva/kerala manduva2.jpg";
import img3 from "../assets/images/wooden/wooden-villa1.jpg";

const highlights = [
  {
    id: 1,
    Icon: Ruler,
    number: "2167",
    unit: "SFT",
    title: "Spacious Living Areas",
    desc: "2 & 3 BHK villas from 1268 to 2167 sq.ft.",
    features: ["Open layouts", "Abundant sunlight", "Premium flooring"],
    img: img1,
    color: "bg-primary",
  },
  {
    id: 2,
    Icon: Building2,
    number: "4",
    unit: "TYPES",
    title: "Premium Luxury Villas",
    desc: "G+2 with stilt + 3 basements",
    features: ["Earthquake resistant", "Smart home ready", "Modern elevation"],
    img: img2,
    color: "bg-info",
  },
  {
    id: 3,
    Icon: Sparkles,
    number: "25+",
    unit: "AMENITIES",
    title: "World-Class Lifestyle",
    desc: "Clubhouse, pool, gym & more",
    features: ["Infinity pool", "Kids play area", "24x7 security"],
    img: img3,
    color: "bg-warning",
  },
];

/* ---------- Count-Up Component ---------- */
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const inc = end / (duration / 16);
          const timer = setInterval(() => {
            start += inc;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

/* ---------- Main Component ---------- */
const ProjectHighlightsGrid = () => {
  return (
    <section className="py-5 py-md-6 bg-light position-relative overflow-hidden">

      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="d-inline-block text-[#11689B] fw-bold text-uppercase tracking- tracking-widest fs-6 mb-2">
            Project Highlights
          </span>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Luxury Villas in Moinabad
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Premium 2 & 3 BHK Luxury Villas with world-class amenities
          </p>
        </div>

        <div className="row g-4 g-md-5 justify-content-center">
          {highlights.map((item, idx) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card h-100 shadow-lg rounded-4 overflow-hidden border-0 hover-shadow transition-all">
                <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={item.img}
                    className="card-img-top w-100 h-100 object-fit-cover transition-transform"
                    alt={item.title}
                    loading="lazy"
                  />
                  <div
                    className="position-absolute top-0 end-0 m-3 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <span className="fw-bold text-dark">{idx + 1}</span>
                  </div>
                </div>

                <div className="card-body p-4 p-md-5 d-flex flex-column">
                  <div className="d-flex align-items-end mb-3">
                    <h3 className={`display-5 fw-bold ${item.color.replace("bg-", "text-")}`}>
                      <CountUp end={parseInt(item.number.replace(/\D/g, ""), 10)} />
                    </h3>
                    <span className="fs-4 fw-semibold text-muted ms-1">{item.unit}</span>
                  </div>

                  <div
                    className={`d-inline-flex align-items-center justify-content-center rounded-3 ${item.color} text-white mb-3`}
                    style={{ width: "48px", height: "48px" }}
                  >
                    <item.Icon size={24} />
                  </div>

                  <h4 className="card-title fs-4 fw-bold text-dark mb-2">{item.title}</h4>
                  <p className="text-muted mb-4 flex-grow-1">{item.desc}</p>

                  <ul className="list-unstyled mb-4">
                    {item.features.map((f, i) => (
                      <li key={i} className="d-flex align-items-center text-secondary mb-2">
                        <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => (window.location.href = "/projects")}
                    className={`btn ${item.color} text-white d-flex align-items-center justify-content-center gap-2 mt-auto w-100 py-3 rounded-3 fw-semibold`}
                  >
                    View Details
                    <ArrowRight size={18} className="transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .card-img-top {
          transition: transform .6s ease;
        }
        .card:hover .card-img-top {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default ProjectHighlightsGrid;
