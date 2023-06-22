import './App.css'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Content from './components/Content'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useDarkMode } from './components/Header'


function App() {
  const darkMode = useDarkMode(state => state.darkMode)
  let style
  if (darkMode === false) {
    style = 'App'
  } else {
    style = 'App-dark'
  }

  return (
    <div className={style}>
      <Header />
      <About />
      <Project />
      <Content />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
