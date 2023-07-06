import React from 'react'
import Particles from './Particles'
import Typed from 'react-typed'
import './header.css'

const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
        <h1>I am Wahab Yunus</h1>
        <Typed
          className='typed-text'
          strings={[
            'MERN STACK DEVELOPER',
            'FULL STACK DEVELOPER',
            'NEXTJS DEVELOPER',
            'SHOPIFY DEVELOPER',
            'WORDPRESS DEVELOPER',
            '',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <a href='#' className='btn-main-offer'>
          contact me
        </a> */}
        {/* <a href='qasimResume.pdf' download="Qasim Qayyum Resume.pdf">
          <button className='btn btn-main-offer'>Get Resume</button>
        </a> */}
      </div>
    </section>
  )
}

export default Header
