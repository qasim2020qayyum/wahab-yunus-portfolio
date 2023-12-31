import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'
import './navbar.css'

const navbar = () => {
  const navLinks = [
    'home',
    'about',
    'services',
    'experience',
    'portfolio',
    'testimonials',
    'contacts',
  ]
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark position-fixed w-100'>
      <div className='container'>
        <Link className='navbar-brand' href='/' style={{color:' white'}}>
               <span>WAHAB</span><span style={{color:' teal'}}> YUNUS</span>
          {/* <img className='logo' src={logo} alt='My logo' /> */}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#f9ab00' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            {navLinks.map((link, index) => (
              <li className='nav-item'>
                <Link
                  smooth={true}
                  offset={-100}
                  to={
                    link === index
                      ? 'home'
                        ? 'about'
                          ? 'services'
                            ? 'experience'
                              ? 'portfolio'
                                ? 'testimonials'
                                  ? 'contacts'
                                  : link
                                : link
                              : link
                            : link
                          : link
                        : link
                      : link
                  }
                >
                  <NavLink
                    className='nav-link'
                    aria-current='page'
                    to={
                      link === index
                        ? '/home'
                          ? '/about'
                            ? '/services'
                              ? '/experience'
                                ? '/portfolio'
                                  ? '/testimonials'
                                    ? '/contacts'
                                    : link
                                  : link
                                : link
                              : link
                            : link
                          : link
                        : link
                    }
                  >
                    {link}
                  </NavLink>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
