import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectPage from './components/ProjectPage'
import ErrorPage from './components/ErrorPage'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
