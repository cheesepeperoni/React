import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Board'
import Home from './components/Home'
import Navigation from "./components/Navigation"

function App() {
const appStyle ={
   width:"100%",
   height:"100vh",
   position:"relative" 
}
  return (
    <div className="App" style={appStyle}>
      <BrowserRouter>
        <React.StrictMode>
        <Navigation />
          <Routes>
            <Route path="/my-react-prj/Board" element={<Board/>}/>
            <Route path="/my-react-prj/"  element={<Home/>} />
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  )
}

export default App
