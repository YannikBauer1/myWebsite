import React, { useState, useEffect } from 'react';

import './home.css';
import data from '../../data/data.json';

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

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [xCenter, yCenter]);

  return (
    <div className='scrollspy-example' id="home">
      <div className='home d-none d-sm-flex justify-content-evenly'>
        <div class="imageDiv me-5 me-sm-4 d-flex align-items-center 
                    justify-content-center">
          <div className='imageInnerDiv'>
            <div className='p-3 border border-black border-5' id="borderProfile">
              <img src="images/profil.JPG" className='img-fluid' id="imageProfile"/>
            </div>
            <div className='colorBlock bg-primary' id="colorboxProfile"/>
          </div>
        </div>
        <div class="informations pt-4 pt-sm-0 d-flex align-items-center 
                    justify-content-center flex-column">
          <div className='text-start'>
            <div className='fs-3 text-primary fw-bold'>
              I'm a
            </div>
            <div className='titleHome pb-3 mb-4 text-primary fw-bold'>
              Software Developer
            </div>
            <div>
              {data.home.skills.map(item => (
                <button type="button" class="smallButton btn btn-outline-primary" 
                  disabled>{item}</button>
              ))}
            </div>
            <div className='textSign'>
              Yannik Bauer
            </div>
          </div>
        </div>
      </div>


      <div className='home d-flex d-sm-none align-items-center flex-column
                      justify-content-evenly'>
        <div className='px-3 py-2'>
          <div className='imageDiv'>
            <div>
              <div className='p-3 border border-black border-5' id="borderProfile">
                <img src="images/profil.JPG" className='img-fluid' id="imageProfile"/>
              </div>
              <div className='colorBlock bg-primary' id="colorboxProfile"/>
            </div>
          </div>
        </div>
        <div className='chipsDiv px-4 py-2 text-center'>
          {data.home.skills.map(item => (
            <button type="button" class="smallButton btn btn-outline-primary" 
              disabled>{item}</button>
          ))}
        </div>
        <div className='textSign py-2 text-center'>
          Yannik Bauer
        </div>
      </div>
    </div>
  )
}