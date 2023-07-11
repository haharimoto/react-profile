import React from 'react'
import avatar from '../../public/avatar.jpg'
import { useState, useEffect } from 'react'


function Header() {
  const [activeLink, setActiveLink] = useState('about')

  //* understand this useEffect
  useEffect(() => {
    // Responsive Navbar effect
    function handleScroll() {
      const about = document.getElementById('about')
      const project = document.getElementById('project')
      const content = document.getElementById('content')
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      const threshold = window.innerHeight / 2

      if (scrollPosition < about.offsetTop + about.offsetHeight) {
        setActiveLink('about')
      } else if (scrollPosition < project.offsetTop + threshold) {
        setActiveLink('project')
      } else if (scrollPosition < content.offsetTop + threshold) {
        setActiveLink('content')
      } else if (scrollPosition >= content.offsetTop + threshold) {
        setActiveLink('contact')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToSections(e, id) {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <header>
      <nav>
        <img className="nav--icon" src={avatar} alt="" />
        <div className="nav--links">
          <a href='' className={activeLink === 'about' ? 'active' : ''} onClick={(e) => scrollToSections(e, 'about')}>About</a>
          <a href='' className={activeLink === 'project' ? 'active' : ''} onClick={(e) => scrollToSections(e, 'project')}>Project</a>
          <a href='' className={activeLink === 'content' ? 'active' : ''} onClick={(e) => scrollToSections(e, 'content')}>Content</a>
          <a href='' className={activeLink === 'contact' ? 'active' : ''} onClick={(e) => scrollToSections(e, 'contact')}>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header

// The event.preventDefault() method is used to stop the default action of an event from happening. In the case of an anchor (<a>) element, the default action on a click event is to navigate to the URL specified in the href attribute. Calling event.preventDefault() in a click event handler for an anchor element will stop this navigation from happening.
// The order in which they are executed is as follows:
// 1. The JavaScript onClick event handler is executed first
// 2. The default behavior (navigation) is executed next, unless it has been prevented in the JavaScript event handler
