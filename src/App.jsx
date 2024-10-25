import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact>
    </>
  )
}

export default App