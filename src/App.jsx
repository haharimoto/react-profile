import './App.css'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contents from './components/Contents'
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
      <Portfolio />
      <Contents />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
