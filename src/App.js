import React from "react";
import { ToDoCounter } from './ToDoCounter'
import { ToDoSearcher } from "./ToDoSearcher";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
// import './App.css';

const toDos = [
  {text:'Cortar cebolla', completed: false},
  {text:'Tomar curso de intro a React', completed: false},
  {text:'Llorar con la llorona', completed: false}
]

function App() {
  return (
    <React.Fragment>
    <ToDoCounter />
    <ToDoSearcher/>
    <ToDoList>
      {toDos.map(todo => (
        <ToDoItem key={todo.text} text={todo.text}/>
      ))}
      </ToDoList>
   <CreateToDoButton/>
    
    </React.Fragment>
  );
}

export default App;
