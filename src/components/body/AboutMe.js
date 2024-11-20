import React, { useState } from "react";

import "./aboutme.css";
import data from "../../data/data.json";

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="mb-5 pb-3" id="about-me">
      <div
        className="title pt-5 pb-3 fs-1 text-center fw-semibold 
                      text-primary"
      >
        ABOUT ME
      </div>
      <div className="d-flex align-items-center pt-2 flex-column">
        <div className="my-4 d-flex justify-content-between w-100 flex-nowrap test">
          <div className="scrolling-content d-flex justify-content-between w-100">
            {data.aboutMe.skills.map((item, index) => (
              <div
                key={index}
                className="imgCont3 rounded-circle bg-secondary shadow-sm 
                            d-flex justify-content-center align-items-center 
                            mx-1 my-1 skill_divs"
              >
                <img
                  src={"images/" + item + ".png"}
                  className="img-fluid"
                  alt={item}
                  title={item}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-evenly flex-row pb-3 width1">
          <div
            className={`linkText pointer ${
              activeSection === "education"
                ? "border-4 border-bottom border-black"
                : ""
            }`}
            onClick={() => setActiveSection("education")}
          >
            Education
          </div>
          <div
            className={`linkText pointer ${
              activeSection === "experience"
                ? "border-4 border-bottom border-black"
                : ""
            }`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </div>
        </div>
        {activeSection === "education" && (
          <div className="list-group w-100">
            {data.aboutMe.educations.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="my_card custom_card_2
                    list-group-item border rounded-0 bg-secondary shadow-sm
                    d-flex align-items-center
                    pointer backgroundHover"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${index}`}
                >
                  <div
                    className="cardIcons me-3
                      d-flex justify-content-center align-items-center"
                  >
                    <img
                      src={"images/" + item.locationImage}
                      className="img-fluid"
                      alt={item.location}
                      title={item.location}
                      loading="eager"
                    />
                  </div>
                  <div className="textMiddle text-truncate">{item.title}</div>
                  <div
                    className="position-absolute bg-primary px-1 dateBox 
                      text-light smallText
                      d-flex justify-content-center"
                  >
                    {item.time}
                  </div>
                </div>
                <div
                  className="modal fade"
                  id={`exampleModal${index}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body p-0 d-flex">
                        <div className="position-absolute top-0 end-0 pt-4 pe-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-arrow-up-right-square-fill fs-4"></i>
                          </a>
                        </div>
                        <div
                          className="bg-secondary rounded-start width20 
                              d-flex flex-column"
                        >
                          <div
                            className="imgCont6 
                                d-flex justify-content-center align-items-center 
                                my-4 mx-auto"
                          >
                            <img
                              src={"images/" + item.locationImage}
                              className="img-fluid"
                              alt={item.location}
                              title={item.location}
                              loading="eager"
                            />
                          </div>
                          <div className=" p-1 mt-2 mx-2">
                            <div className="fw-bolder text-center">
                              {item.details.grade}
                            </div>
                            <div className="smallerText mt-2 text-center lineTop">
                              GPA:
                            </div>
                          </div>
                          {item.details.add ? (
                            <div className="p-1 mt-4 mx-2">
                              <div className="fw-bolder text-center">
                                {item.details.masterThesisGrade}
                              </div>
                              <div className="smallerText text-center mt-2 lineTop">
                                {item.details.thesis}
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="width80 pb-3">
                          <div className="py-3 pt-4 px-3 fw-bolder titlePopUp">
                            {item.degree}
                          </div>
                          <div className="bg-primary text-light px-3 py-2 titlePopUp">
                            {item.connector} {item.in}
                          </div>
                          <div className="textMedium py-sm-2 py-1 pb-2 px-sm-3 px-2">
                            {item.details.description}
                          </div>
                          <div className="textMedium pb-2 px-sm-3 pe-2">
                            <ul>
                              {item.details.material.map((mat, index) => (
                                <li key={index}>{mat}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
        {activeSection === "experience" && (
          <div className="list-group w-100">
            {data.aboutMe.experiences.map((item, index) => (
              <>
                <div
                  key={index}
                  className="custom_card_2 my_card
                    list-group-item border rounded-0 bg-secondary shadow-sm
                    d-flex align-items-center
                    pointer backgroundHover"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${index}`}
                >
                  <div className="cardIcons me-3 d-flex justify-content-center align-items-center">
                    <img
                      src={"images/" + item.locationImage}
                      className="img-fluid"
                      alt={item.location}
                      title={item.location}
                      loading="eager"
                    />
                  </div>
                  <div className="textMiddle text-truncate">{item.title}</div>
                  <div className="position-absolute bg-primary text-light smallText px-1 dateBox d-flex justify-content-center">
                    {item.time}
                  </div>
                </div>
                <div
                  key={"b" + index}
                  className="modal fade"
                  id={`exampleModal${index}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body p-0 d-flex">
                        <div
                          className="bg-secondary rounded-start width20 
                              d-flex flex-column pt-4"
                        >
                          {item.images.map((img, index) => (
                            <div
                              key={index}
                              className="imgCont7 
                                  d-flex justify-content-center align-items-center 
                                   mx-auto mb-4"
                            >
                              <img
                                src={"images/" + img}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="width80 pb-3">
                          <div className="py-sm-3 pt-sm-4 py-1 pt-2 px-3 fw-bolder titlePopUp">
                            {item.type}
                          </div>
                          <div className="bg-primary text-light px-3 py-2 titlePopUp">
                            {item.title}
                          </div>
                          {item.isCollection ? (
                            <div className="pt-3"></div>
                          ) : (
                            <div className="textMedium py-sm-2 py-1 pb-2 px-sm-3 px-2">
                              {item.details.description}
                            </div>
                          )}
                          <div className="textMedium pb-2 px-sm-3 pe-2">
                            {item.isCollection ? (
                              <>
                                {item.details.material.map((mat, index) => (
                                  <div
                                    className="ps-sm-0 ps-2 mb-3 position-relative"
                                    key={index}
                                  >
                                    <div className="smallText fw-bold">
                                      {mat.job}
                                    </div>
                                    <div className="smallerText">
                                      {mat.description}
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <ul>
                                {item.details.material.map((mat, index) => (
                                  <li className="mb-2" key={index}>
                                    {mat}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
