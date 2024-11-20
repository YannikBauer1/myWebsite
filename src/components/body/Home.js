import React, { useState, useEffect } from "react";

import "./home.css";
import data from "../../data/data.json";

export default function Home() {
  const [xCenter, setxCenter] = useState(0);
  const [yCenter, setyCenter] = useState(0);

  useEffect(() => {
    const border = document.getElementById("borderProfile");
    const colorbox = document.getElementById("colorboxProfile");
    const image = document.getElementById("imageProfile");

    const updateCenters = () => {
      if (border) {
        const rect = border.getBoundingClientRect();
        setxCenter(rect.left + rect.width / 2);
        setyCenter(rect.top + rect.height / 2);
      }
    };

    const handleMouseMove = (e) => {
      updateCenters();

      const intensity = 1;

      const deltaX = ((xCenter - e.clientX) / xCenter) * intensity;
      const deltaY = ((yCenter - e.clientY) / yCenter) * intensity;

      if (border) {
        border.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
      if (colorbox) {
        colorbox.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
      if (image) {
        image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (border) {
        border.style.transform = `translate(0px, 0px)`;
      }
      if (colorbox) {
        colorbox.style.transform = `translate(0px, 0px)`;
      }
      if (image) {
        image.style.transform = `translate(0px, 0px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [xCenter, yCenter]);

  return (
    <div className="scrollspy-example" id="home">
      <div className="home d-none d-sm-flex justify-content-evenly">
        <div
          className="imageDiv me-4 d-flex align-items-center 
                    justify-content-center px-3"
        >
          <div className="imageInnerDiv">
            <div
              className="p-3 border border-black border-5"
              id="borderProfile"
            >
              <img
                src="images/profil.JPG"
                className="img-fluid"
                id="imageProfile"
                alt="Yannik Bauer"
                loading="eager"
                title="Yannik Bauer"
              />
            </div>
            <div className="colorBlock bg-primary" id="colorboxProfile" />
          </div>
        </div>
        <div
          className="informations pt-4 pt-sm-0 d-flex align-items-center 
                    justify-content-center flex-column"
        >
          <div className="text-start">
            <div className="fs-3 text-primary fw-bold">I'm a</div>
            <div className="titleHome pb-3 mb-4 text-primary fw-bold">
              Software Developer
            </div>
            <div className="d-flex flex-wrap">
              {data.home.skills.map((item, index) => (
                <div key={index} className="px-1 border border-1 border-primary m-1 rounded-3 text-primary chips">
                  {item}
                </div>
              ))}
            </div>
            <div className="textSign">Yannik Bauer</div>
          </div>
        </div>
      </div>

      <div
        className="homeXS d-flex d-sm-none align-items-center flex-column justify-content-center
                      "
      >
        <div className="px-3 mb-4 d-flex flex-column align-items-center">
          <div className="fs-6 text-primary fw-bold">I'm a</div>
          <div className="text-primary fw-bold fs-1 titleHome pb-2">
            Software Developer
          </div>
        </div>
        <div className="chipsDiv mb-4 px-4 d-flex flex-wrap justify-content-center">
          {data.home.skills.map((item, index) => (
            <div key={index} className="px-1 border border-1 border-primary m-1 rounded-3 text-primary fs-6_5">
              {item}
            </div>
          ))}
        </div>
        <div className="imageDiv mb-4">
            <div>
              <div
                className="p-3 border border-black border-5"
                id="borderProfile"
              >
                <img
                  src="images/profil.JPG"
                  className="img-fluid"
                  id="imageProfile"
                  alt="Yannik Bauer"
                  loading="eager"
                  title="Yannik Bauer"
                />
              </div>
              <div className="colorBlock bg-primary" id="colorboxProfile" />
            </div>
          </div>
      </div>
    </div>
  );
}
