import React from "react";

export default function Tracks() {
  const tracks = [
    {
      title: "Devtools and/or Plugins",
      content: [
        "Create a plugin for any OSS project that has more than 500 stars on GitHub.",
        "Create any Devtool. A devtool is any tool where the end users are not regular people but other developers. Please avoid creating a web app with frontend and backend OR applications whose core functionality is sending API requests.",
      ],
    },
    {
      title: "Humane Tech",
      content: [
        "With tech being designed to exploit your data and attention have you ever felt that you are the product instead of the other way around?",
        "Help us make tools to fight, viable alternatives or even totally unrelated projects optimised for actual user well-being.",
        "https://codeberg.org/teaserbot-labs/delightful-humane-design",
      ],
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 box-border">
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-center text-lg sm:text-xl font-bold mb-4">
          Tracks
        </h2>
        <div className="text-center text-lg sm:text-xl font-bold mb-4">
          The main theme is still blast from the past, however apart from this
          theme we have two additional tracks, which may get you bonus prizes
        </div>

        {tracks.map((track, index) => (
          <div key={index} className="border border-black bg-white">
            <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-sm sm:text-base md:text-lg">
              {index + 1}. {track.title}
            </div>
            <div className="px-4 py-3 space-y-2 text-sm sm:text-base md:text-lg">
              {track.content.map((line, i) => {
                const isLink = line.startsWith("http");
                return isLink ? (
                  <div key={i} className="break-all">
                    <a
                      href={line}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {line}
                    </a>
                  </div>
                ) : (
                  <div key={i}>• {line}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
