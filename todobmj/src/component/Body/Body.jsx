import React,{useState, useEffect} from 'react'
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
      setId(id => id + 1);
      setTodoValue("");
      
    }else{
      alert("다시 입력해주세요");
    }
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter(a => a.id !== id))
  }
  const isValue = (a) =>{
    var result = false
    // eslint-disable-next-line array-callback-return
    todoList.map((list) => {
      if(list.id === a && list.checked === true){
        result = true
      }
    })
    return result
  }
  useEffect(()=>{
    console.log(todoList)
  }, [todoList])
  const checkBox = (value) =>{
    console.log(value)
    // var check = document.getElementById("checkBox");
    // var aValue = document.getElementsByClassName("aValue")
    // console.log(aValue);
    

    // const c = checked.target.checked;
    // console.log(checked.target.checked);
    
    // if(c===true){
    //   //aValue.innerHTML
    //   console.log(aValue[1].innerText);
    // }else{
    //   alert("test");
    // }
    setTodoList(todoList.map(a => a.id === value 
    ? {...a , checked: !a.checked} : 
    a))
    // todoList.map(a => a.id === value 
    //   ? {...a , checked: !a.checked} : 
    //   a)
      
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
                   {todoList.map((a,index) => 
                      (
                        isValue(a.id) ? 
                          <li className='mapList'>
                          <span className='spanCheck'>
                          <input type="checkbox" id='checkBox' onChange={()=>{
                            checkBox(a.id)
                          }}></input>
                           <div className='aValue ch' onClick={() =>{removeTodo(a.id)}}> {a.value}</div> 
                         </span></li>
                        :
                        <li className='mapList'>
                        <span className='spanCheck'>
                        <input type="checkbox" id='checkBox' onChange={()=>{
                          checkBox(a.id)
                        }}></input>
                         <div className='aValue' onClick={() =>{removeTodo(a.id)}}> {a.value}</div> 
                       </span></li>
                       )
                   )}
               </ul>
        </div> 
        </div>
    </div> // container
  )
}

export default Body