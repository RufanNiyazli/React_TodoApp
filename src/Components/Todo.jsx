import React from 'react'
import './css/Todo.css'
import { MdOutlineModeEdit, MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { useState } from 'react'

function Todo({ content, itemId,onRemoveTodo,updateTodo}) {
    const removeTodo = () => {
        onRemoveTodo(itemId)
    }
    const [flag, setFlag] = useState(true)
    const[newContent,setNewContent]=useState(content)
    const uptadeTodo = () => {
        const request = {
            id: itemId,
            content:newContent
        }
        updateTodo(request)
        setFlag(!flag)
 }

  return (
    <div className='items'>
          <div className="item">
              {
                  flag ? content 
                      : <input type="text" value={newContent} onChange={(e)=>setNewContent(e.target.value)} />
              }



              <div className="item-icon">
                  <MdDelete style={{ cursor: 'pointer' }} onClick={removeTodo} />

                  {
                      flag ? <MdOutlineModeEdit style={{ cursor: 'pointer' }} onClick={uptadeTodo} />
                          
                          
                          : <SiTicktick style={{ cursor: 'pointer' }} onClick={uptadeTodo} />
                  }
               

              </div>
              
      </div>
    </div>
  )
}

export default Todo
