import React from 'react'
import './Navigation.css'
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className='nav'>
        <Link to="/" className='Home'>Home</Link>
        <Link to="/about" className='About'>About</Link>
    </div>
  )
}

export default Navigation