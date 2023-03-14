import React from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";
import doctor1 from "../../Assets/Images/doctor1.jpg";
import doctor2 from "../../Assets/Images/Doctor2.jpg";
import { FiCheckSquare } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";


export default function About() {
  return (
    <div className="AboutSection">
   <Fade bottom>
   <h1 className="AboutTitle">About</h1>
   </Fade>
      <br />  <br /> 
      {/* First Row */}
      <div className="row">
        <div className="col-md-6">
        <Fade bottom>
        <img src={doctor2} alt="About" className="AboutBanner" style={{borderTopLeftRadius: "30%"}}/>
        </Fade>
        </div>
        <div className="col-md-6">
          <Fade bottom>
          <h3 className="AboutSubTitle">About team</h3>
          </Fade>
          <Fade bottom>
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
          </Fade>
      
         
          <Fade bottom>
          <div className="AboutInfo">
           
           <HiOutlineLightBulb className="HiLightBulb" />
           <span className="AboutDescription">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
             sunt, itaque quaerat consectetur</span>
         </div>
          </Fade>
          <br />
          <Fade bottom>
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
          </Fade>
        </div>
      </div>
      {/* Second row */}
      <br/>    <br/>    <br/> <br />  <br />  
      <div className="row">
        
        <div className="col-md-6">
          <Fade bottom>
          <h3 className="AboutSubTitle">About team</h3>
          </Fade>
          <Fade bottom>
          <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
          </Fade>
        <Fade bottom>
        <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
        </Fade>
          <br />
        <Fade bottom>
        <p className="AboutDescription">
            <FiCheckSquare className="FiCheckSquare" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt,
            itaque quaerat consectetur ullam quia distinctio incidunt beatae hic
            culpa. Sit inventore quae voluptatibus unde voluptas rerum! Illum,
            maiores ex.
          </p>
        </Fade>
        </div>
        <div className="col-md-6">
         <Fade bottom>
         <img src={doctor1} alt="About" className="AboutBanner" style={{borderTopRightRadius: "30%"}}/>
         </Fade>
        </div>
      
      </div>
      <br />  <br /> 
    </div>
  );
}
