import React from "react";

export default function Prizes() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 box-border">
      <div
        className="max-w-4xl mx-auto space-y-6 font-dogica text-[8px] sm:text-[10px] md:text-xs"
        style={{
          fontFamily: "dogica, mm, sans-serif",
          imageRendering: "pixelated",
        }}
      >
        <h2 className="text-center text-lg sm:text-xl font-bold mb-4">
          PRIZES
        </h2>

        {/* Hackathon Prizes */}
        <div className="border border-black bg-white">
          <div className="px-4 py-2 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            Hackathon Prizes
          </div>
          <div className="px-4 py-2 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>~₹20,000 in cash</li>
              <li>Over ₹1,00,000 worth of goodies and vouchers!</li>
            </ul>
          </div>
        </div>

        {/* Mini Events Prizes */}
        <div className="border border-black bg-white">
          <div className="px-4 py-2 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            Mini Events Prizes
          </div>
          <div className="px-4 py-2 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>Goodies</li>
              <li>~₹3,000 in cash</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-6 text-black text-[10px] sm:text-sm md:text-base">
          Bring your best ideas to life —<br />
          and walk away with glory (and cash).
        </p>
      </div>
    </div>
  );
}
