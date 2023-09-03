import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Project from './Project'
import Content from './Content'
import Contact from './Contact'
import Preloader from './Preloader'


function Home() {
  const [showLoad, setShowLoad] = useState(false)

  //* works now but need some improvements, especially for slower networks
  // settimeout used for optimizing preloader animation since About component is task heavy and causing preloader animation to lag
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoad(true)
    }, 3300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!showLoad && <Preloader />}
      <Header />
      <Hero />
      <About />
      <Project />
      <Content />
      <Contact />
    </>
  )
}

export default Home
