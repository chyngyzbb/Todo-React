import React, { useState } from "react";

const TodoList = ({ el, deleteTodo, updateTodo, updateStatus }) => {
  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState(el.title);

  const handleChangeNew = (event) => {
    setNewValue(event.target.value);
  };

  const openInput = () => {
    setEdit(true);
  };
  const closeInput = (id, newTitle) => {
    updateTodo(id, newTitle);
    setEdit(false);
  };
// console.log(newValue);

  return (
    <div className="w-[500px] bg-amber-400 py-4 px-3 mx-auto rounded-1 ">
      <div className="flex justify-between items-center bg-emerald-300 py-2 px-3 my-0 mx-3 ">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={el.done}
            onClick={() => updateStatus(el.id)}
          />
          {edit ? (
            <input
              className="py-2 px-2 rounded outline-none"
              onChange={(e)=>handleChangeNew(e)}
              defaultValue={el.title}
              type="text"
            />
          ) : (
            <h1>{el.title}</h1>
          )}
        </div>

        <div className="flex pt-2">
          <button
            onClick={() => (edit ? closeInput(el.id, newValue) : openInput())}
            type="button"
            className="focus:outline-none pl-3  text-white bg-yellow-400 hover:bg-yellow-500  rounded-lg h-10  px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            {edit ? "save" : "edit"}
          </button>

          <button
            onClick={() => deleteTodo(el.id)}
            className="top-[10px]"
            type="button"
            class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Deleted
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
