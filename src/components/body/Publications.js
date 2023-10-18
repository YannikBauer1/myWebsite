import React, { useState } from 'react';

import './publications.css';

export default function Publications() {

  const [collapses, setCollapses] = useState({
    collapse1: true,
    collapse2: true,
    collapse3: true,
  });


  return (
    <div className='pb-5 mb-5' id="publications">
      <div className='fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary'>
        PUBLICATIONS
      </div>
      <div className='d-flex justify-content-center pt-3'>
        <div className='description'>
          Some tet about me blalblab lalb lsbl balksdlakf lkddddd asdkfn laskdnf ioaewlfkn alweknf lasdn flansidfn alksdnf lsdkanfl sn ldf
        </div>
      </div>
      <div className='mt-5'>
        <ul class="text-black timeline">
          <li class="timelineItem border bg-secondary p-3" data-date="20.10.2023">
            <div class="fs-5 fw-bolder mb-2">Improving Teachers UX in a VLE</div>
            <div>Paper | Yannik Bauer, José Paulo Leal, Ricardo Queirós</div>
            <div className='collapse mt-2' id="collapse1">
              <div className='mb-2'>
                <a href="" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm me-2'>PUBLISHER</a>
                <a href="" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm'>PDF</a>
              </div>
              <div>
                Abstract:
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
          </li>
          <li class="timelineItem border bg-secondary p-3" data-date="20.10.2023">
            <div class="fs-5 fw-bolder mb-2">Improving Teachers User Experience in a Virtual Learningn Environment</div>
            <div>Masters Thesis | Yannik Bauer</div>
            <div className='collapse mt-2' id="collapse2">
              <div className='mb-2'>
                <a href="" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm'>DOWNLOAD</a>
              </div>
              <div class="smallText">
                Abstract: This thesis outlines the development of the teacher’s User Interface (UI) and the back-
                end system for Agni, a web playground for learning JavaScript. The goal of this work is
                to deliver a good User Experience (UX) to teachers through an intuitive and user-friendly
                UI containing useful functionalities. Therefore, the focus shifts from the more commonly
                explored research on student experiences to the teacher. To realize this goal, the initial
                hypothesis was to use a headless Content Management System (CMS), Strapi. However,
                it was evaluated as unintuitive and time-consuming. Consequently, the development of a
                new UI became crucial, employing the headless CMS for the Application Interface (API)
                and back-end data storage. The primary concept for the developed UI was to use the
                existing Agni student UI and make it editable. Also, several innovative features were in-
                tegrated, including the integration of an external exercise repository, namely AuthorKit,
                the statistical analysis of student engagement, and content sequencing. Further, an ex-
                periment on generating programming exercises using GPT was conducted, and GPT was
                integrated into the system to assist teachers in the process of creating exercises. Finally,
                the evaluation of the developed UI revealed significant enhancements compared to the
                Strapi assessments, with an overall positive review. Evaluators primarily highlighted the
                intuitive and simplistic nature of the UI, thereby affirming the successful realization of
                the principal objective: to create a teacher’s UI that is both intuitive and user-friendly.
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
          </li>
          <li class="timelineItem border bg-secondary p-3" data-date="20.10.2023">
            <div class="fs-5 fw-bolder mb-2">Can a Content Managment System provide a good User Experience to Teachers?</div>
            <div>Short Paper | Yannik Bauer, José Paulo Leal, Ricardo Queirós</div>
            <div className='collapse mt-2' id="collapse3">
              <div className='mb-2'>
                <a href="https://drops.dagstuhl.de/opus/volltexte/2023/18500/" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm me-2'>PUBLISHER</a>
                <a href="https://drops.dagstuhl.de/opus/volltexte/2023/18500/pdf/OASIcs-ICPEC-2023-4.pdf" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm'>PDF</a>
              </div>
              <div class="smallText">
                Abstract: The paper discusses an ongoing project that aims to enhance the UX of teachers while using
                e-learning systems. Specifically, the project focuses on developing the teacher’s user interface (UI)
                for Agni, a web-based code playground for learning JavaScript. The goal is to design an intuitive UI
                with valuable features that will encourage more teachers to use the system. To achieve this goal,
                the paper explores the use of a headless Content Management System (CMS) called Strapi. The
                primary research question the paper seeks to answer is whether a headless CMS, specifically Strapi,
                can provide a good UX to teachers. A usability evaluation of the built-in Strapi UI for content
                creation and management reveals it to be generally consistent and user-friendly but challenging and
                unintuitive to create courses with programming exercises. As a result, the decision was made to
                develop a new teacher’s UI based on the existing Agni UI for students in an editable version. Once
                the development is complete, a new usability evaluation of the fully developed teacher’s UI will be
                conducted with the Strapi UI evaluation as a baseline for comparison.
              </div>
            </div>
            <div className='mt-3'>
              <button
                className="btn btn-outline-primary btn-sm"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded={!collapses.collapse3}
                aria-controls="collapse3"
                onClick={() => setCollapses(prevState => ({ ...prevState, collapse3: !prevState.collapse3 }))}
              >
                {collapses.collapse3 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}