import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useState, useEffect } from 'react'


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


  return (
    <header>
      <nav>
        <img className="nav--icon" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
        <div className="nav--links">
          <a href='#about' className={activeLink === 'about' ? 'active' : ''}>About</a>
          <a href='#project' className={activeLink === 'project' ? 'active' : ''}>Project</a>
          <a href='#content' className={activeLink === 'content' ? 'active' : ''}>Content</a>
          <a href='#contact' className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
          <div className="nav--toggle">
            <button onClick={toggle}>{darkMode ? 'Dark' : 'Light'}</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
