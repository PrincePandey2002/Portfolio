import React from 'react'
import './Hero.css';
import { useState,useEffect } from 'react';
// import HeroImg from './src/HeroImg.jpg';
import pricepic from "../assets/pricepic.png";

// For using the typing animation
import { ReactTyped } from "react-typed";

export default function Hero({scrollToContact}) {

  return (
    <div className='Hero'>

      <div className='left'>

        <div className='para'>
            <p>Hello, I am</p>
        </div>

        <div className='left-heading'>
            <h1><span>P</span>rince <span>P</span>andey </h1>
        </div>

        <div className='stack'>
            <h1>And I am a</h1>
            <ReactTyped className='animatedText' strings={[" Frontend Developer"," Competetive Programmer"," Coder", " Fast Learner"]} typeSpeed={50} backSpeed={60} loop={true}/>
        </div>

        <button className='hireMe' onClick={scrollToContact}>Hire Me</button>
      </div>


      <div className='right'>
            <img className='image' src={pricepic} alt='Hero'/>
      </div>


    </div>
  )
}

