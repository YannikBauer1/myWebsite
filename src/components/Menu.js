import * as bootstrap from 'bootstrap';

import './menu.css';

import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    'HOME',
    'ABOUT ME',
    'PORTFOLIO',
    'PUBLICATIONS',
    'CONTACT'
  ];

  const formatForId = (str) => str.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="left-menu p-4">
      <div className="py-5 pt-3 fs-3 text-primary container">
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <img src="images/y.png" className='img-fluid symbol'/>
          </div>
          <div className='col d-flex align-items-center menuTitle lh-sm'>
            Yannik Bauer
          </div>
        </div>
      </div>

      <div className="list-group" id="list-example">
        {items.map((item, index) => (
          <a 
            key={index}
            href={`#${formatForId(item)}`} 
            className={`my-2 border rounded-0 text-center list-group-item list-group-item-action`} 
            aria-current={index === activeIndex ? "true" : "false"}
            onClick={() => {
              if(item !== 'A disabled link item') {
                setActiveIndex(index);
              }
            }}
          >
            {item}
          </a>
        ))}
      </div>
      <div className='linksDiv pt-4 pb-1 px-5'>
        <a href="mailto:yannikbauer.1@gmail.com">
          <div className='p-1 border border-black linksBlock'>
            <i class="bi bi-envelope-fill"></i>
          </div>
        </a>
        <a href="https://github.com/YannikBauer1" target="_blank" rel="noopener noreferrer">
          <div className='p-1 border border-black linksBlock'>
            <i class="bi bi-github"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/yannik-bauer-53259b233/" target="_blank" rel="noopener noreferrer">
          <div className='p-1 border border-black linksBlock'>
            <i class="bi bi-linkedin"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;

/*
export default function Menu() {
  return (
    <div class="left-menu">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          HOME
        </a>
        <a href="#" class="list-group-item list-group-item-action">ABOUT ME</a>
        <a href="#" class="list-group-item list-group-item-action">PORTFOLIO</a>
        <a href="#" class="list-group-item list-group-item-action">PUBLICATIONS</a>
        <a href="#" class="list-group-item list-group-item-action">CONTACT</a>
      </div>
    </div>
  )
}*/

/**
<a href="#" class="list-group-item list-group-item-action">SERVICES</a>
<a href="#" class="list-group-item list-group-item-action">CUSTOMERS</a>
 */