import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import Product from "../Pages/Product";

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
  return (
    <div
      className={`container rounded-b-2xl shadow-2xl flex flex-row justify-around items-center bg-teal-100 h-[39pt] pt-1 w-full   ${stickyClass} `}
    >
      <div>
        <Link
          className="cursor-pointer hover:bg-orange-300 rounded-md p-1"
          to="/Cart"
        >
          <span>سبد خرید</span>
        </Link>
      </div>

      <nav className="flex flex-row  space-x-10 mb-2 ltr  ">
        <Link
          className="cursor-pointer hover:bg-slate-300 rounded-md p-1 text-md ml-10 font-semibold"
          to="/"
        >
          <span>خانه </span>
        </Link>
        <Link
          className="cursor-pointer hover:bg-slate-300 rounded-md p-1"
          to="/Catalogue"
        >
          <span className="cursor-pointer text-md font-semibold">کاتالوگ </span>
        </Link>
        <span
          className="cursor-pointer hover:bg-slate-300 rounded-md p-1"
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
          <span className="cursor-pointer text-md font-semibold">پروفایل</span>
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default BottomHeader;
