import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Content from './components/Content'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'
import Preloader from './components/Preloader'
import ErrorPage from './components/ErrorPage'


function App() {
  const [showAbout, setShowAbout] = useState(false)

  // settimeout used for optimizing preloader animation since About component is task heavy and causing preloader animation to lag
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <Preloader />
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Hero />
              {showAbout && <About />}
              <Project />
              <Content />
              <Contact />
            </>
          } />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
