import React from 'react'
import Header from './components/Header/Presentational'
import './App.scss'

import { Route, Routes } from 'react-router-dom'
import About from './components/About/Presentational'
import Home from './components/HomePage/Presentational'
import Portfolio from './components/Portfolio/Presentational'
import Contact from './components/Contact/Presentational'






const App = () => {
  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path ='/' element={ <Home />} />
      <Route path ='/portfolioapp' element={ <Home />} />
      <Route path ='/about' element={<About />} />
      <Route path ='/portfolio' element={<Portfolio />} />
      <Route path ='/contact_us' element={<Contact />} />
    </Routes>
    
    </div>
  )
}

export default App


