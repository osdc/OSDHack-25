import React from "react";

export default function Stuff() {
  const rules = [
    {
      title: "→ Registration Deadline",
      description: "Registration closes on July 10, 2025, 11:59 PM.",
    },
    {
      title: "→ Team Composition",
      description: "Teams must have 2–4 members and consist of students only.",
    },
    {
      title: "→ Project Type",
      description:
        "Build any software-based project such as web apps, mobile apps, drivers, tools, etc. Hardware projects are not allowed.",
    },
    {
      title: "→ Version Control",
      description:
        "Use Git for version control. A GitHub repository must be created with all project code publicly available.",
    },
    {
      title: "→ Commit Timeline",
      description:
        "All code must be written and committed during the hackathon. Late commits won't be counted.",
    },
    {
      title: "→ Open Source Requirement",
      description:
        "Projects must be open source with a valid Free and Open Source license (https://opensource.org/licenses).",
    },
    {
      title: "→ Use of External Code",
      description:
        "You may use open-source libraries/assets with proper attribution and licensing.",
    },
    {
      title: "→ Originality",
      description:
        "Projects must be original and not previously submitted to any hackathon.",
    },
    {
      title: "→ Submission Platform",
      description:
        "Final submissions must be made on Devpost including GitHub repo link, Project description, 1–3 min video demo (hosted on YouTube, Drive, etc.), and Deployment link (if applicable).",
    },
    {
      title: "→ Mid-Evaluation Requirement",
      description:
        "Teams must submit for mid-evaluation. Failure to do so will result in disqualification from the finals.",
    },
    {
      title: "→ Discord Participation",
      description:
        "All team members must join the official Discord server for updates, announcements, and support.",
    },
    {
      title: "→ Rule Enforcement",
      description: "Any rule violations may lead to disqualification.",
    },
    {
      title: "→ Plagiarism",
      description:
        "Plagiarism in any form will be strictly penalized. We take it seriously. We mean it.",
    },
    {
      title: "→ Organizing Authority",
      description:
        "The organizing team's decisions are final in all matters.",
    },
  ];

  return (
    <div
      className="max-w-3xl mx-auto space-y-4 px-4 sm:px-6 md:px-8 overflow-y-auto max-h-[80vh]"
      style={{
        fontFamily: "dogica, mm, sans-serif",
        imageRendering: "pixelated",
      }}
    >
      <h2 className="text-center text-base sm:text-lg md:text-xl font-bold mb-4">
        Hackathon Rules & Guidelines
      </h2>

      {rules.map((rule, index) => (
        <div
          key={index}
          className="border border-black bg-white rounded-md shadow-md"
        >
          <h3 className="px-4 py-2 font-bold bg-[#f0f0f0] text-[11px] sm:text-xs md:text-sm flex items-center">
            {rule.title}
          </h3>
          <p className="px-4 py-3 text-[10px] sm:text-xs md:text-sm whitespace-pre-line text-black">
            {rule.description}
          </p>
        </div>
      ))}
    </div>
  );
}
