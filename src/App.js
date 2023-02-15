import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FirstSection from "./components/FirstSection/FirstSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <FirstSection />
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
