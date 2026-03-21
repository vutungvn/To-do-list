import react from "react";
import img_project01 from "../../assets/images/img_project01.png";
import img_shape01 from "../../assets/images/img_shape01.png";
import icon_pc from "../../assets/images/icon_pc.svg";
import icon_chart from "../../assets/images/icon_chart.svg";
import icon_user from "../../assets/images/icon_user.svg";
import img_project02 from "../../assets/images/img_project02.png";
import img_shape02 from "../../assets/images/img_shape02.png";
import img_project03 from "../../assets/images/img_project03.png";
import img_shape03 from "../../assets/images/img_shape03.png";

export const SectionProject = () => {
  return (
    <section className="section section-project">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title title-md">
            Digital products that people love to use
          </h2>
          <p className="section-subtitle">
            Applying behavioral science to customer experience
          </p>
        </div>
        <div className="project-area">
          <div className="project">
            <div className="project-image">
              <img src={img_project01} />
              <img className="shape" src={img_shape01} />
            </div>
            <div className="project-content">
              <h3 className="section-title title-sm">Web3 Experience Design</h3>
              <p className="section-subtitle">
                In the new digital era, users are in control of content and
                community, and experience design is essential.
              </p>
              <ul className="project-info-list">
                <li className="project-info-item">
                  <img className="project-info-image" src={icon_pc} />
                  <div className="project-info-box">
                    <h4 className="project-info-title">
                      Design &amp; Development Systems
                    </h4>
                    <p className="project-info-text">
                      Chat, start meetings or join them with a click from within
                      your conversation.
                    </p>
                  </div>
                </li>
                <li className="project-info-item">
                  <img className="project-info-image" src={icon_chart} />
                  <div className="project-info-box">
                    <h4 className="project-info-title">
                      Digital Growth Strategy
                    </h4>
                    <p className="project-info-text">
                      Chat, start meetings or join them with a click from within
                      your conversation.
                    </p>
                  </div>
                </li>
                <li className="project-info-item">
                  <img className="project-info-image" src={icon_user} />
                  <div className="project-info-box">
                    <h4 className="project-info-title">User Journey Mapping</h4>
                    <p className="project-info-text">
                      Chat, start meetings or join them with a click from within
                      your conversation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={img_project02} />
              <img className="shape" src={img_shape02} />
            </div>
            <div className="project-content">
              <h3 className="section-title title-sm">
                We create world-class products
              </h3>
              <p className="section-subtitle">
                We're a web design agency creating next‑level websites by
                strategically blending user experience and brand storytelling.
              </p>
              <p className="section-subtitle">
                Our full‑stack design and development agency based in San
                Francisco provides front‑end and back‑end development services
                working closely with our designers. As a UX UI and app
                development company, we build native mobile apps for iOS and
                Android, web applications, apps for wearables, and
                B2B/enterprise software.
              </p>
              <button className="btn btn-primary btn-project">
                Discover Now
              </button>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src={img_project03} />
              <img className="shape" src={img_shape03} />
            </div>
            <div className="project-content">
              <h3 className="section-title title-sm">
                UI/UX design and branding agency
              </h3>
              <p className="section-subtitle">
                We start each new digital product design partnership with an
                in‑depth discovery phase to immerse ourselves in your business.
                Our UX/UI designers interview stakeholders, conduct user
                research, analyze your competition, and consolidate content.
              </p>
              <p className="section-subtitle">
                The result is an action plan on executing a holistic brand and
                user experience.
              </p>
              <button className="btn btn-primary btn-project">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
