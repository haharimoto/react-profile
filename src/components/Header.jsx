import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


// Zustand
let store = (set) => ({
  darkMode: true,
  toggle: () => set((state) => ({ darkMode: !state.darkMode })),
})
store = persist(store, { name: 'darkMode' })
export const useDarkMode = create(store)


function Header() {
  const darkMode = useDarkMode(state => state.darkMode)
  const toggle = useDarkMode(state => state.toggle)

  console.log(darkMode);

  return (
    <header>
      <img className="icon" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
      <div className="links">
        <a href='/'>About</a>
        <a href='/'>Portfolio</a>
        <a href='/'>Contents</a>
        <a href='/'>Contact</a>
        <div className="toggle">
          <button onClick={toggle}>{darkMode ? 'Dark' : 'Light'}</button>
        </div>
      </div>
    </header>
  )
}

export default Header
