import React from 'react';

export default function Stuff() {
  const rules = [
    "Registration Deadline: July 10, 2025, 11:59 PM.",
    "Team Composition: Teams must have 2–4 members and consist of students only.",
    "Project Type: Build any software-based project (web apps, drivers, tools, etc.). No hardware projects allowed.",
    "Version Control: Use Git for version control. A GitHub repository must be created with all project code publicly available.",
    "Commit Timeline: All code must be written and committed during the hackathon. Late commits won't be counted.",
    "Open Source: Projects must be open source with a valid Free and Open Source license.",
    "Use of External Code: You may use open-source libraries/assets with proper attribution and licensing.",
    "Originality: Projects must be original and not previously submitted to any hackathon.",
    "Submission Platform: Final submissions must be made on Devpost (GitHub link, description, 1–3 min video, deployment link).",
    "Mid-Evaluation Requirement: Teams must submit for mid-evaluation. Failure to do so will result in disqualification.",
    "Discord Participation: All team members must join the official Discord server.",
    "Rule Enforcement: Any rule violations may lead to disqualification.",
    "Plagiarism: Plagiarism in any form will be strictly penalized.",
    "Organizing Authority: The organizing team's decisions are final."
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Hackathon Rules
      </h1>
      <ul className="space-y-5">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-semibold text-gray-600">{index + 1}.</span>
            <p className="text-gray-700 leading-relaxed">{rule}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
