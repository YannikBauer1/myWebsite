import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import data from "../data/data.json"

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
      <Menu />

      <div className="bodyDiv" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabindex="0">
        <Home/>

        <AboutMe />

        <Portfolio />

        <Publications />

        <Contact />
      </div>
    </div>
  )
}
/*

        <Router>
            <Header data={data.header} />

            <Routes>
                {data.body.map(body => (
                    <Route key={body.id} path={data.header.links.find(h =>h.id == body.linkId).url} element={<Body data={body} />} />
                ))}
            </Routes>

            
            <Footer data={{footer:data.footer,bottom:data.bottom}}/>
        </Router>

<Routes>
                <Route key="main1" path="/" element={<Body data={data.data.attributes.main} />} />
                {data.data.attributes.body.map(b => (
                    <Route key={b.id} path={b.header.path} element={<Body data={b} />} />
                ))}
            </Routes>
            <Footer data={data.data.attributes.footer} />


function headerData(data) {
    return { body: data.data.attributes.body.map(e => e.header), header: data.data.attributes.header }
}*/


