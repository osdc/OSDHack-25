import { useState, useEffect, useRef, useCallback, Suspense, lazy } from "react";
import Countdown from "./Countdown";
import Alert from "./Alert";
import PopupModal from "../components/PopupModal";
import Stuff from "./stuff";
import Tracks from "./tracks";

const BootScreen = lazy(() => import("../BootScreen")); // Lazy loaded

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
  const clickAudioRef = useRef(null);

  useEffect(() => {
    clickAudioRef.current = new Audio("/click.mp3");
    clickAudioRef.current.volume = 0.5;
  }, []);

  const playClick = useCallback(() => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play();
    }
  }, []);

  const handleDownloadPDF = useCallback((fileName, downloadName) => {
    playClick();
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [playClick]);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    const visitTimestamp = parseInt(sessionStorage.getItem("visitTimestamp"));
    const now = Date.now();
    const fifteenMins = 15 * 60 * 1000;

    if (!hasVisited || isNaN(visitTimestamp) || now - visitTimestamp > fifteenMins) {
      setIsLoading(true);
      sessionStorage.setItem("hasVisited", "true");
      sessionStorage.setItem("visitTimestamp", now.toString());
    } else {
      setIsLoading(false);
    }

    const timeout = setTimeout(() => {
      sessionStorage.removeItem("hasVisited");
      sessionStorage.removeItem("visitTimestamp");
    }, fifteenMins);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading || bootIndex >= bootSteps.length) return;

    const timer = setTimeout(() => {
      const step = bootSteps[bootIndex];
      const shouldReplace = Math.random() < 0.5;
      setDisplayedSteps((prev) => shouldReplace ? [step] : [...prev, step]);
      setBlinkSymbol(Math.random() < 0.5 ? "underscore" : "dots");
      setBootIndex((prev) => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [isLoading, bootIndex]);

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

  const handleRegister = useCallback(() => {
    playClick();
    setShowAlert(false); // Close the alert
    const registerIcon = icons.find(icon => icon.alt === "register");
    if (registerIcon) {
      setActiveModal({
        heading: registerIcon.modalHeading,
        content: registerIcon.modalContent,
        src: registerIcon.src,
      });
    }
  }, [playClick]);   

  const handleCloseAlert = useCallback(() => {
    playClick();
    setShowAlert(false);
  }, [playClick]);

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
      modalHeading: "REGISTER",
      modalContent: `Participation is open for college students from all institutes in India.\n\nAll participants must register for the hackathon here: [Registration Form](http://osdhack25.devpost.com/)\n\n(Only 1 person per team has to register.)`,
    },
    
    {
      src: "calendar.png",
      alt: "calendar",
      text: "DATES",
      tint: "tint-[#ff6b6b]",
      modalHeading: "DATES",
      modalContent: `Hackathon dates:\n11 July (7:00 PM) - 13 July (11:59 PM)`,
    },
    {
      src: "location (1).png",
      alt: "Remote",
      text: "REMOTE",
      tint: "tint-[#4ecdc4]",
      modalHeading: "LOCATION",
      modalContent: `Venue: Your home`,
    },
    {
      src: "rulebook.png",
      alt: "rulebook",
      text: "RULEBOOK",
      tint: "tint-[#45b7d1]",
      modalHeading: "RULEBOOK",
      modalContent: <Stuff/>,
    },
    {
      src: "hourglass.png",
      alt: "timeline",
      text: "TIMELINE",
      tint: "tint-[#96c93d]",
      modalHeading: "TIMELINE",
      modalContent: `Hackathon Schedule:\nOpening Ceremony: July 11 (7:00 PM)\nHacking Period:\nMid Evalutaion: July 12-13 (12:00 AM - 11:59 PM)\nEvaluations: July 13 (12:00 AM - 12:00 PM)\nFinal Submission: July 14 (12:00 AM)\n\nMini Events:\nSpeed typing: \nSession 1: 12 July (12:00 PM - 1:00 PM)\nSession 2: 13 July (12:00 PM - 1:00 PM)\nFinals: 13 July (7:00PM)\n\nCapture the Flag:\nStarting: 12 July (5:00 PM)\nFinishing: 13 July (5:00 PM).\nThree days of retro-fueled creativity, fun, and fierce innovation.`,
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
      modalContent: `Hackathon Prizes:\n~₹20,000 in cash and more than ₹1,00,000 worth of goodies and vouchers!\n\nMini Events Prizes:\nGoodies and ~₹3,000 in cash\n\n\nBring your best ideas to life\nand walk away with glory (and cash).`,
    },
    {
      src: "download.png",
      alt: "download",
      text: "DOWNLOAD ASSETS",
      tint: "tint-[#ffa502]",
      onClick: () => {
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
    {
      src: "music.png",
      alt: "tracks",
      text: "TRACKS",
      tint: "tint-[#00bcd4]",
      modalHeading: "TRACKS",
      modalContent: <Tracks/>,
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

      {isLoading ? (
        <Suspense>
          <BootScreen steps={displayedSteps} blinkSymbol={blinkSymbol} />
        </Suspense>
      ) : (
        <>
          {showAlert && <Alert onClose={handleCloseAlert} onRegister={handleRegister} />}
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
        </>
      )}
    </div>
  );
}
