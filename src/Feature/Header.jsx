import { Link, Outlet } from "react-router-dom";
import React from "react";
import styles from "../theme/Style.Header.module.css";
import Home from "../Pages/Home";
import Input from "../Components/Input";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className=" container shadow-2xl flex flex-row justify-between h-16 items-center bg-teal-500  px-10">
        <div>
          <Input
            classn={
              "w-[390px] border-2 border-gray-300 ml-10 outline-none text-right rounded-md px-3 py-1 "
            }
            place={"...جستجوی کالای مورد نظر"}
            type={"text"}
            id={"search"}
            name={"search"}
          />
        </div>
        <Link to="/">
          <img
            src="LogoSite.png"
            alt="shop logo"
            className="w-[250px] h-10 cursor-pointer rounded-[50pt]"
          />
        </Link>
        <div className="flex flex-row justify-start space-x-3 w-[250px]">
          <Link
            className="cursor-pointer hover:bg-teal-300 px-3 rounded-md"
            to="/Signin"
          >
            <span>ثبت نام</span>
          </Link>
          <Link
            className="cursor-pointer hover:bg-teal-300 px-3 rounded-md"
            to="/Login"
          >
            <span>ورود</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
