import React, { useState } from "react";
import TextInput from "../../../ui/TextInput";
import TextInputTwo from "../../../ui/TextInput/TextInputTwo";

const ContactList = ({ el, deleteContact,update, handleEdit,editClick,setUpdate }) => {
  const [edit, setEdit] = useState(false);

  const openInput = () => {
    setEdit(!edit);
    setUpdate(el)
  };
  const closeInput = () => {
    editClick(el.id)
    setEdit(!edit);
  };

  // const click=()=>{

  // }

  return (
    <div className="flex items-center justify-between bg-slate-300 w-[100%] py-3 px-2 my-2">
      {edit ? (
        ""
      ) : (
        <>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 rounded-[50%] py-4 px-4 text-2xl font-extrabold text-white">
             { el.name[0] && el.name[0].toUpperCase() + el.surname[0].toUpperCase()}
            </div>

            <div>
              <div className="text-[20px] font-mono">
                { el.name[0] && el.name[0].toUpperCase() + el.name.slice(1).toLowerCase()}
              </div>
              <div className="text-[18px] font-mono">
                { el.surname[0] && el.surname[0].toUpperCase() +
                  el.surname.slice(1).toLowerCase()}
              </div>
            </div>
          </div>
          <div>{el.number}</div>
        </>
      )}
      {edit ? (
        <div className="flex flex-col justify-center">
          <TextInputTwo
            type="text"
            pl="Asan"
            name="name"
            handleEdit={handleEdit}
            values={el.name}
          />
          <TextInputTwo
            type="text"
            pl="Usenov"
            name="surname"
            handleEdit={handleEdit}
            values={el.surname}
          />
          <TextInputTwo
            type="text"
            pl="+996(***)** ** **"
            name="number"
            handleEdit={handleEdit}
            values={el.number}
          />
        </div>
      ) : (
        ""
      )}

      <div>
        <button
          onClick={() => (edit ? closeInput() : openInput())}
          type="button"
          class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          edit
        </button>
        <button
          onClick={() => deleteContact(el.id)}
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default ContactList;
