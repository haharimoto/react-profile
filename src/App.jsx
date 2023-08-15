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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  // if (isLoading) {
  //   return <div>Loading...</div>;
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
