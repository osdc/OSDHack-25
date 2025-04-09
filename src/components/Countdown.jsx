import { useState, useEffect } from "react";

export default function Countdown() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-04-25T00:00:00+05:30"); // April 25, 2025 IST

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setDaysLeft(0);
        return;
      }

      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // update every hour
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-2">
      <p className="font-mm uppercase text-[0.65rem] xs:text-[0.7rem] sm:text-sm text-white tracking-wide">
        {daysLeft} Days Left
      </p>
    </div>
  );
}
