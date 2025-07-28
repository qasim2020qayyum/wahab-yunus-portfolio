import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
  <p>&#169;Copyright Qasim. All Rights Reserved</p>
  <div className="socialmedia">
                <a href="https://www.linkedin.com/in/qasim-qayyum-78a490214/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/qasim2020qayyum" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://qasim-website.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
            </div>
  {/* <p>Make In ReactJs</p> */}
  </div>
      
    </>
  )
}

export default Footer
