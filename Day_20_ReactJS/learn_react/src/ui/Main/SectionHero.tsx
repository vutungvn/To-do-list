import React from "react";
import icon_play from "../../assets/images/icon_play.svg";
import icon_arrow_down from "../../assets/images/icon_arrow_down.svg";

export const SectionHero = () => {
  return (
    <section className="section section-hero">
      <div className="container">
        <div className="hero-content">
          <div className="section-heading">
            <h2 className="section-title">
              Branding to fuel your growth
              <span className="hightlight-text">goals &amp; ideas.</span>
            </h2>
            <p className="section-subtitle">
              We're a digital product and UX agency in San Francisco. Strategy,
              design, <br />
              and development across all platforms.
            </p>
          </div>

          <div className="hero-button">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-play">
              <span className="play-icon">
                <img src={icon_play} alt="" />
              </span>
              How It Works
            </button>
          </div>
        </div>
      </div>

      <button className="btn-scroll-down">
        <img src={icon_arrow_down} alt="" />
      </button>
    </section>
  );
};
