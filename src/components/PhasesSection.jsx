import React from "react";
import "./PhasesSection.css";

const phases = [
  {
    title: "Phase 1 – Research & Proposal",
    desc: "Explore the problem and submit your plan.",
    hover: (
      <>
        <strong>Proposal includes:</strong>
        <ul>
          <li>Problem & solution</li>
          <li>Data & model plan</li>
        </ul>
        <span role="img" aria-label="Tip">
          💡
        </span>{" "}
        <em>Show originality & impact!</em>
      </>
    ),
  },
  {
    title: "Phase 2 – Model & Demo",
    desc: "Train your model and show results.",
    hover: (
      <>
        <strong>Teams will:</strong>
        <ul>
          <li>Train with ethical data</li>
          <li>Report & demo video</li>
        </ul>
        <span role="img" aria-label="Focus">
          🎯
        </span>{" "}
        <em>Focus: accuracy & adaptability.</em>
      </>
    ),
  },
  {
    title: "Phase 3 – Prototype & Judging",
    desc: "Build a real-time sign-to-speech prototype.",
    hover: (
      <>
        <strong>Teams will:</strong>
        <ul>
          <li>Integrate hardware</li>
          <li>Show real-time use</li>
        </ul>
        <span role="img" aria-label="Sparkles">
          ✨
        </span>{" "}
        <em>Special awards for creativity!</em>
      </>
    ),
  },
  {
    title: "Phase 4 – Evaluation Criteria",
    desc: "Judging will consider these points.",
    hover: (
      <>
        <span role="img" aria-label="Trophy">
          🏆
        </span>{" "}
        <strong>Criteria:</strong>
        <ul>
          <li>Accuracy & performance</li>
          <li>Innovation</li>
          <li>Accessibility</li>
          <li>Docs & presentation</li>
        </ul>
      </>
    ),
  },
];

const PhasesSection = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="phases">
      <div className="section-inner">
        <h2>Competition Phases</h2>
        <div className="phases-list auto-grid">
          {phases.map((phase, idx) => (
            <div
              className="phase-card card"
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
              onFocus={() => setHovered(idx)}
              onBlur={() => setHovered(null)}
              style={{ position: "relative" }}
            >
              <h3>{phase.title}</h3>
              <p>{phase.desc}</p>
              {hovered === idx && (
                <div className="phase-hover-content">{phase.hover}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
