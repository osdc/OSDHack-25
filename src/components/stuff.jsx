import React from 'react';
export default function Stuff() {
    const rules=[
        "1. Registration Deadline: July 10, 2025, 11:59 PM.",
        "2. Team Composition: Teams must have 2–4 members and consist of students only.",
        "3. Project Type: Build any software-based project (web apps, drivers, tools, etc.). No hardware projects allowed.",
        "4. Version Control: Use Git for version control. A GitHub repository must be created with all project code publicly available.",
        "5. Commit Timeline: All code must be written and committed during the hackathon. Late commits won't be counted.",
        "6. Open Source: Projects must be open source with a valid Free and Open Source license (https://opensource.org/licenses).",
        "7. Use of External Code: You may use open-source libraries/assets with proper attribution and licensing.",
        "8. Originality: Projects must be original and not previously submitted to any hackathon.",
        "9. Submission Platform: Final submissions must be made on Devpost, including: GitHub repo link, Project description, 1–3 min video demo (hosted on YouTube, Drive, etc.), Deployment link (if applicable)",
        "10. Mid-Evaluation Requirement: Teams must submit for mid-evaluation. Failure to do so will result in disqualification from the finals.",
        "11. Discord Participation: All team members must join the official Discord server for updates, announcements, and support.",
        "12. Rule Enforcement: Any rule violations may lead to disqualification.",
        "13. Plagiarism: Plagiarism in any form will be strictly penalized. We take it seriously. We mean it.",
        "14. Organizing Authority: The organizing team's decisions are final in all matters."
    ]
  return (
    <div>{rules.map((rule, index) => (<p key={index}>{rule}</p>))}</div>
  );
}