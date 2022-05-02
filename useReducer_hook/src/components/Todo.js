import React from 'react';
import {ACTIONS} from './Example3';

function Todo({todo,dispatch}) {
  return (
    <div className='btn-container'>
    <span style={{color:todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
    <button className='toggle-btn' onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>Toggle</button>
    <button className='delete-btn' onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>Delete</button>
    </div>
  )
}

export default Todo;