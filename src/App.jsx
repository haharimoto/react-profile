import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Content from './components/Content'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={
            <>
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
