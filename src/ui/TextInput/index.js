import React from 'react';

const TextInput = ({type,pl,name,handleChange,defaultValue, values,error}) => {
    return (
        <div>
          <input
        className="outline-none w-full rounded py-2 px-2 my-3"
        type={type}
        placeholder={pl}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue}
        value={values}
        style={{
          border: error ? '3px solid red' : ''
        }}
      />
        </div>
    );
};

export default TextInput;