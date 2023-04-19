import React from "react";
import logo from './logo.svg';
import { ToDoCounter } from './ToDoCounter'
import { ToDoSearcher } from "./ToDoSearcher";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import './App.css';

const defaultToDos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar curso de intro a React', completed: true},
  {text:'Llorar con la llorona', completed: false}
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultToDos)
  const [searchValue, setSearchValue]  = React.useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  let searchedTodos = []
  if(!searchValue.length >= 1){
      searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }
  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
  }


  return (
    <React.Fragment>
    <ToDoCounter 
    total={totalTodos}
    completed={completedTodos}
    />
    <ToDoSearcher
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    <ToDoList>
      {searchedTodos.map(todo => (
        <ToDoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={()=> completeTodo(todo.text)}
        onDelete={()=> deleteTodo(todo.text)}
        />
      ))}
      </ToDoList>
   <CreateToDoButton/>
    
    </React.Fragment>
  // <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         {props.saludo}
  //         {props.children}
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
