//import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './Projects'
import Home from './Home'
import Contact from './Contact'
import Education from './Education'
import Work from './Work'
import About from './About'
import usePageTracking from './hooks/usePageTracking'
//import './App.css'

function AppRoutes() {
  usePageTracking()
  return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
  )
}

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
