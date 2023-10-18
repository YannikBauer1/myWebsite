import * as bootstrap from 'bootstrap';
import React, { useState, useEffect } from 'react';


import './home.css';

export default function Home() {

  const [originalCenterX, setOriginalCenterX] = useState(0);
  const [originalCenterY, setOriginalCenterY] = useState(0);

  useEffect(() => {

    const profileDiv = document.getElementById("profileBox");
    if (profileDiv) {
      const rect = profileDiv.getBoundingClientRect();
      setOriginalCenterX(rect.left + rect.width / 2);
      setOriginalCenterY(rect.top + rect.height / 2);
    }


    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;


      // Normalize the difference, then invert it to move away from the mouse
      const deltaX = (originalCenterX - x) / originalCenterX;
      const deltaY = (originalCenterY - y) / originalCenterY;

      // Define the intensity of the movement
      const intensity = 3; // you can adjust this for stronger/weaker effect
      const intensity2 = 3;
      const intensity3 = 1;

      const profileDiv = document.getElementById("profileBox");
      const colorBlockDiv = document.getElementById("profileBoxColor");
      const imageBlockDiv = document.getElementById("profileImage");

      if (profileDiv) {
        profileDiv.style.transform = `translate(${deltaX * intensity}px, ${deltaY * intensity}px)`;
      }

      if (colorBlockDiv) {
        colorBlockDiv.style.transform = `translate(${deltaX * intensity2}px, ${deltaY * intensity}px)`;
      }

      if (imageBlockDiv) {
        imageBlockDiv.style.transform = `translate(${deltaX * intensity3}px, ${deltaY * intensity}px)`;
      }

    };


    const handleMouseLeave = () => {
      const profileDiv = document.getElementById("profileDiv");
      const colorBlockDiv = document.getElementById("colorBlockDiv");
      const imageBlockDiv = document.getElementById("profileImage");

      if (profileDiv) {
        profileDiv.style.transform = `translate(0px, 0px)`;
      }

      if (colorBlockDiv) {
        colorBlockDiv.style.transform = `translate(0px, 0px)`;
      }

      if (imageBlockDiv) {
        imageBlockDiv.style.transform = `translate(0px, 0px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='p-5 homeDiv row scrollspy-example' id="home">
      <div class="col-5 me-4 ms-5 d-flex align-items-center justify-content-center outDiv">
        <div className='border p-3 border-black border-5' id="profileBox">
          <img src="images/profil.JPG" className='img-fluid' id="profileImage" />
        </div>
        <div className='bg-primary colorBlock' id="profileBoxColor"></div>
      </div>
      <div class="col-5 ms-4 d-flex align-items-center justify-content-center flex-column">
        <div className='text-start'>
          <div className='fs-2 text-primary fw-bold'>
            I`m a
          </div>
          <div className='text-primary fw-bold homeTitle pb-3 mb-4'>
            Software Developer
          </div>
          <div>
            From back to front-end
          </div>
          <div>
            JS, Python, Java, Kotlin, ...
          </div>
          <div className='py-5 text-center sign fs-1'>
            Yannik Bauer
          </div>
        </div>
      </div>
    </div>
  )
}