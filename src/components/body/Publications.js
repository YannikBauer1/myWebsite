import React, { useEffect } from "react";
import * as bootstrap from "bootstrap";

import "./publications.css";
import data from "../../data/data.json";

export default function Publications() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <div className="pb-5 mb-3" id="publications">
      <div className="fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary">
        PUBLICATIONS
      </div>
      <div className="mt-4 pt-1">
        <ul className="text-black timeline pe-0 pt-0 pb-0">
          {data.publications.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`timelineItem custom_card my_card border bg-secondary border rounded-0 shadow-sm d-flex align-items-center ${
                  item.inProgress ? "" : "backgroundHover pointer"
                }`}
                data-date={item.date}
                {...(!item.inProgress && {
                  "data-bs-toggle": "modal",
                  "data-bs-target": `#exampleModal2${index}`,
                })}
              >
                {item.inProgress ? (
                  <div className="progressBackground"></div>
                ) : (
                  <></>
                )}
                <div className="textMiddle text-truncate">{item.title}</div>
                <div className="position-absolute bg-primary text-light smallText px-1 dateBox2 d-flex justify-content-center">
                  {item.type}
                </div>
              </li>
              <div
                className="modal fade"
                id={`exampleModal2${index}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <div className="bg-primary text-light fs-4 fw-bold py-2 px-4">
                        {item.title}
                      </div>
                      <div className="d-flex">
                        <div
                          className="bg-secondary rounded-start width20 py-3
                              d-flex flex-column align-items-center"
                        >
                          <div className="mb-4">
                            <a
                              href={item.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="me-3"
                            >
                              <i className="bi bi-file-arrow-down-fill fs-4 text-dark"></i>
                            </a>
                            <a
                              href={item.publisher}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="bi bi-file-earmark-text-fill fs-4 text-dark"></i>
                            </a>
                          </div>
                          <div className=" fw-bold mb-4 text-center smallText">
                            <div>
                              <i className="bi bi-clipboard-fill "></i>
                            </div>
                            {item.type}
                          </div>
                          <div className=" fw-bold mb-4 text-center smallText">
                            <div>
                              <i className="bi bi-calendar-fill"></i>
                            </div>
                            {item.date}
                          </div>
                        </div>
                        <div className="width80 p-3">
                          <div className="mb-2">
                            <i className="bi bi-person-lines-fill me-1"></i>{" "}
                            {item.authorsComplete}
                          </div>
                          <div className="smallText">
                            <span className="fw-bold">Abstract: </span>{" "}
                            {item.abstract}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
