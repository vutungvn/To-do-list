import React from "react";
import logo_light from "../assets/images/logo_light.svg";
import icon_facebook from "../assets/images/icon_facebook.svg";
import icon_twitter from "../assets/images/icon_twitter.svg";
import icon_linkedin from "../assets/images/icon_linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <a href="#">
              <img src={logo_light} />
            </a>
          </div>
          <div className="footer-column">
            <h3 className="column-title">Company</h3>
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  About
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Work
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Careers
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Pricing
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="column-title">Services</h3>
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Branding
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Websites
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Development
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Strategy
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Platforms
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="column-title">Contact</h3>
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Help Desk
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Docs
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Open a Ticket
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Chat
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Forum
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="column-title">Newsletter</h3>
            <form className="footer-form">
              <p className="column-text">
                Subscribe to our newsletter to keep up to date on our marketing,
                website, design services, and tips.
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter email"
                />
                <button className="btn btn-primary">Submit</button>
              </div>
              <p className="column-text">
                We hate spam as much as you do. We will never, ever send you
                such emails.
              </p>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy-right">
            © 2022 Pollock LLC. All Rights Reserved. Terms &amp; Conditions.
            Privacy Policy.
          </p>
          <div className="socials">
            <a href="" className="social-link">
              <img src={icon_facebook} />
            </a>
            <a href="" className="social-link">
              <img src={icon_twitter} />
            </a>
            <a href="" className="social-link">
              <img src={icon_linkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
