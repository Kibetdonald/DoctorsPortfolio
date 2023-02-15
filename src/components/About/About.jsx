import React from "react";
import "./About.scss";
import about from "../../Assets/Images/doctor.jpg";
import bulb from "../../Assets/Images/yes.png";
import doctor1 from "../../Assets/Images/doctor1.jpg";
import doctor2 from "../../Assets/Images/Doctor2.jpg";
import { FiCheckSquare } from "react-icons/fi";

export default function About() {
  return (
    <div className="AboutSection">
      <h1 className="AboutTitle">About</h1>
      <br /> 
      {/* First Row */}
      <div className="row">
        <div className="col-md-6">
          <img src={doctor2} alt="About" className="AboutBanner" />
        </div>
        <div className="col-md-6">
        <h3 className="AboutSubTitle">About team</h3>
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
          <div className="AboutInfo">
            <img src={bulb} className="HiLightBulb" alt="bulb" />
            <span className="AboutDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              sunt, itaque quaerat consectetur ullam quia distinctio incidunt
              beatae hic culpa.
            </span>
          </div>
          <br />
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
        </div>
      </div>
      {/* Second row */}
      <br/>    <br/>    <br/>
      <div className="row">
        
        <div className="col-md-6">
          <h3 className="AboutSubTitle">About team</h3>
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
          <br />
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
        </div>
        <div className="col-md-6">
          <img src={doctor1} alt="About" className="AboutBanner" />
        </div>
        
      </div>
    </div>
  );
}
