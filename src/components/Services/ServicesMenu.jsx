import React from "react";
import PropTypes from "prop-types";
import "./Services.scss";
const ServicesMenu = ({ menuItem }) => {
  ServicesMenu.propTypes = {
    menuItem: PropTypes.number.isRequired,
  };
  return (
    <div className="item">
      {menuItem.map((item) => (
        <div className="item-con" key={item.id}>
          <div className="item-container">
            <img src={item.image} alt="" />
            <h2 className="ServiceTitle">{item.title}</h2>
            <p className="ServiceDescription">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesMenu;
