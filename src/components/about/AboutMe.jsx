import React from 'react'
import './about.css'
import PicOfMe from './qasimprofile.jpeg'

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Picture of Qasim Qayyum'
            />
          </div>
        </div>
        <div className='aboutss col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>about me</h2>
          <p>
            Hello! I am Qasim Qayyum, a Software Engineer with 3.5+ years of experience in MERN/PERN Stack development. I hold a Bachelor of Science in Software Engineering from the University of Lahore and I'm AWS Certified Solution Architect – Associate.
            <br /><br />
            I specialize in developing full-stack applications using modern technologies like ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, PostgreSQL, and AWS cloud services. I have extensive experience in building scalable web applications, APIs, and cloud-based solutions.
            <br /><br />
            Currently working as a Software Engineer at Beyond Technologies, I've developed various applications including office management systems, LMS platforms, and AI-powered applications. I'm passionate about creating efficient, user-friendly solutions that solve real-world problems.
          </p>
          <p>
            MY SKILL SET: <span className='skills-color'>JavaScript 💻, NodeJs, ExpressJs, ReactJs, NextJs, MongoDB, PostgreSQL, AWS (EC2, S3, Lambda, Amplify), RESTful APIs, SCSS, CSS3, Tailwind, Material UI, Bootstrap, HTML5, RAG/Langchain</span>
          </p>
          <a href="Qasim's Resume.pdf" download="Qasim Qayyum Resume.pdf">
            <button className='btn btn-warning about-btn'>Get Resume</button>
          </a>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
