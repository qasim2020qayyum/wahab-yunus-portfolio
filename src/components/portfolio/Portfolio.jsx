import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './portfolio.css'
import { portfolioData } from './data'

const Portfolio = () => {
  let portfolioImages = portfolioData()

  return (
    <>
    <main id='portfolio' className='portfolio-wrapper py-5'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='row'>
          {portfolioImages.map((item, key) => (
            <div className='col-lg-4 col-md-6 col-sm-12 my-3' key={key}>
              <div className='portfolio-card'>
                <div className='portfolio-image-box'>
                  <img
                    className='portfolio-img'
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className='portfolio-content'>
                  <h3 className='portfolio-title'>{item.title}</h3>
                  <p className='portfolio-description'>{item.description}</p>
                  <a 
                    href={item.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='portfolio-demo-btn'
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </main>
    </>
  )
}

export default Portfolio
