import React from "react";
import "./FeaturedPosterBanner.css";

const FeaturedPosterBanner = () => (
  <section className="featured-poster-banner alt-bg">
    <div className="section-inner">
      <div className="featured-poster-header">
        <p className="featured-poster-kicker">Campaign Highlight</p>
        <h2>Final Phase</h2>
      </div>
      <div className="featured-poster-container">
        <figure className="featured-poster-card">
          <img
            src="/posters/main-poster.png"
            alt="Main poster"
            className="featured-poster-image"
          />
        </figure>
      </div>
    </div>
  </section>
);

export default FeaturedPosterBanner;