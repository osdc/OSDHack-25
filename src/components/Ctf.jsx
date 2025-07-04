import React from "react";

export default function CTF() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 box-border">
      <div
        className="max-w-4xl mx-auto space-y-6 font-dogica text-[8px] sm:text-[10px] md:text-xs"
        style={{
          fontFamily: "dogica, mm, sans-serif",
          imageRendering: "pixelated",
        }}
      >
        {/* Title */}
        <h2 className="text-center text-lg sm:text-xl font-bold mb-4">
          CAPTURE THE FLAG
        </h2>

        {/* Intro */}
        <p className="text-center text-black font-bold text-[10px] sm:text-sm md:text-base">
          It's not just a game - it's a digital battlefield.
          <br />
          Solve puzzles, crack codes, and snag the flag in this mini-CTF.
        </p>

        {/* Timeline */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            → Event Timeline
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <span className="font-bold">Starts:</span> 12 July at 5:00 PM
              </li>
              <li>
                <span className="font-bold">Ends:</span> 13 July at 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge Categories */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            → Challenge Categories
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>Cryptography</li>
              <li>Web Exploitation</li>
              <li>Forensics</li>
              <li>Reverse Engineering</li>
              <li>Miscellaneous</li>
            </ul>
          </div>
        </div>

        {/* Rules */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            → Rules
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>Team based ctf</li>
              <li>Flags must be submitted in correct format</li>
              <li>Most points wins!</li>
            </ul>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-center mt-6 text-black font-bold text-[10px] sm:text-sm md:text-base">
          Equal parts fun and challenge—ready to test your skills?
        </p>
      </div>
    </div>
  );
}
