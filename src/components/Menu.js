import React, { useState } from 'react';

import './menu.css';
import data from '../data/data.json';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const formatForId = (str) => str.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <div className="pb-xl-5 pb-4 pt-3 d-flex justify-content-evenly fs-3 
                      text-primary">
          <div className='d-flex justify-content-center'>
            <img src="images/y.png" className='symbol img-fluid' alt=""/>
          </div>
          <div className='menuTitle d-none d-xl-flex align-items-center lh-sm 
                          text-center'>
            Yannik Bauer
          </div>
      </div>

      <div className="list-group" id="menuList">
        {data.menu.items.map((item, index) => (
          <a 
            key={index}
            href={`#${formatForId(item)}`} 
            className='my-2 border rounded-0 text-center list-group-item list-group-item-action'
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
      <div className='linksDiv pt-4 pb-1 d-flex justify-content-evenly'>
        {data.menu.contacts.map(item => (
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.description}>
            <div className='p-1 border border-black linksBlock'>
              <i class={'bi ' + item.icon}></i>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default App;
