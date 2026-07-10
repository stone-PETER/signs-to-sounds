import React from "react";
import "./CompetitionWinnersSection.css";

const competitionWinners = [
  {
    place: "1st Prize",
    team: "Kaizen",
    institute: "Mar Athanasius College of Engineering, Kothamangalam",
    image: "/posters/final/s2s_1.jpeg",
    accent: "gold",
  },
  {
    place: "2nd Prize",
    team: "Euphoria",
    institute: "Adi Shankara Institute of Engineering and Technology",
    image: "/posters/final/s2s_2.jpeg",
    accent: "silver",
  },
  {
    place: "3rd Prize",
    team: "ZORA",
    institute: "Adi Shankara Institute of Engineering and Technology",
    image: "/posters/final/s2s_3.jpeg",
    accent: "bronze",
  },
];

const CompetitionWinnersSection = () => (
  <section className="competition-winners alt-bg">
    <div className="section-inner">
      <div className="competition-winners-header">
        <p className="section-kicker competition-winners-kicker">
          Final Phase
        </p>
        <h2>Winners</h2>
        <p className="competition-winners-intro">
          The final competition posters for the top three prize winners.
        </p>
      </div>

      <div className="competition-winners-grid">
        {competitionWinners.map((winner) => (
          <article
            className={`competition-winner-card card ${winner.accent}`}
            key={winner.place}
          >
            <div className="competition-winner-rank">{winner.place}</div>
            <div className="competition-winner-image-wrap">
              <img
                src={winner.image}
                alt={`${winner.place} winner poster for ${winner.team}`}
                className="competition-winner-image"
              />
            </div>
            <div className="competition-winner-details">
              <h3>{winner.team}</h3>
              <p>{winner.institute}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CompetitionWinnersSection;