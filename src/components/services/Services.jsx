import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import PaidIcon from "@mui/icons-material/Paid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import bgPattern from "../../images/bg-pattern-intro-right-desktop.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="service_container">
        <div className="line"></div>
        <h1>We're different</h1>
        <div className="our_services">
          <div className="service one">
            <BoltIcon className="icon" />
            <h2>Snappy Process</h2>
            <p>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
          <div className="service teo">
            <PaidIcon className="icon" />
            <h2> Affordable Prices</h2>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="service three">
            <AccountCircleIcon className="icon" />
            <h2> People First</h2>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </div>

      <div className="service_more">
        <h1>Find out more about how we work</h1>
        <div className="button">
          <button>HOW WE WORK</button>
        </div>
        <img src={bgPattern} alt="" />
      </div>
    </div>
  );
};

export default Services;
