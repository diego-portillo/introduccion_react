import React from "react";
import './ToDoCounter.css';
import { TodoContext } from "../TodoContext";


function ToDoCounter(){
    const {totalTodos,completedTodos} = React.useContext(TodoContext)

    return(
        <h2 className="ToDoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    );
}

export { ToDoCounter };