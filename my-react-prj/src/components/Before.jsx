import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './Board'
import Home from './Home'
import Navigation from './Navigation'


const Before = () => {
  return (
  <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/Board" element={<Board/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default Before