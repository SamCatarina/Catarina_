import './App.css'
import About from './components/About'
import Final from './components/Final'
import GlobalStyle from './components/GlobalStyle.style'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
    <GlobalStyle/>

      < Main />
      <About />
      <Skills />
      <Projects/>
      <Final/>
    </>

  )
}

export default App
