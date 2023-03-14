import React from "react";
import bannerImg from "../../Assets/Images/doctor.jpg";
import one from "../../Assets/Images/cdc.jpg";
import two from "../../Assets/Images/who.png";
import three from "../../Assets/Images/health.png";
import four from "../../Assets/Images/knh.png";
import "./FirstSection.scss";
import { RiDoubleQuotesL } from "react-icons/ri";
import Fade from "react-reveal/Fade";

export default function FirstSection() {
  return (
    <div>
      <div className="FirstSection">
        <div className="row">
          {/* First Column */}
          <div className="col-md-6 col-sm-12">
            <Fade top>
              <h2 className="bigtext">
                Ultimate
                <span className="ultimate"> Professional</span>
                <br />
                care for your health
              </h2>
            </Fade>
            <Fade bottom>
              <p className="smalltext">
                At MedStar we believe that the health and well-being of our
                patients is our top priority, and we are dedicated to providing
                the highest quality medical care to ensure that you are able to
                live a healthy and fulfilling life.{" "}
              </p>
            </Fade>
            <br />
            <Fade bottom>
              <a href="#" className="btn-letsgetstarted">
                Learn More
              </a>
            </Fade>
            <br /> <br /> <br />
            <Fade left>
              <div className="row">
               
                <div className="col-2">
                  <img
                    src={four}
                    alt="logos"
                    style={{ width: "130px", height: "55px" }}
                  />
                </div>
                <div className="col-2">
                  <img
                    src={three}
                    alt="logos"
                    style={{ width: "130px", height: "55px" }}
                  />
                </div>
                <div className="col-1">
                  
                </div>
                <div className="col-2">
                  <img
                    src={two}
                    alt="logos"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-md-6 col-xs-0 ">
            <Fade bottom>
              <img src={bannerImg} className="bannerImage" alt="banner" />
            </Fade>
            <Fade left>
              <div className="bottomSection" style={{ zIndex: "2" }}>
                <RiDoubleQuotesL className="quoteIcon" />

                <p className="quote">
                  Nothing beats a good health and wellness. It's the key to
                  unlocking a fulfilling life. 
                </p>
                <p className="author">Macharia James.</p>
                <p className="role">
                  Vice President of the Executive Board (WHO)
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
