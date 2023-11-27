import React, { useState } from "react";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom'

import "../style/component/AccordionNav.css";

const AccordionNav = () => {
    const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null);
    }
    setSelected(i)
  };

  return (
    <div>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="miniglobaccordion">
            <div className="titre" onClick={() => toggle(i)}>
              <h2>Menu {item.link}</h2>
              <span>{selected === i ? <IoIosCloseCircleOutline /> : <RiMenuSearchLine />}</span>
            </div>
            <div className="linkaccordion">

            <div className={selected === i ? 'content show' : 'content'}>
            <Link to='/productsdash'>Products</Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            <Link to='/allusers'></Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    link: "Dashboard",
  },
];  

export {AccordionNav, data};