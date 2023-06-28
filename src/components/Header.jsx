import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useState, useEffect } from 'react'
import avatar from '../../public/avatar.jpg'


// Zustand
let store = (set) => ({
  darkMode: true,
  toggle: () => set((state) => ({ darkMode: !state.darkMode })),
})
store = persist(store, { name: 'darkMode' })
export const useDarkMode = create(store)


function Header() {
  const [activeLink, setActiveLink] = useState('about')
  const darkMode = useDarkMode(state => state.darkMode)
  const toggle = useDarkMode(state => state.toggle)

  // console.log(darkMode);

  //* understand this useEffect
  useEffect(() => {
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

  // dark mode
  let lightStyle
  if (!darkMode) {
    lightStyle = { 'fontWeight': 'bold', 'transition': '0.4s' }
  } else {
    lightStyle = { 'fontWeight': 'normal', 'opacity': '20%', 'transition': '0.4s' }
  }

  let darkStyle
  if (darkMode) {
    darkStyle = { 'fontWeight': 'bold', 'transition': '0.4s' }
  } else {
    darkStyle = { 'fontWeight': 'normal', 'opacity': '20%', 'transition': '0.4s' }
  }

  return (
    <header>
      <nav>
        <img className="nav--icon" src={avatar} alt="" />
        <div className="nav--links">
          <a href='#about' className={activeLink === 'about' ? 'active' : ''}>About</a>
          <a href='#project' className={activeLink === 'project' ? 'active' : ''}>Project</a>
          <a href='#content' className={activeLink === 'content' ? 'active' : ''}>Content</a>
          <a href='#contact' className={activeLink === 'contact' ? 'active' : ''}>Contact</a>

          <div className="nav--toggle">
            {/* <button onClick={toggle}>{darkMode ? 'Dark' : 'Light'}</button> */}
            {/* <p style={lightStyle}>Light</p> */}
            <label className='nav--toggle--switch'>
              <input type="checkbox" checked={darkMode} onChange={toggle} />
              <span className="nav--toggle--slider round"></span>
            </label>
            {/* <p style={darkStyle}>Dark</p> */}
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header
