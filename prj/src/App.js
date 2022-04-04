import React,{Component} from "react";
import Form from "./components/ToDo/Form";
import ToDo from "./components/ToDo/ToDo";
import ToDoItemList from "./components/ToDo/ToDoItemList";

class App extends Component{
  render(){
    return (
      <div className="App">
      <ToDo form={<Form/>}>
        <ToDoItemList></ToDoItemList>
      </ToDo>
      </div>
    );
  }
}

export default App;
