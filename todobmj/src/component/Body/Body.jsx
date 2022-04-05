import React,{useState} from 'react'
import './body.css'

const Body = () => {
   
  const [id, setId] = useState(0);
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoInput = (e) => { 
    setTodoValue(todoValue => e.target.value)
  }

  const handlerKey = (e) => {
    if(e.key === 'Enter'){
      submitTodo();
    }
  }
  const submitTodo = () => {
      var todo = document.getElementsByClassName('box');
      todo.value = null;

      if(todoValue !== ''){
      setTodoList(todoList =>[
        ...todoList,
        {
            id: id,
            value: todoValue,
            checked:false
        }
        
    ])
      setId(id =>id + 1);
      setTodoValue("");
      console.log(id);
    }else{
      alert("다시 입력해주세요");
    }
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter(a => a.id !== id))
  }

  return (
    <div className="container">
        <div className="todoList">
            <h1 className='listName'>TO DO LIST</h1>
            <div className="boxContainer">
              <input type="text" className='box' value={todoValue} onChange={todoInput} onKeyPress={handlerKey}></input>
                <div className="button" onClick={submitTodo}>ADD</div>
            </div>
            <div className="checkList">
             <ul className='list'>
                   {todoList.map((a) => {
                       return(
                       <li className='mapList' onClick={() =>{
                         removeTodo(a.id)
                       }}>
                         {a.value}</li>
                       )
                   })}
               </ul>
        </div> 
        </div>
    </div> // container
  )
}

export default Body