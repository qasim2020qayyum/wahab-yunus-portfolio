import React from 'react'
import Particles from './Particles'
import { TypeAnimation } from 'react-type-animation'
import './header.css'

const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
        <h1>I am Qasim Qayyum</h1>
        <TypeAnimation
          className='typed-text'
          sequence={[
            'SOFTWARE ENGINEER',
            1000,
            'MERN STACK DEVELOPER',
            1000,
            'PERN STACK DEVELOPER',
            1000,
            'FULL STACK DEVELOPER',
            1000,
            'AWS CERTIFIED DEVELOPER',
            1000,
            '',
            1000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
        <a href="Qasim's Resume.pdf" download="Qasim Qayyum Resume.pdf">
          <button className='btn btn-main-offer'>Get Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Header
