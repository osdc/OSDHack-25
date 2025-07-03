import React, { useState } from "react";

export default function Faqs() {
  const faqs = [
    {
      question: "→ What is a hackathon?",
      answer:
        "A hackathon is where teams come together to build a cool project or prototype within a time limit. Think of it as a creative sprint where you and your teammates build something while having a bit of fun.",
    },
    {
      question: "→ Who can be on my team?",
      answer: "Teams must be 2-4 students.",
    },
    {
      question: "→ What if I don't have a team or idea yet?",
      answer: `No worries! We'll help you find teammates through:
                - The #looking-for-teammates channel on Discord
                - In-person networking during the event
            It's perfectly normal to have no idea what’s going on — reach out, we will guide you to the best of our ability.`,
    },
    {
      question: "→ Are there any restrictions on the project type?",
      answer:
        "• Projects can include any software development area such as web apps, mobile apps, drivers, or integrations.\n• Hardware projects are not permitted, so focus exclusively on software.",
    },
    {
      question: "→ Can I use external open source code or libraries?",
      answer:
        "• Yes, you may use external code or libraries as long as they are properly attributed and comply with the relevant open source license.\n• All code submitted must be open source and publicly available in your repository.",
    },
    {
      question: "→ What programming languages or frameworks are allowed?",
      answer:
        "• There are no restrictions on programming languages or frameworks. Feel free to use whatever tools best suit your project.\n• However, ensure that your project complies with the rules regarding open source licensing and submission guidelines.",
    },
    {
      question: "→ How will the judging work?",
      answer:
        "• Projects will be evaluated based on:\n  - Innovation\n  - Technical complexity\n  - Usability\n  - Design\n  - Overall impact\n• A panel of judges will review the submissions and hold a Q&A session with each team during the final presentation.\n• The judges' decision will be final.",
    },
    {
      question: "→ Need more help?",
      answer:
        "Connect with OSDC on our social channels — we're here to help you out.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-lg text-center font-bold mb-2">
        Frequently Asked Questions (FAQs)
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border border-black bg-white">
          <div
            className="cursor-pointer px-4 py-3 font-bold bg-[#f0f0f0] hover:bg-[#e5e5e5] flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>

          {openIndex === index && (
            <div className="px-4 py-3 whitespace-pre-line">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
