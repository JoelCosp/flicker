import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

import Nav from './components/Nav'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>  
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
