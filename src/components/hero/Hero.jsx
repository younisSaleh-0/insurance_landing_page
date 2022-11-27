import React from "react";
import bgPatternLeft from "../../images/bg-pattern-intro-left-desktop.svg";
import bgPatternRight from "../../images/bg-pattern-intro-right-desktop.svg";
import IntroImg from "../../images/image-intro-desktop.jpg";
import Services from "../services/Services";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img className="bg_pattern_left" src={bgPatternLeft} alt="" />
        <div className="hero_details">
          <div className="hero_description">
            <h1>Humanizing your insurance</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button className="button">VIEW PLANS</button>
          </div>
          <div className="hero_image">
            <img src={IntroImg} alt="" />
          </div>
        </div>
        <img className="bg_pattern_right" src={bgPatternRight} alt="" />
      </div>
      <Services />
    </>
  );
};

export default Hero;
