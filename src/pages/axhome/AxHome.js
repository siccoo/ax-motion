import React from 'react';
import Navbar from '../../components/navbar';
import { RiCloseFill } from "react-icons/ri";

import "./axhome.css";


const AxHome = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="left__side">
          <span className='close__btn'>
            <RiCloseFill style={{ color: "#0C4271" }} />
          </span>
        </div>
        <div className='right__side'>

        </div>
      </div>
    </>
  );
};

export default AxHome;
