import React from "react";
import CompanyLogo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">
          <img src={CompanyLogo} alt="Insure" />
        </div>

        <div className="navbar_navigation">
          <div>
            <nav className="nav">
              <a href="/howWeWork" className="nav_link">
                HOW WE WORK
              </a>
              <a href="/css/" className="nav_link">
                BLOG
              </a>
              <a href="/js/" className="nav_link">
                ACCOUNT
              </a>
              <a href="/python/" className="nav_link active">
                VIEW PLANS
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
