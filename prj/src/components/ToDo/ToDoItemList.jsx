import React,{Component} from 'react'
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component{
render() {
    const {todo, onToggle,onRemove} = this.props;
    return (
      <div>
        <ToDoItem text="리액트 TO DO LIST"/>
        <ToDoItem text="To do List"/>
        <ToDoItem text="리액트"/>
      </div>
    )
  }
}
export default ToDoItemList