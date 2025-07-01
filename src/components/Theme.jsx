import React from "react";

export default function Theme() {
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
          THEME
        </h2>

        {/* Retro THEME BANNER */}
        <div className="border border-black bg-[#e0e0e0]">
          <div className="bg-[#c0c0c0] text-black font-bolder text-center px-4 py-2 text-[11px] sm:text-sm md:text-base uppercase tracking-widest border-b border-black">
             Blast From the Past
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base leading-snug">
            Reimagine the past with a twist of innovation.<br />
            Dig up old ideas, gadgets, or trends — then give them a modern, creative spark.
          </div>
        </div>

        {/* Examples Section */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            → Examples
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>Floppy disks that serve coffee</li>
              <li>A Walkman that runs Spotify</li>
              <li>Vintage UI with modern functionality</li>
              <li>Retro gaming with AI enhancements</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-6 text-black font-bold text-[10px] sm:text-sm md:text-base">
          Surprise us with your creativity!
        </p>
      </div>
    </div>
  );
}
