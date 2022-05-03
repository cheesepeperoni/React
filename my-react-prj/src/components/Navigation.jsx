import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
   <>
    <Link to="/">Home</Link>
    <Link to="/Board">Board</Link>
   </>
  )
}

export default Navigation