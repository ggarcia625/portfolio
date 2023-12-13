import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}

export default App
