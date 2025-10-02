import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    q: "Who is eligible to participate in the competition?",
    a: "The competition is open to undergraduate and postgraduate students from engineering, computer science, biomedical engineering, and related fields. Teams should consist of two to four members, and at least one member should have experience in signal processing, machine learning, or embedded systems. Participation is open to students from any geographic region.",
  },
  {
    q: "Is there any participation fee or is the competition free of cost?",
    a: "There is no participation fee. The competition is completely free for all participants, thanks to sponsorship from the IEEE Signal Processing Society.",
  },
  {
    q: "What type of submissions are required (prototype, demo video, technical documentation, source code)?",
    a: "Participants must submit a collected and annotated gesture dataset, a working prototype or real-time demo system, a demo video showing how the system works, a technical report explaining the methods and results, and the source code or Colab notebooks to ensure reproducibility during evaluation.",
  },
  {
    q: "Will participants receive mentorship, datasets, or technical resources during the competition?",
    a: "Yes. All participants will receive starter kits that include sample Indian Sign Language gesture libraries, ethical data collection templates, preprocessing notebooks, dataset folder structures, and annotation tools. Mentorship sessions will be provided by experts in machine learning, signal processing, accessibility technologies, and Indian Sign Language. Shortlisted teams will also get access to Google Colab Pro and virtual platforms for webinars, Q&A sessions, and judging.",
  },
  {
    q: "What is the evaluation and judging criteria for the submissions?",
    a: "Submissions will be evaluated on technical innovation, data strategy and usage, functionality, impact and inclusivity, and clarity of presentation. Technical innovation and data strategy have the highest weight. Judging will be conducted by experts from IEEE SPS and accessibility domains to ensure fairness and quality.",
  },
  {
    q: "How will the competition outcomes be sustained or scaled after the event?",
    a: "After the competition, selected teams will be supported in publishing their work through IEEE SPS platforms. Their datasets and tools may be added to open repositories for future research. Finalists' work will also be showcased in IEEE SPS webinars and newsletters, and promising projects may receive incubation or development support.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="faq alt-bg">
      <div className="section-inner">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const open = openIdx === idx;
            const answerId = `faq-answer-${idx}`;
            return (
              <div className="faq-card card" key={idx}>
                <button
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={answerId}
                  onClick={() => setOpenIdx(open ? null : idx)}
                >
                  {faq.q}
                </button>
                {open && (
                  <p
                    id={answerId}
                    className="faq-answer"
                    role="region"
                    aria-live="polite"
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
