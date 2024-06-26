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

  const clickHandler = () => {
    let dropdown = document.getElementById("dropdownMenu2");
    console.log(dropdown);
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  };

  return (
    <>
      <Button
        className={" relative right-0  bg-teal-100 mr-3 hidden lg:block"}
        name={"محصولات"}
        id={"dropdown2"}
        click={clickHandler}
      />
      <div
        id="dropdownMenu2"
        class="hidden absolute right-20 text-right flex-col mt-1 w-[100px] h-[400px] bg-teal-100 shadow-lg rounded"
      >
        <div className="flex flex-col  divide-y ">
          <Link className="cursor-pointer" to="/product/mobile_tablet">
            <Button name={"موبایل"} className={"my-1 text-xl"} />
          </Link>
          <Link className="cursor-pointer" to="/product/mobile_tablet">
            <Button name={"تبلت"} className={"my-1 text-xl"} />
          </Link>
          <Link className="cursor-pointer" to="/product/laptop">
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
      <div
        onMouseMove={showhandler}
        onMouseLeave={() => {
          setHidden("hidden");
        }}
        className="dropdown relative lg:hideen"
      >
        <button className="flex flex-row lg:hidden">
          <IoMdArrowDropdown className="mt-[4px] h-3" />
          محصولات
        </button>
        <div
          id="dropdown"
          className={`${hidden} z-10 flex flex-col text-center w-96 fixed right-80 divide-y pb-2 mt-[3pt] px-2 lg:hidden`}
          onClick={clickHandler}
        >
          <div className="flex flex-col  divide-y ">
            <Link className="cursor-pointer" to="/product/mobile_tablet">
              <Button name={"موبایل"} className={"my-1 text-xl"} />
            </Link>
            <Link className="cursor-pointer" to="/product/mobile_tablet">
              <Button name={"تبلت"} className={"my-1 text-xl"} />
            </Link>
            <Link className="cursor-pointer" to="/product/laptop">
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
