import React from "react";
import img_explore01 from "../../assets/images/img_explore01.png";
import img_explore02 from "../../assets/images/img_explore02.png";
import img_explore04 from "../../assets/images/img_explore04.png";
import img_explore03 from "../../assets/images/img_explore03.png";

export const SectionExplore = () => {
  return (
    <section className="section section-explore">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title title-md">
            Explore our recent client success stories and witness our full 360
            transformations come to life
          </h2>
        </div>
        <div className="explore-wrap">
          <div className="explore-box">
            <div className="explore-item">
              <div className="explore-image">
                <img src={img_explore01} />
              </div>
              <a href="#" className="explore-link">
                UX/UI Design
              </a>
            </div>
            <div className="explore-item">
              <div className="explore-image">
                <img src={img_explore02} />
              </div>
              <a href="#" className="explore-link">
                NFT Market UI
              </a>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-item">
              <div className="explore-image">
                <img src={img_explore04} />
              </div>
              <a href="#" className="explore-link">
                Wallet App Development
              </a>
            </div>
            <div className="explore-item">
              <div className="explore-image">
                <img src={img_explore03} />
              </div>
              <a href="#" className="explore-link">
                Health Mobile App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
