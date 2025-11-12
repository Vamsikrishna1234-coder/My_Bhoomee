'use client';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, MessageSquare, MapPin } from "lucide-react";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("greeting");
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // ✅ Open chatbot initially then auto-close after 3 seconds
  useEffect(() => {
    setIsOpen(true);
    setStep("greeting");

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleGreetingClick = () => {
    setStep("question");
  };

  const handleSubmit = () => {
    if (selectedOption === "enquiry") {
      navigate("/contact");
    } else if (selectedOption === "visit") {
      navigate("/sitevisit");
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#11689B] text-white p-4 rounded-full shadow-xl hover:bg-[#0e5782] transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat with us"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-6 opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ transformOrigin: "bottom right" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#11689B] to-[#11689B]/90 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
                alt="Krithika Sharma"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-lime-400 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <p className="font-semibold text-sm">Krithika Sharma</p>
              <p className="text-xs opacity-90">MyBhumi Advisor</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1 rounded-full"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 max-h-96 overflow-y-auto bg-gray-50 space-y-4">
          {step === "greeting" && (
            <div className="text-center">
              <button
                onClick={handleGreetingClick}
                className="bg-[#11689B]/10 hover:bg-[#11689B]/20 p-4 rounded-2xl transition-all duration-300 cursor-pointer w-full"
              >
                <p className="text-2xl font-bold text-[#11689B] mb-2">
                  Hi! <span className="inline-block animate-wave">👋</span>
                </p>
                <p className="text-sm text-gray-600">Click me to get started!</p>
              </button>
            </div>
          )}

          {step === "question" && (
            <div className="space-y-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                What would you like to do?
              </h3>

              <div className="flex flex-col gap-3">
                <label
                  className={`p-3 border rounded-xl cursor-pointer transition ${
                    selectedOption === "enquiry"
                      ? "bg-[#11689B]/10 border-[#11689B]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value="enquiry"
                    checked={selectedOption === "enquiry"}
                    onChange={() => setSelectedOption("enquiry")}
                    className="hidden"
                  />
                  <div className="flex items-center justify-center gap-2 text-[#11689B] font-medium">
                    <MessageSquare size={18} />
                    Enquiry Now
                  </div>
                </label>

                <label
                  className={`p-3 border rounded-xl cursor-pointer transition ${
                    selectedOption === "visit"
                      ? "bg-[#11689B]/10 border-[#11689B]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value="visit"
                    checked={selectedOption === "visit"}
                    onChange={() => setSelectedOption("visit")}
                    className="hidden"
                  />
                  <div className="flex items-center justify-center gap-2 text-[#11689B] font-medium">
                    <MapPin size={18} />
                    Book a Site Visit
                  </div>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className={`w-full mt-4 py-2 rounded-xl text-white font-semibold transition-all ${
                  selectedOption
                    ? "bg-[#11689B] hover:bg-[#0e5782]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-3 border-t text-center">
          <p className="text-xs text-gray-500">
            Response time:{" "}
            <span className="font-semibold text-[#11689B]">10 seconds</span>
          </p>
        </div>
      </div>

      {/* Wave Animation */}
      <style >{`
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-20deg);
          }
          75% {
            transform: rotate(20deg);
          }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 1s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default ChatAssistant;
