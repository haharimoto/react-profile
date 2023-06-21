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

  useEffect(() => {
    function handleScroll() {
      const about = document.getElementById('about')
      const portfolio = document.getElementById('portfolio')
      const contents = document.getElementById('contents')
      // const contact = document.getElementById('contact')

      const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + 50
      const threshold = window.innerHeight / 2

      if (scrollPosition < about.offsetTop + about.offsetHeight) {
        setActiveLink('about')
      } else if (scrollPosition < portfolio.offsetTop + threshold) {
        setActiveLink('portfolio')
      } else if (scrollPosition < contents.offsetTop + threshold) {
        setActiveLink('contents')
      } else if (scrollPosition >= contents.offsetTop + threshold) {
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
        <img className="icon" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
        <div className="links">
          <a href='/' className={activeLink === 'about' ? 'active' : ''}>About</a>
          <a href='/' className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</a>
          <a href='/' className={activeLink === 'contents' ? 'active' : ''}>Contents</a>
          <a href='/' className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
          <div className="toggle">
            <button onClick={toggle}>{darkMode ? 'Dark' : 'Light'}</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
