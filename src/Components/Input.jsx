import React from "react";

const Input = ({ place, name, id, type, classn, children, changehandler }) => {
  return (
    <>
      <input
        className={classn}
        onChange={changehandler}
        placeholder={place}
        type={type}
        id={id}
        name={name}
      >
        {children}
      </input>
    </>
  );
};

export default Input;
