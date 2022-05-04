import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
import imgLogo from '../image/logo.png'

const Navigation = () => {
  return (
    <div className='Nav'>
      <div className="logo">
        <Link to="/my-react-prj/" >
         <img src={imgLogo}/>
        </Link>
      </div>
      <div className="link">
        <Link to="/my-react-prj/" className='homeLink'>HOME</Link>
        <Link to="/my-react-prj/Board"className='boardLink'>BOARD</Link>
      </div>
    </div>
  )
}

export default Navigation