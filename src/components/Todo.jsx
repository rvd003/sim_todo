import React from 'react'
import { useState } from 'react'
//  import "./todo.css"
import styles from "./todo.module.css"
import TodoItem from './TodoItem';


const Todo = () => {
    const [value,setValue]=useState("")
    const [todos, setTodos] = useState([]);

    const onDelete=(id)=>{
        let newTodos=todos.filter(todo=>todo.id !==id);
        setTodos(newTodos)
    }
        // {
        //     id:1,
        //     value:"hello",
        //     isChecked:false,
        // },
        // {
        //     id:2,
        //     value:"RD",
        //     isChecked:false,
        // },
    // const handleChange=(e)=>{
    //     setValue(e.target.value);
    // };

  return (
    <div className={styles.container}>
       
        Todo
        <br />
        
        <input value={value}onChange={(e)=>setValue(e.target.value)} />
        
        <button
        onClick={()=>{
            setTodos([
                ...todos,
                {id:Date.now(),value:value,isComplete:false},
            ]);
            setValue("")
        }}
        >
            +
            </button>

            <div >
        {todos.map((todo)=> <TodoItem  key={todo.id} todo={todo} onDelete={onDelete}/>)}

    </div>
    </div>
  );
};

export default Todo