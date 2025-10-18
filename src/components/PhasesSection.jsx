import React from "react";
import "./PhasesSection.css";

const phases = [
  {
    title: "Phase 1 – Research & Proposal",
    desc: "Explore the problem, analyze datasets, and design your AI framework. Submit a proposal detailing your problem approach, data strategy, model plan, and workflow.",
    details: (
      <>
        <strong>💡 Tip</strong>
        <ul>
          <li>Highlight innovation and social impact!</li>
        </ul>
        <span role="img" aria-label="Tip">
          💡
        </span>
        <em> Show originality & impact!</em>
      </>
    ),
  },
  {
    title: "Phase 2 – Model & Demo",
    desc: "Shortlisted teams train and optimize models using ethical datasets. Document performance, metrics, and challenges, and submit a demo video.",
    details: (
      <>
        <strong>Tip</strong>
        <ul>
          <li>🎯 Focus on accuracy, efficiency, and adaptability.</li>
        </ul>
        <span role="img" aria-label="Focus">
          🎯
        </span>
        <em> Focus: accuracy & adaptability.</em>
      </>
    ),
  },
  {
    title: "Phase 3 – Prototype & Judging",
    desc: "Build a real-time sign-to-speech prototype integrating camera, microcontroller, and audio output. Showcase live performance with deployment docs and a final presentation.",
    details: (
      <>
        <strong>Teams will:</strong>
        <ul>
          <li>Integrate hardware</li>
          <li>Show real-time use</li>
        </ul>
        <span role="img" aria-label="Sparkles">
          ✨
        </span>
        <em> Special awards for creativity!</em>
      </>
    ),
  },
  {
    title: "Evaluation Criteria",
    desc: "Model accuracy & real-time performance\nInnovation & scalability\nAccessibility impact\nDocumentation & presentation.",
    details: (
      <>
        <span role="img" aria-label="Trophy">
          🏆
        </span>
        <strong>✨Special Awards:</strong>
        <ul>
          <li>Audience’s Choice & Innovation Excellence</li>
        </ul>
      </>
    ),
  },
];

export default function PhasesSection() {
  return (
    <section className="phases">
      <div className="section-inner">
        <h2>Competition Phases</h2>
        <div className="phases-list auto-grid">
          {phases.map((p, i) => (
            <article
              className="phase-card card"
              key={i}
              tabIndex={0}
              aria-labelledby={`phase-${i}-title`}
            >
              <h3 id={`phase-${i}-title`}>{p.title}</h3>
              <p>{p.desc}</p>

              <div
                className="phase-hover-content"
                role="region"
                aria-hidden="false"
              >
                {p.details}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
