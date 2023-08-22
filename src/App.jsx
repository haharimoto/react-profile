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


function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const lottiePath = '/lottie.json'

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3300)

  //   return () => clearTimeout(timer)
  // }, [])

  // if (isLoading) {
  //   return <lottie-player
  //     src={lottiePath}
  //     background="transparent"
  //     speed="1"
  //     style={{ width: '300px', height: '300px' }}
  //     loop
  //     autoplay
  //   ></lottie-player>
  // }

  return (
    <BrowserRouter>
      <div className="App">
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
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
