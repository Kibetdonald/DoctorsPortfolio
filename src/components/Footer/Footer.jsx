import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Footer.scss";
import { SocialIcon } from "react-social-icons";
import { FaArrowUp } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="FooterSection">
      <footer className="footer">
        <ScrollToTop
          component={<FaArrowUp />}
          style={{
            color: "#008dc9",
            fontSize: "30px",
            width: "0px",
            boxShadow: "none",
            height: "0px",
            paddingBottom: "1em",
            paddingRight: "0.6em",
            backgroundColor: "transparent",
          }}
          smooth
        />
        <div className="container">
          <div className="footer-section">
            <div className="footer-col">
              <Fade bottom>
                <h4>Get Started</h4>
              </Fade>
              <Fade bottom>
                <ul>
                  <li>
                    <a href="#">Collaboration Platform</a>
                  </li>
                  <li>
                    <a href="#">Q&A Platform</a>
                  </li>
                  <li>
                    <a href="#">Document Repository</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </Fade>
            </div>
            <div className="footer-col">
              <Fade bottom>
                <h4>Quick Links</h4>
              </Fade>
              <Fade bottom>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </Fade>
            </div>

            <div className="footer-col">
              <Fade bottom>
                <h4>Services</h4>
              </Fade>
              <Fade bottom>
                <ul>
                  <li>
                    <a href="#">Physical Therapy</a>
                  </li>
                  <li>
                    <a href="#">Cardiology</a>
                  </li>
                  <li>
                    <a href="#">Surgery</a>
                  </li>
                  <li>
                    <a href="#">Lab Services</a>
                  </li>
                  <li>
                    <a href="#">Theraputics</a>
                  </li>
                </ul>
              </Fade>
            </div>
            <div className="footer-col">
              <Fade bottom>
                <h4>Reach out to us</h4>
              </Fade>
              <Fade bottom>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="google"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="linkedin"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="twitter"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="instagram"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                </div>
              </Fade>
            </div>
          </div>

          {/* Footer section ends here */}

          <div className="SubLandingPageFooter">
            <Fade bottom>
              <hr />
            </Fade>

            <Fade bottom>
              <p className="textTwo">
                © 2022 Copyright MedStar. All Rights Reserved.
              </p>
            </Fade>
          </div>
        </div>
      </footer>
    </div>
  );
}
