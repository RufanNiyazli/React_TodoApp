import React from 'react'
import './css/Todo.css'
import { useState } from 'react'


function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('')
    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999),
            content:newTodo
        }
        onCreateTodo(request)
        setNewTodo('')
    }


  return (
    <div className='create'>
          <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" placeholder='Daxil edin'/>
          <button onClick={createTodo} className='createButton'>Create</button>
    </div>
  )
}

export default TodoCreate
