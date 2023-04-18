import React from "react";
import './ToDoSearcher.css'

function ToDoSearcher(){
    const onSearchValueChange = (event)=>{
        console.log(event.target.value)
    }
    return(
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        />
    );
}

export { ToDoSearcher };