import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props){
     const onClickButton = (msg)=>{
        alert(msg)
     }
    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Hola k tal')}
        >
        +
        </button>
    );
}

export { CreateToDoButton };
