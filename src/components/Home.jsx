import { useState, useEffect } from "react";
import Countdown from "./Countdown";
import Alert from "./Alert";
import PopupModal from "../components/PopupModal";

const bootSteps = [
  "BOOTING UP OSDC.EXE",
  "BLASTING DAFT PUNK",
  "TOTALLY A MANDATORY STEP",
  "OPENING OSDHACK.EXE",
  "THIS MESSAGE REPLACED THE LAST ONE",
  "JUST KIDDING, STACKING AGAIN",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Default to true to ensure initial load
  const [bootIndex, setBootIndex] = useState(0);
  const [displayedSteps, setDisplayedSteps] = useState([]);
  const [blinkSymbol, setBlinkSymbol] = useState("underscore");
  const [showAlert, setShowAlert] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleDownloadPDF = (fileName, downloadName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const checkSession = () => {
      const hasVisited = sessionStorage.getItem("hasVisited");
      const visitTimestamp = sessionStorage.getItem("visitTimestamp");
      const currentTime = Date.now();
      const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds

      console.log("hasVisited:", hasVisited, "visitTimestamp:", visitTimestamp); // Debug log

      if (!hasVisited || !visitTimestamp || (currentTime - parseInt(visitTimestamp) > fifteenMinutes)) {
        // First visit, or session expired, or manually cleared
        console.log("Showing booting screen"); // Debug log
        setIsLoading(true);
        sessionStorage.setItem("hasVisited", "true");
        sessionStorage.setItem("visitTimestamp", currentTime.toString());
      } else {
        // Returning visitor within 15 minutes
        console.log("Skipping booting screen"); // Debug log
        setIsLoading(false);
      }
    };

    checkSession(); // Run immediately on mount

    // Set up a timeout to clear session after 15 minutes
    const fifteenMinutes = 15 * 60 * 1000;
    const timeout = setTimeout(() => {
      console.log("Clearing session storage after 15 minutes"); // Debug log
      sessionStorage.removeItem("hasVisited");
      sessionStorage.removeItem("visitTimestamp");
    }, fifteenMinutes);

    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures it runs only on mount

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      if (bootIndex < bootSteps.length) {
        const shouldReplace = Math.random() < 0.5;
        setDisplayedSteps((prev) =>
          shouldReplace ? [bootSteps[bootIndex]] : [...prev, bootSteps[bootIndex]]
        );
        setBlinkSymbol(Math.random() < 0.5 ? "underscore" : "dots");
        setBootIndex((prev) => prev + 1);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [bootIndex, isLoading]);

  useEffect(() => {
    if (bootIndex === bootSteps.length) {
      const doneTimer = setTimeout(() => {
        setIsLoading(false);
        setDisplayedSteps([]); // optional: clear boot steps
        setTimeout(() => setShowAlert(true), 3000); // show alert 3 seconds later
      }, 800);
      return () => clearTimeout(doneTimer);
    }
  }, [bootIndex]);

  const handleRegister = () => {
    window.location.href = "https://forms.gle/example";
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const iconStyle =
    "w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-auto object-contain cursor-pointer transition-transform hover:scale-105";
  const socialIconStyle =
    "w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 object-contain hover:scale-110 transition-transform";

  const icons = [
    {
      src: "register.png",
      alt: "register",
      text: "REGISTER",
      tint: "tint-[#f06292]",
      onClick: handleRegister,
    },
    {
      src: "calendar.png",
      alt: "calendar",
      text: "25th - 27th April",
      tint: "tint-[#ff6b6b]",
      modalHeading: "📅 Schedule",
      modalContent: "The hackathon will take place from 25th to 27th April at CL-2.",
    },
    {
      src: "location (1).png",
      alt: "location",
      text: "CL-2",
      tint: "tint-[#4ecdc4]",
      modalHeading: "📍 Location",
      modalContent: "The event will be hosted at CL-2 in our campus.",
    },
    {
      src: "rulebook.png",
      alt: "rulebook",
      text: "RULEBOOK",
      tint: "tint-[#45b7d1]",
      modalHeading: "📜 Rulebook",
      modalContent: "Make sure to go through all the rules and guidelines before participating.",
    },
    {
      src: "hourglass.png",
      alt: "timeline",
      text: "TIMELINE",
      tint: "tint-[#96c93d]",
      modalHeading: "⏳ Timeline",
      modalContent: "Day 1: Opening Ceremony, Day 2: Hacking Begins, Day 3: Judging & Prizes.",
    },
    {
      src: "theme.png",
      alt: "theme",
      text: "THEME",
      tint: "tint-[#00bcd4]",
      modalHeading: "🎨 Theme",
      modalContent: "Theme is Blast From the Past. Here you can give a creative touch to anything retro which was lost behind in time.!",
    },
    {
      src: "prize.png",
      alt: "prizes",
      text: "PRIZES",
      tint: "tint-[#ffc107]",
      modalHeading: "🏆 Prizes",
      modalContent: "1st: ₹20,000, 2nd: ₹15,000, 3rd: ₹10,000 + Special Tracks!",
    },
    {
      src: "download.png",
      alt: "download",
      text: "Download Assets",
      tint: "tint-[#ffa502]",
      onClick: () => {
        handleDownloadPDF("rulebook.pdf", "OSDHACK25_Rulebook.pdf");
        handleDownloadPDF("timeline.pdf", "OSDHACK25_Timeline.pdf");
      },
    },
    {
      src: "geek.png",
      alt: "speed typing",
      text: "SPEED TYPING",
      tint: "tint-[#ff6b6b]",
      modalHeading: "⌨️ Speed Typing",
      modalContent: "Show off your fast fingers in our typing challenge!",
    },
    {
      src: "flag.png",
      alt: "capture the flag",
      text: "CAPTURE THE FLAG",
      tint: "tint-[#4ecdc4]",
      modalHeading: "🚩 Capture the Flag",
      modalContent: "A mini-CTF to test your cybersecurity skills.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-12"
      style={{
        cursor: "url('/cursor.png') 16 16, auto",
        imageRendering: "pixelated",
        fontFamily: "dogica, mm, sans-serif",
      }}
    >
      <div className="fixed top-2 left-4 right-4 flex justify-between items-center z-40 pointer-events-none">
        <div className="flex space-x-2 pointer-events-auto">
          <img src="/insta.png" alt="Instagram" className={socialIconStyle} />
          <img src="/discord.png" alt="Discord" className={socialIconStyle} />
          <img src="/wp.png" alt="WhatsApp" className={socialIconStyle} />
        </div>
        <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white font-dogica pointer-events-auto">
          <Countdown />
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 font-mm text-[#00FF80] text-[8px] sm:text-[9px] md:text-[10px] p-4">
          <div className="flex flex-col items-start justify-start h-full w-full">
            {displayedSteps.map((step, index) => {
              const isLast = index === displayedSteps.length - 1;
              return (
                <div key={index} className="leading-tight mb-1">
                  {step}
                  {isLast && (
                    <span className="ml-1">
                      {blinkSymbol === "underscore" ? (
                        <span className="blink-underscore">_</span>
                      ) : (
                        <span className="blink-dots">...</span>
                      )}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <style jsx>{`
            .blink-underscore {
              animation: blinkUnderscore 1s steps(2, start) infinite;
            }
            .blink-dots {
              animation: blinkDots 1.2s ease-in-out infinite;
            }
            @keyframes blinkUnderscore {
              50% {
                opacity: 0;
              }
            }
            @keyframes blinkDots {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0.3;
              }
            }
          `}</style>
        </div>
      )}

      {!isLoading && showAlert && (
        <Alert onClose={handleCloseAlert} onRegister={handleRegister} />
      )}

      {!isLoading && (
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h3 className="mt-8 retro-subtitle font-mm uppercase text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            blast from the past
          </h3>
          <h1 className="text-stroke text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mm uppercase text-white">
            OSDHACK'25
          </h1>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 w-full max-w-5xl">
            {icons.map(({ src, alt, text, tint, onClick, modalHeading, modalContent }, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center">
                <img
                  src={src}
                  alt={alt}
                  className={`${iconStyle} ${tint}`}
                  onClick={
                    onClick
                      ? onClick
                      : modalHeading
                      ? () => setActiveModal({ heading: modalHeading, content: modalContent })
                      : undefined
                  }
                />
                <span
                  className={`font-dogica mt-2 text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] ${tint} text-center`}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {activeModal && (
            <PopupModal
              isOpen={true}
              onClose={() => setActiveModal(null)}
              heading={activeModal.heading}
            >
              <p className="font-dogica">{activeModal.content}</p>
            </PopupModal>
          )}
        </div>
      )}

      <style jsx>{`
        .glow {
          text-shadow: 0 0 2px #00ff80, 0 0 4px #00ff80, 0 0 6px #00ff80;
        }

        .tint-[#ff6b6b] {
          filter: sepia(1) hue-rotate(320deg) saturate(2);
        }
        .tint-[#4ecdc4] {
          filter: sepia(1) hue-rotate(160deg) saturate(2);
        }
        .tint-[#45b7d1] {
          filter: sepia(1) hue-rotate(180deg) saturate(2);
        }
        .tint-[#96c93d] {
          filter: sepia(1) hue-rotate(60deg) saturate(2);
        }
        .tint-[#ffa502] {
          filter: sepia(1) hue-rotate(20deg) saturate(2);
        }
        .tint-[#f06292] {
          filter: sepia(1) hue-rotate(300deg) saturate(2);
        }
        .tint-[#ffc107] {
          filter: sepia(1) hue-rotate(40deg) saturate(2);
        }
        .tint-[#00bcd4] {
          filter: sepia(1) hue-rotate(180deg) saturate(3);
        }
      `}</style>
    </div>
  );
}