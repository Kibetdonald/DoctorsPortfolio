import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavHashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../Assets/Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="Navbar">
        {/* <a href="/" className="nav-logo">
          MedStar
        </a> */}
        <img src={Logo} alt="logo" className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavHashLink to="/#about">About </NavHashLink>
          <NavHashLink to="/#features">Services</NavHashLink>
          <NavHashLink to="/#works"> Testimonials </NavHashLink>
          <NavHashLink to="/#faq">FAQ </NavHashLink>
          <NavHashLink to="/#contact">Contact Us </NavHashLink>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
