import React from 'react'
import Header from './components/Header/Presentational'
import './App.scss'

import { Route, Routes } from 'react-router-dom'
import About from './components/About/Presentational'
import Home from './components/HomePage/Presentational'






const App = () => {
  return (
    <div className='app'>
    <Header/>
    <Home />
    <Routes>
      <Route path ='/Home' element={ <Home />} />
      <Route path ='/about' element={<About />} />
    </Routes>
    
    </div>
  )
}

export default App


