import React from "react";
import logo from './logo.svg';
import { ToDoCounter } from './ToDoCounter'
import { ToDoSearcher } from "./ToDoSearcher";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import './App.css';

const toDos = [
  {text:'Cortar cebolla', completed: false},
  {text:'Tomar curso de intro a React', completed: false},
  {text:'Llorar con la llorona', completed: false}
]

function App(props) {
  return (
  //   <React.Fragment>
  //   <ToDoCounter />
  //   <ToDoSearcher/>
  //   <ToDoList>
  //     {toDos.map(todo => (
  //       <ToDoItem key={todo.text} text={todo.text}/>
  //     ))}
  //     </ToDoList>
  //  <CreateToDoButton/>
    
  //   </React.Fragment>
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.saludo}
          {props.children}
        </a>
      </header>
    </div>
  );
}

export default App;
