import React, {useState, useEffect} from 'react'
import './body.css'
import SpringVideo from "../../video/Spring.mp4"


const Body = () => {
    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); 
      };
    const [id, setId] = useState(0);
    const [todoValue, setTodoValue] = useState("");
    const [todoList, setList] = useState([]);
    const [todoSelect, setSelect] = useState([]);

    const todochange = (todo) =>{
        setTodoValue(todoValue => todo.target.value)
    }
    const DeleteClick = (id) =>{
        setList(todoList.filter(a => a.id !== id))
    }
    const AddClick = () =>{
        var input = document.getElementById('TodoBar'); 
        input.value = null;
        setList(todoList =>[
            ...todoList,
            {
                id: id,
                value: todoValue
            }
        ])
        setId(id => id + 1);
    }

    useEffect(() =>{

    }, [todoList])

      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <div className='BodyScreen'>
        <video autoPlay loop muted playsInline className='BodyVideo'>
            <source src={SpringVideo} type="video/mp4"/>
        </video>
        <div className="BodyText">
            <h1 className='h1'>Todo-List</h1>
            <div className="TextArea">
                <div className="Area">
                    <input type="text" className='TodoBar' onChange={todochange} id='TodoBar'/>
                    <div className='TodoBtn' onClick={AddClick}>추가</div>
                </div>
            </div>

            <div className="todolist">
               <ul className='list'>
                   {todoList.map((a) => {
                       return(
                       <li>{a.value} <div className="xbtn" onClick={()=>{
                           DeleteClick(a.id)
                       }}>x</div></li>
                       )
                   })}
                 
               </ul>
            </div>
        </div>
    </div>
  )
}

export default Body