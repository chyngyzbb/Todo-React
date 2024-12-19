import React, { useState } from 'react';
import uniqId from 'uniqid'
import TodoList from '../TodoList';


const Todo = () => {



    const [value,setValue]=useState('')
    const [todos,setTodos]=useState([])

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleClick=()=>{
        const newTodo={
            id:uniqId(),
            title:value,
            isDone:false
        }
        setTodos([...todos,newTodo])
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter(el=>el.id!==id))
    }


    return (
        <div>
            <div className='w-[500px] flex gap-1 my-[50px] mx-auto items-center' >
            <input 
            onChange={handleChange}
            type="search" 
            id="default-search"
            className="block w-full p-4 outline-none py-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-blue-100 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required />

            <button 
            onClick={handleClick}
            type="button" 
            className="text-white h-[52px] my-2  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Add</button>

            </div>
            {
                todos.map((el)=>(
                    <div className='w-[500px] bg-amber-400 py-4 px-3 mx-auto rounded-1 '>
                            <TodoList el={el} key={el.id} deleteTodo={deleteTodo}/>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Todo;