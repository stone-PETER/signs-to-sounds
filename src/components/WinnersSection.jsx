import React from "react";
import "./WinnersSection.css";

const winners = [
  {
    place: "1st Prize",
    name: "ARYAN PAREKH",
    college: "Kadi Sarva Vishwavidyalaya",
    image: "/posters/winners/1st.jpeg",
    accent: "gold",
  },
  {
    place: "2nd Prize",
    name: "Kevin Johnson",
    college: "College of Engineering Chengannur",
    image: "/posters/winners/2nd.jpeg",
    accent: "silver",
  },
  {
    place: "3rd Prize",
    name: "Nima Fathima",
    college: "Adi Shankara Institute of Engineering and Technology, Kalady",
    image: "/posters/winners/3rd.jpeg",
    accent: "bronze",
  },
];

const WinnersSection = () => (
  <section className="winners alt-bg">
    <div className="section-inner">
      <div className="winners-header">
        <p className="section-kicker">Campus Ambassadors</p>
        <h2>Winners</h2>
        <p className="winners-intro">
          Celebrating the top campus ambassador achievers and their winning
          institutions.
        </p>
      </div>

      <div className="winners-grid">
        {winners.map((winner) => (
          <article className={`winner-card card ${winner.accent}`} key={winner.place}>
            <div className="winner-rank">{winner.place}</div>
            <div className="winner-image-wrap">
              <img
                src={winner.image}
                alt={`${winner.place} winner ${winner.name}`}
                className="winner-image"
              />
            </div>
            <div className="winner-details">
              <h3>{winner.name}</h3>
              <p>{winner.college}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WinnersSection;