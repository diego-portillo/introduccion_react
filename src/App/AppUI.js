import React from "react";
// import logo from '../logo.svg';
import { TodoContext } from "../TodoContext";
import { ToDoCounter } from '../ToDoCounter'
import { ToDoSearcher } from "../ToDoSearcher";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";

function AppUI(){
    
    return (
        <React.Fragment>
    <ToDoCounter/>
    <ToDoSearcher/>
      <TodoContext.Consumer>
        {({error, loading, searchedTodos, completeTodo, deleteTodo})=>(    
          <ToDoList>
            {error && <p>Desesperate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
            {searchedTodos.map(todo => (
            <ToDoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.text)}
              onDelete={()=> deleteTodo(todo.text)}
            />
            ))}
        </ToDoList>)}
      </TodoContext.Consumer>
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