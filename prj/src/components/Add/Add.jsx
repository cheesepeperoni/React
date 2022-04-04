import React,{useState} from 'react'
import './Add.css'

const Add = () => {
    const [number, setNumber] = useState(0)
    const plus = () => {
        setNumber(number=>number+1)
    }
    const minus = () => {
        setNumber(number=>number-1)
    }
  return (
    <div className='AddScreen'>
    <div className="left" onClick={minus}>-</div>
    <div className="center">{number}</div>
    <div className="right" onClick={plus}>+</div>

    </div>
  )
}

export default Add