import React, { useState, useEffect } from 'react';
import * as bootstrap from 'bootstrap';

import './aboutme.css';

export default function AboutMe() {

  const [activeSection, setActiveSection] = useState("education");

  const [collapses, setCollapses] = useState({
    collapse1: true,
    collapse2: true,
    collapse3: true,
    collapse4: true,
    collapse5: true,
    collapse6: true,
    collapse7: true
  });


  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, [activeSection]);


  return (
    <div className='mb-5 pb-5' id="about-me">
      <div className='fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary'>
        ABOUT ME
      </div>
      <div className='d-flex align-items-center pt-3 flex-column'>
        <div className='description'>
          Some tet about me blalblab lalb lsbl balksdlakf lkddddd asdkfn laskdnf ioaewlfkn alweknf lasdn flansidfn alksdnf lsdkanfl sn ldf
        </div>
        <div className='d-flex justify-content-evenly flex-row pt-5 pb-3 width1'>
          <div
            className={`fs-5 pointer ${activeSection === 'education' ? 'active text-primary' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </div>
          <div
            className={`fs-5 pointer ${activeSection === 'skills' ? 'active text-primary' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </div>
          <div
            className={`fs-5 pointer ${activeSection === 'experience' ? 'active text-primary' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </div>
        </div>
        {activeSection === 'education' && (
          <div className='width2'>
            <div className="list-group">
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Masters`s Degree in Computer Science
                </div>
                <div>
                  Faculty of Science of the University of Porto ( 2021 - 2023 )
                </div>
                <div className='collapse mt-2' id="collapse1">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                  <div>
                    Mobile Computing
                  </div>
                  <div>
                    Managment and Entrepreneurship
                  </div>
                  <div>
                    Advanced Topics in Databases
                  </div>
                  <div>
                    Embedded Systems
                  </div>
                  <div>
                    Data Mining 2
                  </div>
                  <div>
                    Bioinformatics
                  </div>
                  <div>
                    Big Data and Cloud Computing
                  </div>
                  <div>
                    Information Theory
                  </div>
                  <div>
                    Processing of Strcutured Documents
                  </div>
                  <div>
                    Software Project Managment
                  </div>
                  <div>
                    Algorithmus
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded={!collapses.collapse1}
                    aria-controls="collapse1"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse1: !prevState.collapse1 }))}
                  >
                    {collapses.collapse1 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Transferable Skills - Public Speaking
                </div>
                <div>
                  Faculty of Science of the University of Porto ( February 2023 )
                </div>
                <div className='collapse mt-2' id="collapse2">
                  <div className='mb-2'>
                    Grade: 18/20
                  </div>
                  <div>
                    Organize a Presentation 
                  </div>
                  <div>
                    Visual aids
                  </div>
                  <div>
                    Voice and language
                  </div>
                  <div>
                    Body language and gestures
                  </div>
                  <div>
                    Take control of the situation
                  </div>
                  <div>
                    Handeling the question and answer sessions
                  </div>
                  <div>
                    Inspire your audience
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded={!collapses.collapse2}
                    aria-controls="collapse2"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse2: !prevState.collapse2 }))}
                  >
                    {collapses.collapse2 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Bachelor`s Degree in Mathematics ( Complementary Formation in Informatics)
                </div>
                <div>
                  Faculty of Science of the University of Porto ( 2018 - 2021 )
                </div>
                <div className='collapse mt-2' id="collapse3">
                  <div className='mb-2'>
                    GPA: 15/20
                  </div>
                  <div>
                    Human-Machine Interfaces
                  </div>
                  <div>
                    Simulation and Stochastic Processes
                  </div>
                  <div>
                    Software Architecture
                  </div>
                  <div>
                    Managment
                  </div>
                  <div>
                    Optimization and Applications
                  </div>
                  <div>
                    Complex Analysis
                  </div>
                  <div>
                    Programming 2
                  </div>
                  <div>
                    Numerical Equations
                  </div>
                  <div>
                    Group Theory
                  </div>
                  <div>
                    Web Technologies
                  </div>
                  <div>
                    Probability and Statistics
                  </div>
                  <div>
                    Metabolism and Nutrition
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded={!collapses.collapse3}
                    aria-controls="collapse"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse3: !prevState.collapse3 }))}
                  >
                    {collapses.collapse3 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Fitness Trainer B license
                </div>
                <div>
                  OTL - Online Trainer Lizenz ( 2018 )
                </div>
                <div className='collapse mt-2' id="collapse4">
                  <div>
                    Structure and Function of the Cell
                  </div>
                  <div>
                    Classification and Function of Tissue Types
                  </div>
                  <div>
                    Cardiovascular System
                  </div>
                  <div>
                    Passive and Active Movement Apparatus
                  </div>
                  <div>
                    Human Anatomy
                  </div>
                  <div>
                    Training Theory
                  </div>
                  <div>
                    Motor Properties
                  </div>
                  <div>
                    Training Planning in Fitness and Weightlifting
                  </div>
                  <div>
                    Nutrition Science and Planning
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded={!collapses.collapse4}
                    aria-controls="collpase4"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse4: !prevState.collapse4 }))}
                  >
                    {collapses.collapse4 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'skills' && (
          <div className='width2'>
            <div className="list-group">
              <div className='list-group-item border rounded-0 mb-1 mt-2 bg-secondary py-2 px-3 d-flex align-items-center'>
                <div className='flex-grow-0'>
                  Fluent Languages:
                </div>
                <div className='d-flex justify-content-evenly flex-grow-1'>
                  <img src="images/germany.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="German" />
                  <img src="images/portugal.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="Portugues" />
                  <img src="images/states.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="English" />
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between jsBar'>
                  <div>
                    JS - VueJS, Strapi
                  </div>
                  <div>
                    90%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between reactBar'>
                  <div>
                    JS - React, Bootstrap
                  </div>
                  <div>
                    70%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between pythonBar'>
                  <div>
                    Python
                  </div>
                  <div>
                    70%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between postgresBar'>
                  <div>
                    SQL - Postgres
                  </div>
                  <div>
                    60%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between adobeBar'>
                  <div>
                    Adobe XD
                  </div>
                  <div>
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'experience' && (
          <div className='width2'>
            <div className="list-group">
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  FGPE++ Gamified Programming Learning at Scale - Research Grant
                </div>
                <div>
                  Inesc Tec ( Mai 2022 - Mai 2023 )
                </div>
                <div className='collapse mt-2' id="collapse5">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded={!collapses.collapse5}
                    aria-controls="collapse5"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse5: !prevState.collapse5 }))}
                  >
                    {collapses.collapse5 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Safe Cities - Research Grant
                </div>
                <div>
                  Faculty Science, University of Porto & Bosch ( March 2022 - Mai 2022 )
                </div>
                <div className='collapse mt-2' id="collapse6">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded={!collapses.collapse6}
                    aria-controls="collapse6"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse6: !prevState.collapse6 }))}
                  >
                    {collapses.collapse6 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Holiday Jobs / Student Jobs
                </div>
                <div>
                  Fabric: SKF, ZF, Siemens AG, Joyson PlasTic GmbH
                </div>
                <div>
                  Construction: Bömmel Bau
                </div>
                <div>
                  Tutoring: Math, Physics, Informatics
                </div>
                <div className='collapse mt-2' id="collapse7">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse7"
                    aria-expanded={!collapses.collapse7}
                    aria-controls="collapse7"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse7: !prevState.collapse7 }))}
                  >
                    {collapses.collapse7 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}