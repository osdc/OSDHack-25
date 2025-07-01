import React from "react";

export default function Tracks() {
  return (
    <div
      className="max-w-3xl mx-auto space-y-5 px-4 sm:px-6 md:px-8 overflow-y-auto max-h-[80vh]"
      style={{
        fontFamily: "dogica, mm, sans-serif",
        imageRendering: "pixelated",
      }}
    >
      <h2 className="text-lg sm:text-xl font-bold text-center">
        Hackathon Tracks
      </h2>

      <div className="border border-black bg-white rounded-md shadow-md">
        <h3 className="px-4 py-2 font-bold bg-[#f0f0f0] text-[11px] sm:text-xs md:text-sm">
          → Devtools and/or Plugins
        </h3>
        <div className="px-4 py-3 text-[10px] sm:text-xs md:text-sm text-black space-y-2">
          <p>
            To qualify under the Devtools and Plugins track, participants may
            either:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Create a plugin for any open-source project that has more than{" "}
              <strong>500 stars</strong> on GitHub.
            </li>
            <li>
              Create any <strong>Devtool</strong>. A devtool is any tool where
              the end users are not regular people but other developers. Please
              avoid creating a web app with frontend and backend OR
              applications whose core functionality is just sending API
              requests.
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-black bg-white rounded-md shadow-md">
        <h3 className="px-4 py-2 font-bold bg-[#f0f0f0] text-[11px] sm:text-xs md:text-sm">
          → Humane Tech
        </h3>
        <div className="px-4 py-3 text-[10px] sm:text-xs md:text-sm text-black space-y-2">
          <p>
            Humane tech includes ethically humane digital products which focus
            on user well-being.
          </p>
          <p>
            Participants can create a project that embraces humane design
            principles in their domain.
          </p>
          <p>
            Reference:{" "}
            <a
              href="https://codeberg.org/teaserbot-labs/delightful-humane-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              https://codeberg.org/teaserbot-labs/delightful-humane-design
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
