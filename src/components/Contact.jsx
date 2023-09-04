import React from 'react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import moonIcon from '../../public/moonIcon.png'
import instagramIcon from '../../public/footer/instagram.png'
import githubIcon from '../../public/footer/github.png'
import linkedinIcon from '../../public/footer/linkedin.png'
import upworkIcon from '../../public/footer/upwork.png'
import useOnScreen from './useOnScreen'

function Contact() {
  const location = useLocation()
  const footerRef = useRef()
  const isVisible = useOnScreen(footerRef)

  function scrollToSections(e, id) {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div id='contact'>
       <footer className={isVisible ? '' : 'invisible'} ref={footerRef}>
        <div className="footer--container">
          <div className="footer--container--first">
            <a href="" onClick={(e) => scrollToSections(e, 'hero')}>
              <img className='footer--icon' src={moonIcon} alt="" />
            </a>
            <h2>
              from Concept <br />
              to <span>Creation</span>
            </h2>
          </div>
          <div className="footer--container--second">
            <div className="footer--container--second--links">
              <a href="https://www.instagram.com/jharimo/" target='_blank'>
                <img src={instagramIcon} alt="" />
              </a>
              <a href="https://github.com/haharimoto" target='_blank'>
                <img src={githubIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/harry-harimoto-32338b123/" target='_blank'>
                <img src={linkedinIcon} alt="" />
              </a>
              <a href="https://www.upwork.com/freelancers/~0133d43d0682316f5f" target='_blank'>
                <img src={upworkIcon} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer--end">
          <div>
            <p>© 2023 haharimoto</p>
          </div>
          {location.pathname === '/' && <div className="footer--end--links">
            <a href='' onClick={(e) => scrollToSections(e, 'hero')}>Home</a>
            <a href='' onClick={(e) => scrollToSections(e, 'about')}>About</a>
            <a href='' onClick={(e) => scrollToSections(e, 'project')}>Project</a>
            <a href='' onClick={(e) => scrollToSections(e, 'content')}>Content</a>
            <a href='' onClick={(e) => scrollToSections(e, 'contact')}>Contact</a>
          </div>}
        </div>
      </footer>
    </div>
  )
}

export default Contact
