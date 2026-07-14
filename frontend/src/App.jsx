import React from 'react'
import {Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Subjects from './pages/Subjects'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Questions from './pages/Questions'
import Contact from './pages/Contact'
import MockTest from './pages/MockTest'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/subjects" element={<Subjects />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/subjects/:subject" element={<Questions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Mock/:subject" element={<MockTest />} />

    </Routes>
  )
}

export default App
