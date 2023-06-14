import './App.css'
import Header from './components/Header'
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
    </div>
  )
}

export default App
