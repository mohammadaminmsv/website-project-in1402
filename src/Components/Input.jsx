import React from "react";

const Input = ({ place, name, id, type, classn, children, changehandler,val ,active,checked}) => {
  return (
    <>
      <input
        className={classn}
        onChange={changehandler}
        placeholder={place}
        type={type}
        id={id}
        name={name}
        value={val}
        disabled={active}
        checked={checked}
      >
        {children}
      </input>
    </>
  );
};

export default Input;
