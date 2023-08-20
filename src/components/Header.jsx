import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import moonIcon from '../../public/moonIcon.png'
import hamburger from '../../public/hamburgerMenu.png'
import closeButton from '../../public/closeButton.png'


function Header() {
  const [isHamburger, setIsHamburger] = useState(true)
  const location = useLocation()

  function scrollToSections(e, id) {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <header>
      <nav>
        <a href="/">
          <img className="nav--icon" src={moonIcon} alt="" />
        </a>
        {location.pathname === '/' && <div className="nav--links">
          <a href='' onClick={(e) => scrollToSections(e, 'about')}>About</a>
          <a href='' onClick={(e) => scrollToSections(e, 'project')}>Project</a>
          <a href='' onClick={(e) => scrollToSections(e, 'content')}>Content</a>
          <a href='' onClick={(e) => scrollToSections(e, 'contact')}>Contact</a>
        </div>}

        {location.pathname === '/' && <>
          <button className={`nav--hamburger ${!isHamburger ? 'active' : ''}`} onClick={() => setIsHamburger(!isHamburger)}>
            {isHamburger ? <img src={hamburger} alt="" /> : <img src={closeButton} alt="" />}
          </button>
          <div className={`nav--side-links ${isHamburger ? 'hide' : ''}`}>
            <a href='' onClick={(e) => scrollToSections(e, 'about')}>About</a>
            <a href='' onClick={(e) => scrollToSections(e, 'project')}>Project</a>
            <a href='' onClick={(e) => scrollToSections(e, 'content')}>Content</a>
            <a href='' onClick={(e) => scrollToSections(e, 'contact')}>Contact</a>
          </div>
        </>}
      </nav>
    </header>
  )
}

export default Header

// The event.preventDefault() method is used to stop the default action of an event from happening. In the case of an anchor (<a>) element, the default action on a click event is to navigate to the URL specified in the href attribute. Calling event.preventDefault() in a click event handler for an anchor element will stop this navigation from happening.
// The order in which they are executed is as follows:
// 1. The JavaScript onClick event handler is executed first
// 2. The default behavior (navigation) is executed next, unless it has been prevented in the JavaScript event handler
