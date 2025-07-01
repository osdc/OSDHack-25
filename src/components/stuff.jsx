import React from "react";

export default function HackathonRules() {
  const rules = [
    {
      title: "Registration Deadline",
      content: "July 10, 2025, 11:59 PM.",
    },
    {
      title: "Team Composition",
      content: "Teams must have 2–4 members and consist of students only.",
    },
    {
      title: "Project Type",
      content:
        "Build any software-based project (web apps, drivers, tools, etc.). No hardware projects allowed.",
    },
    {
      title: "Version Control",
      content:
        "Use Git for version control. A GitHub repository must be created with all project code publicly available.",
    },
    {
      title: "Commit Timeline",
      content:
        "All code must be written and committed during the hackathon. Late commits won't be counted.",
    },
    {
      title: "Open Source",
      content:
        "Projects must be open source with a valid Free and Open Source license.",
    },
    {
      title: "Use of External Code",
      content:
        "You may use open-source libraries/assets with proper attribution and licensing.",
    },
    {
      title: "Originality",
      content:
        "Projects must be original and not previously submitted to any hackathon.",
    },
    {
      title: "Submission Platform",
      content:
        "Final submissions must be made on Devpost (GitHub link, description, 1–3 min video, deployment link).",
    },
    {
      title: "Mid-Evaluation Requirement",
      content:
        "Teams must submit for mid-evaluation. Failure to do so will result in disqualification.",
    },
    {
      title: "Discord Participation",
      content: "All team members must join the official Discord server.",
    },
    {
      title: "Rule Enforcement",
      content: "Any rule violations may lead to disqualification.",
    },
    {
      title: "Plagiarism",
      content: "Plagiarism in any form will be strictly penalized.",
    },
    {
      title: "Organizing Authority",
      content: "The organizing team's decisions are final.",
    },
  ];

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
          HACKATHON RULES
        </h2>

        {rules.map((rule, index) => (
          <div
            key={index}
            className="border border-black bg-white"
          >
            <div className="px-4 py-3 font-bold bg-[#f0f0f0] text-[10px] sm:text-sm md:text-base">
              → {index + 1}. {rule.title}
            </div>
            <div className="px-4 py-3 text-black text-[10px] sm:text-sm md:text-base whitespace-pre-line">
              {rule.content}
            </div>
          </div>
        ))}

        <p className="text-center mt-6 font-bold text-[10px] sm:text-sm md:text-base text-black">
          Follow the rules. Embrace the chaos. Let the best retro devs win!
        </p>
      </div>
    </div>
  );
}
