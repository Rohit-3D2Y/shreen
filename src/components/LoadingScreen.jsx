import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minimumLoadingTime, setMinimumLoadingTime] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumLoadingTime(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) {
            return prev + Math.random() * 10;
          } else if (prev < 100 && videoLoaded && minimumLoadingTime) {
            return 100;
          }
          return prev;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, videoLoaded, minimumLoadingTime]);

  useEffect(() => {
    if (videoLoaded && minimumLoadingTime && progress >= 100) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [videoLoaded, minimumLoadingTime, progress, onLoadingComplete]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoLoaded(true);
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{
          duration: 0.8,
          ease: [0.645, 0.045, 0.355, 1.0],
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#f8f6f3] via-[#f5f2ef] to-[#f0ede8] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #a85f31 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, #a85f31, #ca6702, #d67c1a, #a85f31)`,
                padding: "3px",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f8f6f3] via-[#f5f2ef] to-[#f0ede8]" />
            </motion.div>

            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-white shadow-2xl overflow-hidden border-4 border-white/50">
              <video
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                className="w-full h-full object-cover"
                preload="auto"
                style={{
                  objectPosition: "center center",
                  transform: "scale(1.4)",
                }}
              >
                <source src="/shreen_loading.mp4" type="video/mp4" />
              </video>

              <div
                className="absolute inset-0 rounded-full shadow-inner pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px rgba(168, 95, 49, 0.1)",
                }}
              />
            </div>

            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-[#a85f31] rounded-full shadow-lg"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  },
                }}
                initial={{
                  x: Math.cos((index * 45 * Math.PI) / 180) * 200,
                  y: Math.sin((index * 45 * Math.PI) / 180) * 200,
                }}
              />
            ))}
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#a85f31] brico tracking-wide mb-3">
              Shreen Interiors
            </h1>
            <motion.p
              className="text-gray-600 text-lg"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Crafting Beautiful Spaces...
            </motion.p>
          </motion.div>

          <div className="flex justify-center items-center space-x-2 mb-8">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="w-2.5 h-2.5 bg-[#a85f31] rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="relative w-24 h-24"
          >
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
           
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="#a85f31"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  strokeDasharray: "283",
                  strokeDashoffset: 283 - (283 * progress) / 100,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-[#a85f31]">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-6 left-6 w-12 h-12 border-t-3 border-l-3 border-[#a85f31]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute top-6 right-6 w-12 h-12 border-t-3 border-r-3 border-[#a85f31]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-6 w-12 h-12 border-b-3 border-l-3 border-[#a85f31]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="absolute bottom-6 right-6 w-12 h-12 border-b-3 border-r-3 border-[#a85f31]"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
