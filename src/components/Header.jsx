import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import moonIcon from '../../public/moonIcon.png'
import hamburger from '../../public/hamburgerMenu.png'
import closeButton from '../../public/closeButton.png'


function Header() {
  const [isHamburger, setIsHamburger] = useState(true)
  const location = useLocation()
  const hamburgerRef = useRef(null)
  const sideLinksRef = useRef(null)

  useEffect(() => {
    // Check if the clicked target is neither the side nav nor the hamburger button
    function handleClickOutside(e) {
      if (
        sideLinksRef.current &&
        !sideLinksRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsHamburger(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  function scrollToSections(e, id) {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <header
      style={{
        animationDelay: location.pathname === '/' ? '3.5s' : '1s'
      }}
    >
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
          <button ref={hamburgerRef} className={`nav--hamburger ${!isHamburger ? 'active' : ''}`} onClick={() => setIsHamburger(!isHamburger)}>
            {isHamburger ? <img src={hamburger} alt="" /> : <img src={closeButton} alt="" />}
          </button>
          <div ref={sideLinksRef} className={`nav--side-links ${isHamburger ? 'hide' : ''}`}>
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
