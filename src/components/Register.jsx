import React from "react";

export default function Register() {
  return (
    <div className="w-full  sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 box-border">
      <div
        className="max-w-4xl mx-auto space-y-6 font-dogica text-[10px] sm:text-xs md:text-sm"
        style={{
          fontFamily: "dogica, mm, sans-serif",
          imageRendering: "pixelated",
        }}
      >
        <h2 className="text-center text-lg sm:text-xl font-bold mb-4">
          Registration Info
        </h2>

        {/* Who Can Participate */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-sm sm:text-base md:text-lg">
            → Who Can Participate?
          </div>
          <div className="px-4 py-3 text-sm sm:text-base md:text-lg text-black">
            Participation is open for college students from all institutes in
            India.
          </div>
        </div>

        {/* Registration Link */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-sm sm:text-base md:text-lg">
            → Registration Link
          </div>
          <div className="px-4 py-3 text-sm sm:text-base md:text-lg text-black break-all">
            All participants must register here:{" "}
            <a
              href="http://osdhack25.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              osdhack25.devpost.com
            </a>
          </div>
        </div>

        {/* One Per Team */}
        <div className="border border-black bg-white">
          <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-sm sm:text-base md:text-lg">
            → Registration
          </div>
          <div className="px-4 py-3 text-sm sm:text-base md:text-lg text-black">
            Every participant needs to register
            <br />
            Teams will be formed later
          </div>
        </div>

        {/* Final Note */}
        <p className="text-center mt-6 text-sm sm:text-base md:text-lg text-black">
          Secure your spot. Retro-fy your code. Game on.{" "}
        </p>
        <p className="text-center mt-6 text-sm sm:text-base md:text-lg text-black">
          CHECK DOWNLOAD ASSETS!{" "}
        </p>
      </div>
    </div>
  );
}
