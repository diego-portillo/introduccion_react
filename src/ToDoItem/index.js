import React from "react";
import './ToDoItem.css';
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function ToDoItem(props) {
    return(
        <li className="TodoItem">
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        />
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <DeleteIcon
        onDelete={props.onDelete}
        />
    </li>
    )
}

export { ToDoItem };