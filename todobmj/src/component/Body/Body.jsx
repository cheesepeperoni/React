import React from 'react'
import './body.css'

const Body = () => {
   

  return (
    <div className="container">
        <div className="todoList">
            <input type="text" className='box'></input>
            <div className="button">추가</div>
        </div>
        <div className="checkList">

        </div>
    </div>
  )
}

export default Body