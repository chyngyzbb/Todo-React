import React from 'react';

const TodoList = ({el,deleteTodo}) => {
    return (
        <div>
            <div    className='flex justify-between items-center bg-emerald-300 py-2 px-3 my-2 mx-3 '>
                    <h1>{el.title}</h1>
                    <div className='flex pt-2'>
                    <button type="button" class="focus:outline-none pl-3  text-white bg-yellow-400 hover:bg-yellow-500  rounded-lg h-10  px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >Edit</button>

                    <button 
                    onClick={()=>deleteTodo(el.id)}
                    className='top-[10px]'
                    type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >Deleted</button>
                    </div>
                </div>
        </div>
    );
};

export default TodoList;