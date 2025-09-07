import React from "react";
import "./PrizesSection.css";

const prizes = [
  { place: "1st Prize", amount: "$2,000", gadgets: "$100", total: "$2,100" },
  { place: "2nd Prize", amount: "$1,200", gadgets: "$100", total: "$1,300" },
  { place: "3rd Prize", amount: "$800", gadgets: "$100", total: "$900" },
  { place: "4th - 7th", amount: "Prize Pool: $333" },
];

const PrizesSection = () => (
  <section className="prizes alt-bg">
    <div className="section-inner">
      <h2>Prizes & Registration</h2>
      <div className="prizes-list auto-grid dense">
        {prizes.map((prize, idx) => (
          <div className="prize-card card" key={idx}>
            <h3>{prize.place}</h3>
            <p>Prize Amount: {prize.amount}</p>
            {prize.gadgets && <p>Gadgets per person: {prize.gadgets}</p>}
            {prize.total && <p>Total: {prize.total}</p>}
          </div>
        ))}
      </div>
      <div className="registration">
        <p>
          <strong>Registration Fee:</strong> $5
        </p>
        <button className="primary cta">Register Now</button>
      </div>
    </div>
  </section>
);

export default PrizesSection;
