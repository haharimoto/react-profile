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

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <header>
      <nav>
        <img className="nav--icon" src={avatar} alt="" />
        <div className="nav--links">
          <a href='' className={activeLink === 'about' ? 'active' : ''} onClick={(e) => handleClick(e, 'about')}>About</a>
          <a href='' className={activeLink === 'project' ? 'active' : ''} onClick={(e) => handleClick(e, 'project')}>Project</a>
          <a href='' className={activeLink === 'content' ? 'active' : ''} onClick={(e) => handleClick(e, 'content')}>Content</a>
          <a href='' className={activeLink === 'contact' ? 'active' : ''} onClick={(e) => handleClick(e, 'contact')}>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
