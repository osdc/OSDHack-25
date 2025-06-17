import React from 'react';
export default function Stuff() {
    const rules=[
        "1. Only JIIT students may participate.\n",
        "2. Registration deadline: April 25, 2025, 11:00 AM.\n",
        "3. Bring your laptops (for the offline hackathon). Labs will provide computers and RJ45 internet access. (MacBook users: bring port adapters).\n",
        "4. Teams must have 4-6 members.\n",
        "5. Teams must be JIIT students only (JIIT-62 and JIIT-128 can mix).\n",
        "6. Build any software project - web apps, drivers, etc. (no hardware projects).\n",
        "7. Create a github repository with all the code of the project.\n",
        "8. Create and commit all code during hackathon hours. Late commits won't count.\n",
        "9. You may use open source code/assets with proper attribution and licensing.\n",
        "10. Projects must be original i.e. not submitted to previous hackathons.\n",
        "11. All code must be open source and public.\n",
        "12. You may use open source projects and libraries in your project.\n",
        "13. Use Git for version control.\n",
        "14. Organizing team's decisions are final.\n"
    ]
  return (
    <div>{rules.map((rule, index) => (<p key={index}>{rule}</p>))}</div>
  );
}