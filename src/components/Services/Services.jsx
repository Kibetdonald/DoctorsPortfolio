import { React, useState } from "react";
import items from "./allData";
import ServicesMenu from "./ServicesMenu";
import Fade from "react-reveal/Fade";

export default function Services() {
  const [menuItem, setMenuItem] = useState(items);

  return (
    <div className="ServicesSection">
 <Fade bottom>
 <h2 className="ServicesTitle">Services</h2>
 </Fade>
      <br />
   <Fade bottom>
   <ServicesMenu menuItem={menuItem} />
   </Fade>
    </div>
  );
}
