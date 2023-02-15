import { React, useState } from "react";
import items from "./allData";
import ServicesMenu from "./ServicesMenu";

export default function Services() {
  const [menuItem, setMenuItem] = useState(items);

  return (
    <div className="ServicesSection">
      <h2 className="ServicesTitle">Services</h2>
      <br />
      <ServicesMenu menuItem={menuItem} />
    </div>
  );
}
