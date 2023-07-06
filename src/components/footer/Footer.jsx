import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
  <p>&#169;Copyright Wahab. All Rights Reserved</p>
  <div className="socialmedia">
                <a href="https://www.linkedin.com/in/wahabyunus/" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/linkedin.png"/></a>
                {/* <a href="https://www.facebook.com/profile.php?id=100007514293159" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/facebook-new.png"/></a>
                <a href="https://instagram.com/i.m_gr0ot?utm_medium=copy_link" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/instagram-new.png"/></a>
                <a href="https://twitter.com/Qasim20Qayyum" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/twitter-circled--v1.png"/></a> */}
            </div>
  {/* <p>Make In ReactJs</p> */}
  </div>
      
    </>
  )
}

export default Footer
