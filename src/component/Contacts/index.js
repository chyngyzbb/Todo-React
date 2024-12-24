import React, { useEffect, useState } from "react";
import TextInput from "../../ui/TextInput";
import ContactList from "../Contacts/ContactList";
import uniqid from "uniqid";

const Contacts = () => {
  const [update, setUpdate] = useState({
    name: "",
    surname: "",
    number: "",
    id: "",
  });
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );
  const [value, setValue] = useState({
    name: "",
    surname: "",
    number: "",
    id: "",
  });

  const [validation, setValidation] = useState({
    name: false,
    surname: false,
    nunber: false,
  });

  function printError() {
    setValidation({
      name: value.name === "",
      surname: value.surname === "",
      number: value.number === "",
    });
  }

  let str = "";
  const handleEdit = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value, id: uniqid() });
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value, id: uniqid() });
  };
  const addTask = () => {
    printError();
    if (value.name !== "" && value.surname !== "" && value.number !== "") {
      let users = JSON.parse(localStorage.getItem("user")) || [];
      users = [...users, value];
      setContacts(users);
      setValue({ name: "", surname: "", number: "", id: uniqid() });
      localStorage.setItem("user", JSON.stringify(users));
    }
  };
  const editClick = (id) => {
    let users = JSON.parse(localStorage.getItem("user")) || [];
    users = users.map((el) => (el.id === id ? { ...el, ...update } : el));
    setContacts(users);
    localStorage.setItem("user", JSON.stringify(users));

    // setUpdate({ name: "", surname: "", number: "" });
  };
  const deleteContact = (id) => {
    let users = JSON.parse(localStorage.getItem("user"));
    users = users.filter((el) => el.id !== id);
    setContacts(users);
    localStorage.setItem("user", JSON.stringify(users));

    // getAllContact()
  };

  // const getAllContact = () => {
  //   setContacts([...contacts, value]);
  // };

  // useEffect(()=>{
  //   getAllContact()
  // },[str])

  return (
    <div className="container flex flex-col items-center">
      <div className="w-[500px] flex flex-col rounded items-center bg-yellow-400 py-2 px-2 my-12 ">
        <h1 className="font-mono text-white text-2xl">ADD TO CONTACT</h1>
        <p>{str}</p>
        <div>
          <TextInput
            type="text"
            pl="Asan"
            name="name"
            handleChange={handleChange}
            values={value.name}
            error={validation.name}
          />
          <TextInput
            type="text"
            pl="Usenov"
            name="surname"
            handleChange={handleChange}
            values={value.surname}
            error={validation.surname}

          />
          <TextInput
            type="text"
            pl="+996(***)** ** **"
            name="number"
            handleChange={handleChange}
            values={value.number}
            error={validation.number}

          />
        </div>

        <button
          onClick={() => addTask()}
          className="font-mono text-1xl text-white bg-green-400 w-[90px] py-1.5  px-4  mx-1 my-2 rounded-lg"
        >
          add
        </button>
      </div>
      <div className=" w-[60%] flex flex-col rounded items-center bg-yellow-400 py-3 px-3  ">
        {contacts.map((el) => (
          <ContactList
            handleEdit={handleEdit}
            editClick={editClick}
            handleChange={handleChange}
            deleteContact={deleteContact}
            el={el}
            update={update}
            setUpdate={setUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
