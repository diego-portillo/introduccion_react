import React from "react";
// import logo from '../logo.svg';
import { ToDoCounter } from '../ToDoCounter'
import { ToDoSearcher } from "../ToDoSearcher";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    
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
    )
}

export { AppUI }