import React from "react";
import "./PhasesSection.css";

const phases = [
  {
    title: "Phase 1 – Idea Submission",
    desc: "Submit your innovative solution, focusing on data collection and translation methods.",
  },
  {
    title: "Phase 2 – Prototype Development",
    desc: "Shortlisted teams build prototypes with support and resources provided.",
  },
  {
    title: "Phase 3 – Final Submission & Evaluation",
    desc: "Refine and present your system for final evaluation and showcase.",
  },
];

const PhasesSection = () => (
  <section className="phases">
    <div className="section-inner">
      <h2>Competition Phases</h2>
      <div className="phases-list auto-grid">
        {phases.map((phase, idx) => (
          <div className="phase-card card" key={idx}>
            <h3>{phase.title}</h3>
            <p>{phase.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PhasesSection;
