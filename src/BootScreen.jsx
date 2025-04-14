import { useEffect, useState } from "react";

const bootSteps = [
  "BOOTING UP OSDC.EXE",
  "BLASTING DAFT PUNK",
  "TOTALLY A MANDATORY STEP",
  "OPENING OSDHACK.EXE",
  "THIS MESSAGE REPLACED THE LAST ONE",
  "JUST KIDDING, STACKING AGAIN",
];

export default function BootScreen({ onFinish }) {
  const [bootIndex, setBootIndex] = useState(0);
  const [displayedSteps, setDisplayedSteps] = useState([]);
  const [blinkSymbol, setBlinkSymbol] = useState("underscore");

  useEffect(() => {
    if (bootIndex >= bootSteps.length) return;

    const timer = setTimeout(() => {
      const step = bootSteps[bootIndex];
      const shouldReplace = Math.random() < 0.5;
      setDisplayedSteps((prev) => (shouldReplace ? [step] : [...prev, step]));
      setBlinkSymbol(Math.random() < 0.5 ? "underscore" : "dots");
      setBootIndex((prev) => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [bootIndex]);

  useEffect(() => {
    if (bootIndex === bootSteps.length) {
      const doneTimer = setTimeout(() => {
        setDisplayedSteps([]);
        onFinish();
      }, 800);
      return () => clearTimeout(doneTimer);
    }
  }, [bootIndex, onFinish]);

  return (
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
  );
}
