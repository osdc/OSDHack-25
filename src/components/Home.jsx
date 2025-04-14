import { useState, useEffect, useRef } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [bootIndex, setBootIndex] = useState(0);
  const [displayedSteps, setDisplayedSteps] = useState([]);
  const [blinkSymbol, setBlinkSymbol] = useState("underscore");
  const [showAlert, setShowAlert] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/click.mp3");
  }, []);

  const playClick = () => {
    const click = new Audio("/click.mp3");
    click.play();
  };


  const handleDownloadPDF = (fileName, downloadName) => {
    playClick();
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
      const fifteenMinutes = 15 * 60 * 1000;

      if (!hasVisited || !visitTimestamp || currentTime - parseInt(visitTimestamp) > fifteenMinutes) {
        setIsLoading(true);
        sessionStorage.setItem("hasVisited", "true");
        sessionStorage.setItem("visitTimestamp", currentTime.toString());
      } else {
        setIsLoading(false);
      }
    };

    checkSession();

    const timeout = setTimeout(() => {
      sessionStorage.removeItem("hasVisited");
      sessionStorage.removeItem("visitTimestamp");
    }, 15 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, []);

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
        setDisplayedSteps([]);
        setTimeout(() => setShowAlert(true), 3000);
      }, 800);
      return () => clearTimeout(doneTimer);
    }
  }, [bootIndex]);

  const handleRegister = () => {
    playClick();
    window.location.href = "https://forms.gle/example";
  };

  const handleCloseAlert = () => {
    playClick();
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
      text: "DATES",
      tint: "tint-[#ff6b6b]",
      modalHeading: "DATES",
      modalContent: `April 25 (5:00 PM - 7:00 PM)\nApril 26 (1:00 PM - 6:00 PM)\nApril 27 (10:00 AM - 6:00 PM)\n\nThe hacking period runs from April 25, 9:00 PM to April 27, 9:00 PM.\n\nMark your calendars – it’s gonna be a blast!`,
    },
    {
      src: "location (1).png",
      alt: "location",
      text: "LOCATION",
      tint: "tint-[#4ecdc4]",
      modalHeading: "LOCATION",
      modalContent: `Venue: Computer Labs CL-1 to CL-4\nBuilding: ABB-3 (Near Gate No. 1)\n\nGrab your gear and head to the labs – your hacking adventure awaits!`,
    },
    {
      src: "rulebook.png",
      alt: "rulebook",
      text: "RULEBOOK",
      tint: "tint-[#45b7d1]",
      modalHeading: "RULEBOOK",
      modalContent: `Read the rules, stay cool.\n\nEverything you need to know before you dive into code. One rulebook to rule them all!`,
    },
    {
      src: "hourglass.png",
      alt: "timeline",
      text: "TIMELINE",
      tint: "tint-[#96c93d]",
      modalHeading: "TIMELINE",
      modalContent: `Day 1: Kickoff + Icebreakers\nDay 2: Hacking officially begins\nDay 3: Final Demos & Prize Distribution\n\nThree days of retro-fueled creativity, fun, and fierce innovation.`,
    },
    {
      src: "theme.png",
      alt: "theme",
      text: "THEME",
      tint: "tint-[#00bcd4]",
      modalHeading: "THEME",
      modalContent: `Blast From the Past\n\nReimagine the past with a twist of innovation.\nDig up old ideas, gadgets, or trends – then give them a modern, creative spark.\n\nThink floppy disks that serve coffee, or a Walkman that runs Spotify. Surprise us!`,
    },
    {
      src: "prize.png",
      alt: "prizes",
      text: "PRIZES",
      tint: "tint-[#ffc107]",
      modalHeading: "PRIZES",
      modalContent: `1st Prize: ₹20,000\n2nd Prize: ₹15,000\n3rd Prize: ₹10,000 \n Win big or go home... or do both!`,
    },
    {
      src: "download.png",
      alt: "download",
      text: "DOWNLOAD ASSETS",
      tint: "tint-[#ffa502]",
      onClick: () => {
        playClick();
        window.location.href = "https://drive.google.com/drive/folders/1j12Je9PFiT-ZtYepiViggVgZJVH3zNun?usp=sharing";
      },
    },
    {
      src: "geek.png",
      alt: "speed typing",
      text: "SPEED TYPING",
      tint: "tint-[#ff6b6b]",
      modalHeading: "SPEED TYPING",
      modalContent: `Put your fingers to the test!\n\nA lightning-fast keyboard showdown where speed meets style. Type like the wind and leave the rest in the dust.`,
    },
    {
      src: "flag.png",
      alt: "capture the flag",
      text: "CAPTURE THE FLAG",
      tint: "tint-[#4ecdc4]",
      modalHeading: "CAPTURE THE FLAG",
      modalContent: `It’s not just a game – it’s a digital battlefield.\n\nSolve puzzles, crack codes, and snag the flag in this mini-CTF that’s equal parts fun and challenge.`,
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
          <a href="https://www.instagram.com/osdcjiit/" onClick={playClick}>
            <img src="/insta.png" alt="Instagram" className={socialIconStyle} />
          </a>
          <a href="https://discord.gg/DwEPjtTD5d" onClick={playClick}>
            <img src="/discord.png" alt="Discord" className={socialIconStyle} />
          </a>
          <a href="https://web.whatsapp.com/" onClick={playClick}>
            <img src="/wp.png" alt="WhatsApp" className={socialIconStyle} />
          </a>
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
          <h3 className="responsive-blast-text mt-8 mb-3 retro-subtitle font-mm uppercase text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            blast from the past
          </h3>
          <h1 className="text-stroke text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mm uppercase text-white">
            OSDHACK'25
          </h1>

<div className="mt-10 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-4 xs:gap-y-5 sm:gap-y-6 md:gap-y-8 w-full max-w-5xl">
            {icons.map(({ src, alt, text, tint, onClick, modalHeading, modalContent }, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center">
                <img
                  src={src}
                  alt={alt}
                  className={`${iconStyle} ${tint}`}
                  onClick={() => {
                    playClick();
                    if (onClick) onClick();
                    else if (modalHeading) {
                      setActiveModal({
                        heading: modalHeading,
                        content: modalContent,
                        src,
                      });
                    }
                  }}
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
              onClose={() => {
                playClick();
                setActiveModal(null);
              }}
              heading={activeModal.heading}
              iconSrc={activeModal?.src}
            >
              {activeModal.content}
            </PopupModal>

          )}
        </div>
      )}
    </div>
  );
}
