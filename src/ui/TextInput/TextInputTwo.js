import React from 'react';

const TextInputTwo = ({type,pl,name,defaultValue, values,handleEdit}) => {
    return (
        <div>
             <input
        className="outline-none w-full rounded py-2 px-2 my-3"
        type={type}
        placeholder={pl}
        name={name}
        onChange={handleEdit}
        defaultValue={values }
    
        // value={values}
      />
        </div>
    );
};

export default TextInputTwo;