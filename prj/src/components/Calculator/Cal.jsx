import React,{useState,useEffect} from 'react'
import './Cal.css'

const Cal = () => {
    const[number, setNumber] = useState("")
    const[numberSec, setNumberSec] = useState(0)
    const[numberRes, setNumberRes] = useState(0)
    const[res, setResult] = useState("")
    const[ari, setAri] = useState("")

   const first = (num) => {
        console.log(num);
        setNumber(number => String(number)+ String(num))
   }
   useEffect(() => {
       console.log(number)
   },[number] )

  return (
    <div className="container">
        <div className="firLine">
            <div className="result"></div>
            <div className="div dap">=</div>
        </div>
        <div className="firLine">
            <div className="div" onClick={()=>{first(1)}}>1</div>
            <div className="div" onClick={()=>{first(2)}}>2</div>
            <div className="div" onClick={()=>{first(3)}}>3</div>
            <div className="div">x</div>
        </div>
        <div className="firLine">
            <div className="div" onClick={()=>{first(4)}} >4</div>
            <div className="div" onClick={()=>{first(5)}} >5</div>
            <div className="div" onClick={()=>{first(6)}} >6</div>
            <div className="div" >%</div>
        </div>
        <div className="firLine">
            <div className="div" onClick={()=>{first(7)}}>7</div>
            <div className="div" onClick={()=>{first(8)}}>8</div>
            <div className="div" onClick={()=>{first(9)}}>9</div>
            <div className="div">+</div>
        </div>
        <div className="firLine">
            <div className="div"></div>
            <div className="div" onClick={()=>{first(0)}}>0</div>
            <div className="div">c</div>
            <div className="div">-</div>
        </div>
    </div>
  )
}

export default Cal