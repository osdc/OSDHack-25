import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Home() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [showRulebook, setShowRulebook] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownloadPDF = (fileName, downloadName) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const loadingVariants = {
    animate: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const iconStyle = "w-20 h-20 object-contain cursor-pointer transition-transform hover:scale-105";

  const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

  return (
    <div
      className="min-h-screen bg-[#121212] text-white px-4 py-12"
      style={{
        cursor: "url('/cursor.png'), auto",
        imageRendering: "pixelated",
      }}
    >
      {isLoading && (
        <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50">
          <motion.h2
            className="text-2xl md:text-3xl font-pixelify text-white tracking-wide"
            variants={loadingVariants}
            animate="animate"
          >
            Booting up OSDC.exe
          </motion.h2>
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-col items-center justify-items-start">
          <h1 className="text-6xl md:text-7xl font-bold font-ps2p uppercase tracking-widest text-white">
            OSDHACK'25
          </h1>

          <h2 className="mt-6 text-xl md:text-3xl font-pixelify tracking-wide text-white">
            THEME
          </h2>
          <h2 className="mt-1 text-5xl md:text-6xl font-pixelify tracking-wide text-white flex items-center gap-3">
            BLAST FROM THE PAST
          </h2>

          <div className="mt-8">
            <Countdown />
          </div>

          {/* Main Icons */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="w-48 h-48 flex flex-col items-center justify-center">
              <img src="calander.png" alt="calendar" className={`${iconStyle} tint-[#ff6b6b]`} />
              <span className="font-pixelify mt-3 text-base text-[#ff6b6b]">26th - 27th April</span>
            </div>

            <div className="w-48 h-48 flex flex-col items-center justify-center">
              <img src="location.png" alt="location" className={`${iconStyle} tint-[#4ecdc4]`} />
              <span className="font-pixelify mt-3 text-base text-[#4ecdc4]">CL-2</span>
            </div>

            <div 
              onClick={() => setShowRulebook(true)}
              className="w-48 h-48 flex flex-col items-center justify-center"
            >
              <img src="rules.png" alt="rulebook" className={`${iconStyle} tint-[#45b7d1]`} />
              <span className="font-pixelify mt-3 text-base text-[#45b7d1]">Rulebook</span>
            </div>

            <div
              onClick={() => setShowTimeline(true)}
              className="w-48 h-48 flex flex-col items-center justify-center"
            >
              <img src="clock.png" alt="timeline" className={`${iconStyle} tint-[#96c93d]`} />
              <span className="font-pixelify mt-3 text-base text-[#96c93d]">Timeline</span>
            </div>

            <div className="w-48 h-48 flex flex-col items-center justify-center">
              <img 
                src="download.png" 
                alt="download" 
                className={`${iconStyle} tint-[#ffa502]`}
                onClick={() => {
                  handleDownloadPDF('rulebook.pdf', 'OSDHACK25_Rulebook.pdf');
                  handleDownloadPDF('timeline.pdf', 'OSDHACK25_Timeline.pdf');
                }}
              />
              <span className="font-pixelify mt-3 text-base text-[#ffa502]">Download Assets</span>
            </div>
          </div>

          {/* Mini Events - Centered */}
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div className="w-48 h-48 flex flex-col items-center justify-center">
                <img src="keyboard.png" alt="speed typing" className={`${iconStyle} tint-[#ff6b6b]`} />
                <span className="font-pixelify mt-3 text-base text-[#ff6b6b]">Speed Typing</span>
              </div>

              <div className="w-48 h-48 flex flex-col items-center justify-center">
                <img src="flag.png" alt="capture the flag" className={`${iconStyle} tint-[#4ecdc4]`} />
                <span className="font-pixelify mt-3 text-base text-[#4ecdc4]">Capture the Flag</span>
              </div>
            </div>
          </div>

          {/* Timeline Modal */}
          {showTimeline && (
            <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center">
              <div className="bg-[#1e1e1e] border-4 border-white p-6 rounded-lg w-11/12 md:w-4/5 lg:w-3/5 max-h-[90vh] overflow-y-auto shadow-2xl relative font-pixelify">
                <button
                  className="absolute top-2 right-4 text-white text-xl font-bold hover:text-red-400"
                  onClick={() => setShowTimeline(false)}
                >
                  X
                </button>
                <h3 className="text-2xl text-center mb-4 text-white">📆 Timeline</h3>
                <p className="text-white text-base">{loremIpsum}</p>
              </div>
            </div>
          )}

          {/* Rulebook Modal */}
          {showRulebook && (
            <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center">
              <div className="bg-[#1e1e1e] border-4 border-white p-6 rounded-lg w-11/12 md:w-4/5 lg:w-3/5 max-h-[90vh] overflow-y-auto shadow-2xl relative font-pixelify">
                <button
                  className="absolute top-2 right-4 text-white text-xl font-bold hover:text-red-400"
                  onClick={() => setShowRulebook(false)}
                >
                  X
                </button>
                <h3 className="text-2xl text-center mb-4 text-white">📜 Rulebook</h3>
                <p className="text-white text-base">{loremIpsum}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CSS for tint effect */}
      <style jsx>{`
        .tint-[#ff6b6b] { filter: sepia(1) hue-rotate(320deg) saturate(2); }
        .tint-[#4ecdc4] { filter: sepia(1) hue-rotate(160deg) saturate(2); }
        .tint-[#45b7d1] { filter: sepia(1) hue-rotate(180deg) saturate(2); }
        .tint-[#96c93d] { filter: sepia(1) hue-rotate(60deg) saturate(2); }
        .tint-[#ffa502] { filter: sepia(1) hue-rotate(20deg) saturate(2); }
      `}</style>
    </div>
  );
}