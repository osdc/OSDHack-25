import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date("2025-04-25T00:00:00+05:30"); // April 25, 2025 IST

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="mt-8 bg-[#1e1e1e] p-4 rounded-lg shadow-lg"
      style={{
        border: "4px solid white",
        borderImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2P8z8Dwn4GBgQEIECAGjACBAYGBgYGBgYGBgYEBAO8gB7H2eGfrAAAAAElFTkSuQmCC') 4 stretch",
      }}
    >
      <h3 className="text-xl md:text-2xl font-pixelify text-white text-center mb-2">
        Countdown to Hackathon
      </h3>
      <div className="flex gap-4 justify-center font-pixelify text-white text-lg md:text-xl">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days || "0"}</span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours || "0"}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes || "0"}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds || "0"}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
}