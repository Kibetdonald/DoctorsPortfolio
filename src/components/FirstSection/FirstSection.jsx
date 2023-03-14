import React from "react";
import bannerImg from "../../Assets/Images/doctor.jpg";
import one from "../../Assets/Images/cdc.jpg";
import two from "../../Assets/Images/who.png";
import three from "../../Assets/Images/health.png";
import four from "../../Assets/Images/knh.png";
import "./FirstSection.scss";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function FirstSection() {
  return (
    <div>
      <div className="FirstSection">
        <div className="row">
          {/* First Column */}
          <div className="col-md-6 col-sm-12">
            <h2 className="bigtext">
              Ultimate
              <span className="ultimate"> Professional</span>
              <br />
              care for your health
            </h2>
            <p className="smalltext">
              At MedStar we believe that the health and well-being of our
              patients is our top priority, and we are dedicated to providing
              the highest quality medical care to ensure that you are able to
              live a healthy and fulfilling life.{" "}
            </p>
            <br />
            <a href="#" className="btn-letsgetstarted">
              Learn More
            </a>
            <br /> <br /> <br />
            <div className="row">
              <div className="col">
                <img src={two} alt="logos" />
              </div>
              {/* <div className="col">
                <img src={one} alt="logos" />
              </div> */}
              <div className="col">
                <img src={four} alt="logos" />
              </div>
              <div className="col">
                <img src={three} alt="logos" />
              </div>
              
            </div>
          </div>

          <div className="col-md-6 col-xs-0 ">
            <img src={bannerImg} className="bannerImage" alt="banner" />
            <div className="bottomSection" style={{ zIndex: "2" }}>
              <RiDoubleQuotesL className="quoteIcon" />

              <p className="quote">
              Nothing beats a good health and wellness. It's the key to unlocking a fulfilling life. 
              </p>
              <p className="author">Macharia James.</p>
              <p className="role">Vice President of the Executive Board (WHO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
