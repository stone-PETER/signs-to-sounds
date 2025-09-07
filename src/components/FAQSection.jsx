import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    q: "What is the hackathon?",
    a: "Signs to Sounds is an international competition to inspire innovation in assistive technology for sign language to speech conversion.",
  },
  {
    q: "Who can participate?",
    a: "Anyone interested in assistive tech, AI, or communication solutions is welcome to join.",
  },
  {
    q: "What are the phases?",
    a: "Idea Submission, Prototype Development, and Final Submission & Evaluation.",
  },
  {
    q: "How do I register?",
    a: "Click the Register button and follow the instructions to join the event.",
  },
  {
    q: "Where does it occur?",
    a: "The hackathon is held online, ensuring global participation and inclusivity.",
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
