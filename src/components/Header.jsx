import React from 'react'
import avatar from '../../public/avatar.jpg'
import { useState, useEffect } from 'react'


function Header() {
  const [activeLink, setActiveLink] = useState('about')

  //* understand this useEffect
  useEffect(() => {
    // responsive navbar effect
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


  return (
    <header>
      <nav>
        <img className="nav--icon" src={avatar} alt="" />
        <div className="nav--links">
          <a href='#about' className={activeLink === 'about' ? 'active' : ''}>About</a>
          <a href='#project' className={activeLink === 'project' ? 'active' : ''}>Project</a>
          <a href='#content' className={activeLink === 'content' ? 'active' : ''}>Content</a>
          <a href='#contact' className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
