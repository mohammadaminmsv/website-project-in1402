import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Components/Button";
import Watch from "../Data/Watch";
import { IoMdArrowDropdown } from "react-icons/io";

const Product = () => {
  const [hidden, setHidden] = useState("hidden");
  const showhandler = () => {
    setHidden("bg-teal-500");
  };

  return (
    <>
      <div
        onMouseMove={showhandler}
        onMouseLeave={() =>{
            setHidden("hidden");
        }}
        className="dropdown relative"
      >
        <button className="flex flex-row">
          <IoMdArrowDropdown className="mt-[4px] h-3" />
          محصولات
        </button>
        <div
          id="dropdown"
          className={`${hidden} z-10 flex flex-col text-center w-96 fixed right-80 divide-y pb-2 mt-[3pt] px-2`}
        >
          <div className="flex flex-col  divide-y ">
            <Link className="cursor-pointer" to="/product/watch">
              <Button name={"موبایل"} className={"my-1 text-xl"} />
            </Link>
            <Link className="cursor-pointer" to="/product/watch">
              <Button name={"تبلت"} className={"my-1 text-xl"} />
            </Link>
            <Link className="cursor-pointer" to="/product/watch">
              <Button name={"لبتاب"} className={"my-1 text-xl"} />
            </Link>
            <Link className="cursor-pointer" to="/product/watch">
              <Button name={"لوازم جانبی موبایل"} className={"my-1 text-xl"} />
            </Link>
            <Link className="cursor-pointer" to="/product/watch">
              <Button name={"لوازم جانبی لبتاب"} className={"my-1 text-xl"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
