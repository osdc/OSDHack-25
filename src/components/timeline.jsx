import React from "react";

export default function Timeline() {
  const schedule = [
    {
      title: "→ Opening Ceremony",
      description: "July 11 (7:00 PM)",
    },
    {
      title: "→ Hacking Period",
      description: "July 11 (7:00 PM) to July 13 (11:59 PM)",
    },
    // {
    //   title: "→ Evaluations",
    //   description: "July 13 (12:00 AM - 12:00 PM)",
    // },
    {
      title: "→ Mid Evaluation",
      description: "July 13 (12:00AM to 11:59PM)",
    },
    {
      title: "→ Final Submission Deadline",
      description: "July 14 (12:00 AM)",
    },
  ];

  const speedTyping = [
    {
      title: "→ Speed Typing - Session 1",
      description: "July 12 (12:00 PM - 1:00 PM)",
    },
    {
      title: "→ Speed Typing - Session 2",
      description: "July 13 (12:00 PM - 1:00 PM)",
    },
    {
      title: "→ Speed Typing - Finals",
      description: "July 13 (7:00 PM)",
    },
  ];

  const captureTheFlag = [
    {
      title: "→ Capture The Flag - Start",
      description: "July 12 (5:00 PM)",
    },
    {
      title: "→ Capture The Flag - End",
      description: "July 13 (5:00 PM)",
    },
  ];

  return (
    <div
      className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6 md:px-8 overflow-y-auto max-h-[80vh]"
      style={{
        fontFamily: "dogica, mm, sans-serif",
        imageRendering: "pixelated",
      }}
    >
      <h2 className="text-center text-base sm:text-lg md:text-xl font-bold mb-4">
        Hackathon Schedule
      </h2>

      {schedule.map((item, index) => (
        <div
          key={index}
          className="border border-black bg-white rounded-md shadow-md"
        >
          <h3 className="px-4 py-2 font-bold bg-[#f0f0f0] text-[11px] sm:text-xs md:text-sm">
            {item.title}
          </h3>
          <p className="px-4 py-3 text-[10px] sm:text-xs md:text-sm whitespace-pre-line text-black">
            {item.description}
          </p>
        </div>
      ))}

      <h2 className="text-center text-base sm:text-lg md:text-xl font-bold mt-8 mb-4">
        Mini Events
      </h2>

      <h3 className="text-[11px] sm:text-xs md:text-sm font-bold">
        Speed Typing
      </h3>
      {speedTyping.map((item, index) => (
        <div
          key={index}
          className="border border-black bg-white rounded-md shadow-md"
        >
          <h4 className="px-4 py-2 font-bold bg-[#f0f0f0] text-[11px] sm:text-xs md:text-sm">
            {item.title}
          </h4>
          <p className="px-4 py-3 text-[10px] sm:text-xs md:text-sm whitespace-pre-line text-black">
            {item.description}
          </p>
        </div>
      ))}

      <h3 className="text-[11px] sm:text-xs md:text-sm font-bold mt-6">
        Capture The Flag
      </h3>
      {captureTheFlag.map((item, index) => (
        <div
          key={index}
          className="border border-black bg-white rounded-md shadow-md"
        >
          <h4 className="px-4 py-2 font-bold bg-[#f0f0f0] text-[11px] sm:text-xs md:text-sm">
            {item.title}
          </h4>
          <p className="px-4 py-3 text-[10px] sm:text-xs md:text-sm whitespace-pre-line text-black">
            {item.description}
          </p>
        </div>
      ))}

      <p className="text-center text-[10px] sm:text-xs md:text-sm mt-6">
        Three days of retro-fueled creativity, fun, and fierce innovation!
      </p>
    </div>
  );
}
