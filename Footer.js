import React from 'react';
import { RiCopyrightLine } from "react-icons/ri";
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='footVal'>Made by <span> Prince</span> | All rights reserved 
        <RiCopyrightLine  className='copyWright'/>
        </div>
    </div>
  )
}

export default Footer