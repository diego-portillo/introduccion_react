import React from "react";
import {AppUI} from './AppUI';
import './App.css';

// const defaultToDos = [
//   {text:'Cortar cebolla', completed: true},
//   {text:'Tomar curso de intro a React', completed: true},
//   {text:'Llorar con la llorona', completed: false}
// ]

function useLocalStorate(itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem=initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const [item, setItem] = React.useState(parsedItem)
  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }
  return [item, saveItem]
}

function App(props) {
  const [todos, saveTodos] = useLocalStorate('TODOS_V1',[])
  const [patito, savePatitos] = useLocalStorate('PATITO_V1','a')
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
    saveTodos(newTodos)
  }
  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }


  return [
    <p>{patito}</p>,
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  ];
}

export default App;
