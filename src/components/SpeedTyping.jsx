import React from "react";

export default function SpeedTyping() {
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
          SPEED TYPING
        </h2>

        {/* Intro Text */}
        <p className="text-center text-black font-bold text-[10px] sm:text-sm md:text-base">
          Put your fingers to the test!<br />
          A lightning-fast keyboard showdown where speed meets style.
        </p>

        {/* Timeline Section */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            → Timeline
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <span className="font-bold">Session 1</span> → 12 July (12:00 PM - 1:00 PM)
              </li>
              <li>
                <span className="font-bold">Session 2</span> → 13 July (12:00 PM - 1:00 PM)
              </li>
              <li>
                <span className="font-bold">Finals</span> → 13 July (7:00 PM)
              </li>
            </ul>
          </div>
        </div>

        {/* Rules Section */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
            → Rules
          </div>
          <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base">
            <ul className="list-disc pl-4 space-y-1">
              <li>Participants will be given random text to type</li>
              <li>Accuracy and speed both count</li>
              <li>Top performers from sessions qualify for finals</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-6 text-black font-bold text-[10px] sm:text-sm md:text-base">
          Type like the wind and leave the rest in the dust!
        </p>
      </div>
    </div>
  );
}
