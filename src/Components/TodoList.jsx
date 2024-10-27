import React from 'react'
import Todo from './Todo'

function TodoList({todos,onRemoveTodo,updateTodo}) {
  return (
      <div>
          {
              todos.map(todo => (
                  
                  <Todo onRemoveTodo={onRemoveTodo} itemId={todo.id} key={todo.id } content={todo.content } updateTodo={updateTodo} />
              ))
          }
    </div>
  )
}

export default TodoList
