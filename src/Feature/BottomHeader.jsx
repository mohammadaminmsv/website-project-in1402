import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Components/Button";
import Product from "../Pages/Product";
import { FaHamburger } from "react-icons/fa";

const BottomHeader = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 64
        ? setStickyClass("fixed top-0 z-10 left-28 md:left-15")
        : setStickyClass("relative");
    }
  };

  const handleClick = () => {
    let dropdown = document.getElementById("dropdownMenu");
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  };
  return (
    <div
      className={`container rounded-b-2xl  shadow-2xl flex flex-row justify-around items-center bg-teal-100 h-[39pt] pt-1 w-full    ${stickyClass} `}
    >
      <div>
        <Link
          className="cursor-pointer hover:bg-orange-300 rounded-md p-1 "
          to="/Cart"
        >
          <span>سبد خرید</span>
        </Link>
      </div>
      <div>
        <Button
          className={"bg-teal-100 w-5 h-5 invisible lg:visible"}
          name={<FaHamburger className="w-5 h-5" />}
          id={"dropdown"}
          click={handleClick}
        />
        <div
          id="dropdownMenu"
          class="hidden absolute inset-0 z-10 left-52 top-15 justify-between content-between text-right flex-col mt-1 w-[100px] h-[200px] bg-teal-100 shadow-lg rounded"
        >
          <Link
            className="cursor-pointer mb-3 hover:bg-slate-300 h-2 rounded-md p-1 lg:my-4 lg:mr-3 text-md ml-10 font-semibold"
            to="/"
          >
            <span>خانه </span>
          </Link>
          <Link
            className="cursor-pointer hover:bg-slate-300 rounded-md p-1"
            to="/Catalogue"
          >
            <span className="cursor-pointer text-md font-semibold">
              کاتالوگ{" "}
            </span>
          </Link>
          <span
            className="cursor-pointer  hover:bg-slate-300 rounded-md p-1"
            to="/Product"
          >
            <span className="cursor-pointer text-md font-semibold">
              <Product />{" "}
            </span>
          </span>
          <Link
            className="cursor-pointer hover:bg-slate-300 rounded-md p-1"
            to="/Profile"
          >
            <span className="cursor-pointer text-md font-semibold">
              پروفایل{" "}
            </span>
          </Link>

          <Link
            className="cursor-pointer hover:bg-teal-300 p-1  rounded-md"
            to="/Signin"
          >
            <span className="cursor-pointer text-md font-semibold">
              ثبت نام{" "}
            </span>
          </Link>
          <Link
            className="cursor-pointer hover:bg-teal-300 p-1 rounded-md "
            to="/Login"
          >
            <span className="cursor-pointer text-md font-semibold">ورود </span>
          </Link>
        </div>
      </div>

      <nav className="flex flex-row-reverse items-center  space-x-10 mb-2 ltr lg:hidden ">
        <Link
          className="cursor-pointer hover:bg-slate-300 rounded-md p-1 text-md ml-10 font-semibold"
          to="/"
        >
          <span>خانه </span>
        </Link>
        <Link
          className="cursor-pointer hover:bg-slate-300 rounded-md p-1 text-center"
          to="/Catalogue"
        >
          <span className="cursor-pointer text-md font-semibold">کاتالوگ </span>
        </Link>
        <span
          className="cursor-pointer  rounded-md p-1 items-center"
          to="/Product"
        >
          <span className="cursor-pointer text-md font-semibold p-1">
            <Product />{" "}
          </span>
        </span>
        <Link
          className="cursor-pointer hover:bg-slate-300 rounded-md p-1"
          to="/Profile"
        >
          <span className="cursor-pointer text-md font-semibold">پروفایل</span>
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default BottomHeader;
