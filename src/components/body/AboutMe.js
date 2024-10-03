import React, { useState } from 'react';

import './aboutme.css';
import data from '../../data/data.json';


export default function AboutMe() {

  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className='mb-5 pb-5' id="about-me">
      <div className='title pt-5 mt-5 pb-3 fs-1 text-center fw-semibold 
                      text-primary'>
        ABOUT ME
      </div>
      <div className='d-flex align-items-center pt-2 flex-column'>
        <div className='my-4 d-flex justify-content-between w-100'>
          {data.aboutMe.skills.map(item => (
            <div className='imgCont3 rounded-circle bg-secondary shadow-sm 
              d-flex justify-content-center align-items-center mx-1 my-1 skill_divs'>
              <img src={"images/" + item + ".png"} className='img-fluid' alt="" />
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-evenly flex-row pb-3 width1'>
          <div
            className={`linkText pointer ${activeSection === 'education' ? 'border-4 border-bottom border-black' : ''}`}
            onClick={() => setActiveSection('education')}>
            Education
          </div>
          <div
            className={`linkText pointer ${activeSection === 'experience' ? 'border-4 border-bottom border-black' : ''}`}
            onClick={() => setActiveSection('experience')}>
            Experience
          </div>
        </div>
        {activeSection === 'education' && (
          <div className="list-group w-100">
            {data.aboutMe.educations.map((item, index) =>
              <>
                <div
                  className='py-1 my-2 card_s
                    list-group-item border rounded-0 bg-secondary shadow-sm
                    d-flex align-items-center
                    pointer backgroundHover'
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${index}`}
                >
                  <div className='imgCont4 
                      d-flex justify-content-center align-items-center'>
                    <img
                      src={"images/" + item.locationImage}
                      className='img-fluid' alt=""
                    />
                  </div>
                  <div className='ps-1 textMiddle'>
                    {item.title}
                  </div>
                  <div className='position-absolute bg-primary px-1 dateBox 
                      text-light smallText
                      d-flex justify-content-center'>
                    {item.time}
                  </div>
                </div>
                <div
                  class="modal fade"
                  id={`exampleModal${index}`}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body p-0 d-flex">
                        <div className='position-absolute top-0 end-0 pt-4 pe-4'>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="bi bi-info-square-fill fs-4"></i>
                          </a>
                        </div>
                        <div className='bg-secondary rounded-start width20 
                              d-flex flex-column'>
                          <div className='imgCont6 
                                d-flex justify-content-center align-items-center 
                                my-4 mx-auto'>
                            <img
                              src={"images/" + item.locationImage}
                              className='img-fluid' alt="" />
                          </div>
                          <div className=" p-1 mt-2 mx-2">
                            <div className='fw-bolder text-center'>
                              {item.details.grade}
                            </div>
                            <div className='smallerText mt-2 text-center lineTop'>
                              GPA:
                            </div>
                          </div>
                          {item.details.add ? (
                            <div className="p-1 mt-4 mx-2">
                              <div className='smallText fw-bolder text-center'>
                                {item.details.masterThesis}
                              </div>
                              <div className='smallText fw-bolder text-center mt-1'>
                                {item.details.masterThesisGrade}
                              </div>
                              <div className='smallerText text-center mt-2 lineTop'>
                                {item.details.thesis}
                              </div>
                            </div>
                          ) : (<></>)}
                        </div>
                        <div className='width80'>
                          <div className='py-3 pt-4 px-4 fw-bolder titlePopUp'>
                            {item.degree}
                          </div>
                          <div className='bg-primary text-light px-4 py-2 titlePopUp'>
                            {item.connector} {item.in}
                          </div>
                          <div className='textMedium py-sm-3 py-1 pb-2 px-sm-4 px-2'>
                            {item.details.description}
                          </div>
                          <div className='textMedium pb-2 px-sm-4 pe-2'>
                            <ul>
                              {item.details.material.map((mat, index) =>
                                <li>
                                  {mat}
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {activeSection === 'experience' && (
          <div className="list-group w-100">
            {data.aboutMe.experiences.map((item, index) =>
              <>
                <div
                  className='my-2 py-1 card_s
                    list-group-item border rounded-0 bg-secondary shadow-sm
                    d-flex align-items-center
                    pointer backgroundHover'
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${index}`}>
                  <div className='imgCont4 d-flex justify-content-center align-items-center'>
                    <img src={"images/" + item.locationImage} className='img-fluid' alt="" />
                  </div>
                  <div className='textMiddle ps-1'>
                    {item.title}
                  </div>
                  <div className='position-absolute bg-primary text-light smallText px-1 dateBox d-flex justify-content-center'>
                    {item.time}
                  </div>
                </div>
                <div
                  class="modal fade"
                  id={`exampleModal${index}`}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body p-0 d-flex">
                        <div className='bg-secondary rounded-start width20 
                              d-flex flex-column pt-4'>
                          {item.images.map((img) =>
                            <div className='imgCont7 
                                  d-flex justify-content-center align-items-center 
                                   mx-auto mb-4'>
                              <img
                                src={"images/" + img} alt=""
                                className='img-fluid' />
                            </div>
                          )}
                        </div>
                        <div className='width80'>
                          <div className='py-sm-3 pt-sm-4 py-1 pt-2 px-4 fw-bolder titlePopUp'>
                            {item.type}
                          </div>
                          <div className='bg-primary text-light px-4 py-2 titlePopUp'>
                            {item.title}
                          </div>
                          {item.isCollection ? (
                            <div className='pt-3'></div>
                          ) : (
                            <div className='textMedium py-sm-3 py-1 pb-2 px-sm-4 px-2'>
                              {item.details.description}
                            </div>
                          )}
                          <div className='textMedium pb-2 px-sm-4 pe-2'>
                            {item.isCollection ? (
                              <>
                                {item.details.material.map((mat, index) =>
                                  <div className='ps-sm-0 ps-2 mb-3 position-relative'>
                                    <div className='smallText fw-bold'>{mat.job}</div>
                                    <div className='smallerText'>{mat.description}</div>
                                    <div className='position-absolute top-0 end-0 smallerText border text-primary px-1'>{mat.time}</div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <ul>
                                {item.details.material.map((mat, index) =>
                                  <li className='mb-2'>
                                    {mat}
                                  </li>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/*


import * as bootstrap from 'bootstrap';


  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, [activeSection]);


        <div className='description text-center'>
          Hello! I speak fluently
          <img
            src="images/germany.png"
            className='img-fluid flag mx-1'
            data-bs-toggle="tooltip"
            data-bs-title="German"
          />
          <img
            src="images/portugal.png"
            className='img-fluid flag mx-1'
            data-bs-toggle="tooltip"
            data-bs-title="Portugues"
          />
          <img
            src="images/states.png"
            className='img-fluid flag mx-1'
            data-bs-toggle="tooltip"
            data-bs-title="English"
          />,
          am a programmer specialized in front-end, back-end, and Data Science.
          Driven by a passion for technology and a strong work ethic, I
          constantly seek to grow personally as well as profesionally.
        </div>
*/
