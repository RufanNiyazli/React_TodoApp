
import React from 'react'
import { useState } from 'react'

import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'


// Todo list butun todolarin yerlesidyi containerdi
// TodoCreate input oldugu yerdi



function App() {

  const [todos, setTodo] = useState([])
  const oncreateTodo = (newTodo) => {
    setTodo([...todos,newTodo])
  }
  const removeTodo = (todoId) => {
    setTodo([...todos.filter((todo)=>todo.id!=todoId)])
    
  }
  const updateTodo = (newTodoContent) => {
    const updatedTodos=todos.map(todo => {
      if (newTodoContent.id != todo.id) {
        return todo
      }
      else {
        return newTodoContent
      }  
    })
    setTodo([...updatedTodos])
  }


  return (
    <div className='app'>
      <div className="main">
        <TodoCreate onCreateTodo={oncreateTodo}/>
        <TodoList todos={todos} onRemoveTodo={removeTodo} updateTodo={updateTodo } />
  </div>
    </div>
  )
}

export default App
