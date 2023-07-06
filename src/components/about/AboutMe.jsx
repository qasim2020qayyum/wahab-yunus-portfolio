import React from 'react'
import './about.css'
import PicOfMe from './me.jpeg'

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Picture of Author'
            />
          </div>
        </div>
        <div className='aboutss col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>about me</h2>
          <p>
            Hello! I am Wahab. I have been developing websites for over 5
            years.  I am a professional web developer and graphic designer.
            I specialize in ReactJS, NodeJS, ExpressJS, NextJS, Redux, TypeScript, Javascript, MERN Stack.😊
            <br /><br />
            What makes me perfect for your project?
            <br />
            I combine good design, with great UX (user experience), CX (conversion optimization), and SEO (search engine optimization). I have a great eye for design and I write amazing codes as well, which makes me a (unicorn).
            <br /><br />
            Need a great website to generate revenue or serve your clients?🤓  I can provide you with a solution to do both and also increase your presence online. My experience in the web development field is top-notch and ready to serve your business.
          </p>
          <p>
            MY SKILL SET: <span className='skills-color'>ReactJs 💻, NextJs, TypeScript, JavaScript , NodeJs, ExpressJs, MongoDb, SAAS, BootStrap, Tailwind, HTML5, CSS3, C++, OOP, DS, JAVA, Figma</span>
          </p>
          {/* <a href='qasimResume.pdf' download="Qasim Qayyum Resume.pdf">
          <button className='btn btn-warning about-btn'>Get Resume</button>
        </a> */}

        </div>
      </div>
    </section>
  )
}

export default AboutMe
