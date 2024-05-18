import React from "react";

const Input = ({ place, name, id, type, classn, children, changehandler,val ,active}) => {
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
      >
        {children}
      </input>
    </>
  );
};

export default Input;
