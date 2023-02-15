import React from "react";
import bannerImg from "../../Assets/Images/doctor.jpg";
import one from "../../Assets/Images/1.svg";
import two from "../../Assets/Images/2.svg";
import three from "../../Assets/Images/3.svg";
import four from "../../Assets/Images/4.svg";
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
              <div className="col">
                <img src={one} alt="logos" />
              </div>
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
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={186.223} height={249.21} viewBox="0 0 186.223 249.21" style={{marginLeft: "400px"}} >
      <g data-name="Group 102" fill="#bebdce">
        <g data-name="Group 59" transform="translate(-.09 .208)">
          <ellipse data-name="Ellipse 1" cx={4} cy={5} rx={4} ry={5} transform="translate(.228 -.08)" />
          <circle data-name="Ellipse 2" cx={4.565} cy={4.565} r={4.565} transform="translate(.09 39.806)" />
          <circle data-name="Ellipse 3" cx={4.565} cy={4.565} r={4.565} transform="translate(.09 79.819)" />
          <circle data-name="Ellipse 4" cx={4.565} cy={4.565} r={4.565} transform="translate(.09 119.833)" />
          <circle data-name="Ellipse 5" cx={4.565} cy={4.565} r={4.565} transform="translate(.09 159.846)" />
          <circle data-name="Ellipse 6" cx={4.565} cy={4.565} r={4.565} transform="translate(.09 199.859)" />
          <circle data-name="Ellipse 7" cx={4.565} cy={4.565} r={4.565} transform="translate(.09 239.873)" />
        </g>
        <g data-name="Group 60" transform="translate(35.419)">
          <circle data-name="Ellipse 8" cx={4.565} cy={4.565} r={4.565} />
          <circle data-name="Ellipse 9" cx={4.565} cy={4.565} r={4.565} transform="translate(0 40.014)" />
          <circle data-name="Ellipse 10" cx={4.565} cy={4.565} r={4.565} transform="translate(0 80.027)" />
          <circle data-name="Ellipse 11" cx={4.565} cy={4.565} r={4.565} transform="translate(0 120.041)" />
          <circle data-name="Ellipse 12" cx={4.565} cy={4.565} r={4.565} transform="translate(0 160.054)" />
          <circle data-name="Ellipse 13" cx={4.565} cy={4.565} r={4.565} transform="translate(0 200.067)" />
          <circle data-name="Ellipse 14" cx={4.565} cy={4.565} r={4.565} transform="translate(0 240.081)" />
        </g>
        <g data-name="Group 61" transform="translate(70.838)">
          <circle data-name="Ellipse 15" cx={4.565} cy={4.565} r={4.565} />
          <circle data-name="Ellipse 16" cx={4.565} cy={4.565} r={4.565} transform="translate(0 40.014)" />
          <circle data-name="Ellipse 17" cx={4.565} cy={4.565} r={4.565} transform="translate(0 80.027)" />
          <circle data-name="Ellipse 18" cx={4.565} cy={4.565} r={4.565} transform="translate(0 120.041)" />
          <circle data-name="Ellipse 19" cx={4.565} cy={4.565} r={4.565} transform="translate(0 160.054)" />
          <circle data-name="Ellipse 20" cx={4.565} cy={4.565} r={4.565} transform="translate(0 200.067)" />
          <circle data-name="Ellipse 21" cx={4.565} cy={4.565} r={4.565} transform="translate(0 240.081)" />
        </g>
        <g data-name="Group 62" transform="translate(106.256)">
          <circle data-name="Ellipse 22" cx={4.565} cy={4.565} r={4.565} />
          <circle data-name="Ellipse 23" cx={4.565} cy={4.565} r={4.565} transform="translate(0 40.014)" />
          <circle data-name="Ellipse 24" cx={4.565} cy={4.565} r={4.565} transform="translate(0 80.027)" />
          <circle data-name="Ellipse 25" cx={4.565} cy={4.565} r={4.565} transform="translate(0 120.041)" />
          <circle data-name="Ellipse 26" cx={4.565} cy={4.565} r={4.565} transform="translate(0 160.054)" />
          <circle data-name="Ellipse 27" cx={4.565} cy={4.565} r={4.565} transform="translate(0 200.067)" />
          <circle data-name="Ellipse 28" cx={4.565} cy={4.565} r={4.565} transform="translate(0 240.081)" />
        </g>
        <g data-name="Group 63" transform="translate(141.675)">
          <circle data-name="Ellipse 29" cx={4.565} cy={4.565} r={4.565} />
          <circle data-name="Ellipse 30" cx={4.565} cy={4.565} r={4.565} transform="translate(0 40.014)" />
          <circle data-name="Ellipse 31" cx={4.565} cy={4.565} r={4.565} transform="translate(0 80.027)" />
          <circle data-name="Ellipse 32" cx={4.565} cy={4.565} r={4.565} transform="translate(0 120.041)" />
          <circle data-name="Ellipse 33" cx={4.565} cy={4.565} r={4.565} transform="translate(0 160.054)" />
          <circle data-name="Ellipse 34" cx={4.565} cy={4.565} r={4.565} transform="translate(0 200.067)" />
          <circle data-name="Ellipse 35" cx={4.565} cy={4.565} r={4.565} transform="translate(0 240.081)" />
        </g>
        <g data-name="Group 64" transform="translate(177.094)">
          <circle data-name="Ellipse 36" cx={4.565} cy={4.565} r={4.565} />
          <circle data-name="Ellipse 37" cx={4.565} cy={4.565} r={4.565} transform="translate(0 40.014)" />
          <circle data-name="Ellipse 38" cx={4.565} cy={4.565} r={4.565} transform="translate(0 80.027)" />
          <circle data-name="Ellipse 39" cx={4.565} cy={4.565} r={4.565} transform="translate(0 120.041)" />
          <circle data-name="Ellipse 40" cx={4.565} cy={4.565} r={4.565} transform="translate(0 160.054)" />
          <circle data-name="Ellipse 41" cx={4.565} cy={4.565} r={4.565} transform="translate(0 200.067)" />
          <circle data-name="Ellipse 42" cx={4.565} cy={4.565} r={4.565} transform="translate(0 240.081)" />
        </g>
      </g>
    </svg> */}

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
