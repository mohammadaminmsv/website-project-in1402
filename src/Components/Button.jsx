import React from "react";

const Button = ({ name, className, logo, className2, id, type , click }) => {
  return (
    <>
      <div>
        <button id={id} className={className} onClick={click}>
          <span className={className2}>{logo}</span>
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
