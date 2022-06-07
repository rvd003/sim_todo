import React from 'react'
import styles from "./todo.module.css"
import { useState } from 'react'

const TodoItem = ({todo,onDelete}) => {
    const [isCompleted,setIsCompleted] =useState(todo.isCompleted)
  return (
      <div >
    <div  className={styles.todo} key={todo.id}>
    <input type="checkbox" 
    checked={isCompleted}
    onChange={(e)=>{
        setIsCompleted(e.target.checked)
    }}
    
    /> 
 <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
 <button onClick={()=>onDelete(todo.id)}>X</button>
 </div>
 </div>
  )
}

export default TodoItem