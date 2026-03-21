import React from "react";
import logo from "../assets/images/logo.svg";
import icon_search from "../assets/images/icon_search.svg";
import icon_bag from "../assets/images/icon_bag.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="index.html">
            <img src={logo} alt="Pollock" />
          </a>

          <nav className="navigation">
            <ul className="menu-list">
              <li className="menu-item active">
                <a className="menu-link" href="#">
                  Home
                </a>

                <ul className="submenu-list">
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Home Page 1
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Home Page 2
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Home Page 3
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Home Page 4
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Home Page 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#">
                  Services
                </a>

                <ul className="submenu-list">
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Service 1
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Service 2
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Service 3
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Service 4
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Service 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#">
                  Pages
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#">
                  Blog
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-action">
            <button className="btn-icon">
              <img src={icon_search} alt="" />
            </button>
            <button className="btn-icon btn-bag">
              <img src={icon_bag} alt="" />
            </button>
            <button className="btn btn-primary btn-signup">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};
