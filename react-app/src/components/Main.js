import React from "react";

import Menu from "./Menu";
import Home from "./body/Home"
import AboutMe from "./body/AboutMe"
import Portfolio from "./body/Portfolio"
import Publications from "./body/Publications"
import Contact from "./body/Contact"

import './main.css';

export default function Main() {
  return (
    <div>
      <div className="menu menuWidth p-4">
        <Menu />
      </div>
      <div 
        className="bodyDiv" 
        data-bs-spy="scroll" 
        data-bs-target="#menuList" 
        data-bs-smooth-scroll="true" 
        tabindex="0"
      >
        <Home/>
        <AboutMe />
        <Portfolio />
        <Publications />
        <Contact />
      </div>
    </div>
  )
}
