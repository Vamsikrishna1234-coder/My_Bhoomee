'use client';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, MessageSquare, MapPin } from "lucide-react";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("greeting");
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(true);
    setStep("greeting");
    const timer = setTimeout(() => setIsOpen(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (selectedOption === "enquiry") navigate("/contact");
    if (selectedOption === "visit") navigate("/sitevisit");
    setIsOpen(false);
  };

  const getIconSize = () => {
    const w = window.innerWidth;
    if (w < 380) return 18;
    if (w < 768) return 22;
    return 28;
  };

  return (
    <div className="fixed bottom-15 right-5 z-50">

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#11689B] text-white p-3 sm:p-4 md:p-5 rounded-full shadow-xl hover:bg-[#0e5782] hover:scale-110 transition flex items-center justify-center"
      >
        <MessageCircle size={getIconSize()} />
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed md:absolute
          bottom-24 md:bottom-20
          left-1/2 md:left-auto
          right-auto md:right-0
          -translate-x-1/2 md:translate-x-0
          w-[92vw] sm:w-[86vw] md:w-80 lg:w-96
          max-w-[380px]
          bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden
          transition-all duration-300 ease-out
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
        style={{ transformOrigin: "bottom right" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#11689B] to-[#11689B]/90 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
                alt="Advisor"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-lime-400 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <p className="font-semibold text-sm leading-none">Krithika Sharma</p>
              <p className="text-[10px] opacity-90">MyBhumi Advisor</p>
            </div>
          </div>

          <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 max-h-96 overflow-y-auto bg-gray-50 space-y-4">
          {step === "greeting" && (
            <div className="text-center">
              <button
                onClick={() => setStep("question")}
                className="bg-[#11689B]/10 hover:bg-[#11689B]/20 p-4 rounded-2xl w-full transition"
              >
                <p className="text-2xl font-bold text-[#11689B] mb-1">
                  Hi! <span className="inline-block animate-wave">👋</span>
                </p>
                <p className="text-xs text-gray-600">Tap to continue</p>
              </button>
            </div>
          )}

          {step === "question" && (
            <div className="space-y-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">What would you like to do?</h3>
              
              <div className="flex flex-col gap-3">
                <label className={`p-3 border rounded-xl cursor-pointer ${
                  selectedOption === "enquiry" ? "bg-[#11689B]/10 border-[#11689B]" : "hover:bg-gray-100"
                }`}>
                  <input type="radio" hidden onChange={() => setSelectedOption("enquiry")} />
                  <div className="flex items-center justify-center gap-2 text-[#11689B] font-medium text-sm">
                    <MessageSquare size={16} /> Enquiry Now
                  </div>
                </label>

                <label className={`p-3 border rounded-xl cursor-pointer ${
                  selectedOption === "visit" ? "bg-[#11689B]/10 border-[#11689B]" : "hover:bg-gray-100"
                }`}>
                  <input type="radio" hidden onChange={() => setSelectedOption("visit")} />
                  <div className="flex items-center justify-center gap-2 text-[#11689B] font-medium text-sm">
                    <MapPin size={16} /> Book Site Visit
                  </div>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className={`w-full py-2 rounded-xl text-white font-semibold ${
                  selectedOption ? "bg-[#11689B] hover:bg-[#0e5782]" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-2 border-t text-center">
          <p className="text-[10px] text-gray-500">
            Response time: <span className="font-semibold text-[#11689B]">10 seconds</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%,100% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          75% { transform: rotate(20deg); }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default ChatAssistant;
