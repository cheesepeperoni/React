import React from 'react'
import './ToDo.css'

const ToDo = ({form, children}) => {
  return (
    <div className="ToDoList">
        <div className="Today">
            TO DO LIST
        </div>
        <div className="form-wrapper">
            {form}
        </div>
        <div className="todo-wrapper">
            {children}
        </div>
    </div>
    )
}

export default ToDo