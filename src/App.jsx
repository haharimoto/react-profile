// import { useState, useEffect } from 'react'
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
  // const [showLoad, setShowLoad] = useState(false)
  // //* works now but need some improvements, especially for slower networks
  // // settimeout used for optimizing preloader animation since About component is task heavy and causing preloader animation to lag
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoad(true)
  //   }, 3300)

  //   return () => clearTimeout(timer)
  // }, [])


  return (
    <BrowserRouter>
      <div className="App">
        {/* {!showLoad && <Preloader />} */}
        <Preloader />
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Hero />
              <About />
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

// TODO: give more contexts (texts)
// improve heading of About section
