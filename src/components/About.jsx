import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import homeanimation from '../assets/videos/home animation.mp4';

export default function AboutSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'back.out(1.7)' }
        );
      }

      if (videoRef.current) {
        gsap.to(videoRef.current, {
          y: -25,
          duration: 2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      const textElements = contentRefs.current.filter(el => el);
      gsap.fromTo(
        textElements,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }, 100);

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf([videoRef.current, containerRef.current, ...contentRefs.current]);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f0f7] via-white to-[#d1e4f0] py-16 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div ref={addToRefs} className="inline-block">
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(to right, #11689B, #0e5a87)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                About Us
              </h2>
              <div 
                className="h-1 w-32 rounded-full"
                style={{ background: 'linear-gradient(to right, #11689B, #0e5a87)' }}
              />
            </div>
            
            {/* JUSTIFIED TEXT - NO GAPS */}
            <div ref={addToRefs} className="space-y-4 text-gray-700 text-base sm:text-lg leading-snug sm:leading-relaxed">
              <p className="text-justify hyphens-auto break-words">
                Welcome to <span className="font-semibold" style={{ color: '#11689B' }}>MyBhumi</span>, your trusted partner in the real estate journey. We are dedicated to transforming the way people buy, sell, and invest in properties across the nation.
              </p>
              
              <p className="text-justify hyphens-auto break-words">
                With years of expertise and a deep understanding of the market, we provide comprehensive solutions tailored to your unique needs. Our team of seasoned professionals is committed to delivering excellence in every transaction.
              </p>
              
              <p className="text-justify hyphens-auto break-words">
                At MyBhumi, we believe that finding the perfect property should be an exciting and seamless experience. We leverage cutting-edge technology and local market insights to connect you with opportunities that align with your dreams and aspirations.
              </p>
            </div>
            
            <div ref={addToRefs} className="flex gap-4 pt-4">
              <button 
                onClick={() => navigate('/aboutus')}
                className="px-6 sm:px-8 py-3 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #11689B, #0e5a87)' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Video */}
          <div ref={containerRef} className="relative flex justify-center items-center mt-8 md:mt-0">
            <div
              ref={videoRef}
              className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-[400px] sm:h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl scale-105 md:scale-110 lg:scale-125 transition-transform duration-500"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={homeanimation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}