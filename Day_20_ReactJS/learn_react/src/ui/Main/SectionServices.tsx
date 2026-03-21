import React from "react";
import icon_layer from "../../assets/images/icon_layer.png";
import icon_chart from "../../assets/images/icon_chart.png";
import icon_rocket from "../../assets/images/icon_rocket.png";
import img_google from "../../assets/images/img_google.png";
import img_netflix from "../../assets/images/img_netflix.png";
import img_slack from "../../assets/images/img_slack.png";
import img_intercom from "../../assets/images/img_intercom.png";

export const SectionServices = () => {
  return (
    <section className="section section-services">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title title-lg">
            We design engaging digital products <br className="only-pc" />
            used by millions of people
          </h2>
          <p className="section-subtitle">
            We team up with marketing departments of large companies and
            startups to deliver award‑winning websites
          </p>
        </div>
        <div className="service-wrap">
          <ul className="service-list">
            <li className="service-item">
              <div className="service-card">
                <div className="service-icon">
                  <img src={icon_layer} alt="Layer" />
                </div>
                <div className="service-info">
                  <h3 className="service-title">Branding</h3>
                  <p className="service-desc">
                    We design digital platforms to empower users and your
                    brand's tribe.
                  </p>
                </div>
              </div>
            </li>
            <li className="service-item">
              <div className="service-card">
                <div className="service-icon">
                  <img src={icon_chart} alt="Chart" />
                </div>
                <div className="service-info">
                  <h3 className="service-title">Development</h3>
                  <p className="service-desc">
                    We design digital platforms to empower users and your
                    brand's tribe.
                  </p>
                </div>
              </div>
            </li>
            <li className="service-item">
              <div className="service-card">
                <div className="service-icon">
                  <img src={icon_rocket} alt="Rocket" />
                </div>
                <div className="service-info">
                  <h3 className="service-title">Strategy</h3>
                  <p className="service-desc">
                    We design digital platforms to empower users and your
                    brand's tribe.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-service">
            View Our Services
          </button>
        </div>
        <div className="brands-area">
          <div className="section-heading">
            <h3 className="section-title title-sm">
              Working with the most trusted brands in the industry
            </h3>
          </div>
          <ul className="brand-list">
            <li className="brand-item">
              <a href="#">
                <img src={img_google} alt="Google" />
              </a>
            </li>
            <li className="brand-item">
              <a href="#">
                <img src={img_netflix} alt="Netflix" />
              </a>
            </li>
            <li className="brand-item">
              <a href="#">
                <img src={img_slack} alt="Slack" />
              </a>
            </li>
            <li className="brand-item">
              <a href="#">
                <img src={img_intercom} alt="Intercom" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
