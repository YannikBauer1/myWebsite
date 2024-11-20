import React from "react";

import Menu from "./Menu";
import Home from "./body/Home";
import AboutMe from "./body/AboutMe";
import Portfolio from "./body/Portfolio";
import Publications from "./body/Publications";
import Contact from "./body/Contact";

import "./main.css";
import data from "../data/data.json";

export default function Main() {
  return (
    <div>
      <div className="menu menuWidth p-4">
        <Menu />
      </div>
      <div className="d-flex d-sm-none bg-primary position-fixed w-100 text-white shadow py-3 px-3 rounded-bottom index justify-content-between align-items-center">
        <div className="w-25">
          <img
            src="images/y.png"
            className="appbar"
            alt="Yannik Bauer Icon"
            loading="eager"
            title="Yannik Bauer Icon"
          />
        </div>
        <div>Yannik Bauer</div>
        <div className="w-25 d-flex justify-content-end">
          {data.menu.contacts.map((item, index) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.description}
              className="text-white mx-1 fs-6_5"
              key={index}
            >
              <i className={"bi " + item.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div
        className="bodyDiv"
        data-bs-spy="scroll"
        data-bs-target="#menuList"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        <Home />
        <AboutMe />
        <Portfolio />
        <Publications />
        <Contact />
      </div>
    </div>
  );
}
