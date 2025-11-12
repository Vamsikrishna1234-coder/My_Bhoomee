import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 8000; // visible for ~8 seconds
    const intervalTime = 50;
    const incrementAmount = 100 / (totalDuration / intervalTime);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 400); // smooth fade-out delay
          return 100;
        }
        return Math.min(prev + incrementAmount, 100);
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden transition-opacity duration-700">
      {/* glowing background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#11689B] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo / loader symbol */}
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="#11689B"
              strokeWidth="2"
              className="opacity-30"
            />
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="#11689B"
              strokeWidth="3"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-draw"
            />
            <g
              className="origin-center animate-spin"
              style={{ animationDuration: "3s" }}
            >
              <polygon
                points="50,20 75,35 75,65 50,80 25,65 25,35"
                fill="none"
                stroke="cyan"
                strokeWidth="2"
                opacity="0.5"
              />
            </g>
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="#11689B"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Brand name */}
        <div className="flex items-center space-x-1 mb-6">
          {["M", "y", "b", "h", "u", "m", "i"].map((letter, i) => (
            <span
              key={i}
              className="text-3xl sm:text-4xl font-bold text-[#11689B] animate-fade-in"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Circular progress */}
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="6"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              fill="none"
              stroke="#11689B"
              strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              className="transition-all duration-100 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#11689B]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-400 tracking-wider animate-pulse">
          Preparing your experience...
        </p>
      </div>

      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-draw {
          animation: draw 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
