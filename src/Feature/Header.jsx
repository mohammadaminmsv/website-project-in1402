import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "../theme/Style.Header.module.css";
import Home from "../Pages/Home";
import Input from "../Components/Input";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Button from "../Components/Button";
import { ImFilter } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [value, setValue] = useState("");
  const [window, setWindows] = useState(false);
  const [windowsfilter, setWindowsfilter] = useState(false);
  const [windowsFilterItem, setwindowsFilterItem] = useState([]);
  const [searchm, setSearchm] = useState("");

  const searchMethod = async ({ queryKey }) => {
    const searchText = queryKey[1];
    const response = await axios.get(
      `https://amin-test-web-exp-default-rtdb.firebaseio.com/ShopItems${searchText}.json`
    );
    return response.data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["search", searchm],
    queryFn: searchMethod,
    staleTime: 4000,
    cacheTime: 10000,
  });

  console.log(data);

  const searchHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!searchm) {
      if (!data) return;
      const allItems = [];
      Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key])) {
          allItems.push(
            ...data[key].filter((item) =>
              item.name.toLowerCase().includes(value.toLowerCase())
            )
          );
        }
      });
      setwindowsFilterItem(allItems);
    } else {
      if (!data) return;
      setwindowsFilterItem(
        data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }, [data, value]);

  const clickHandler = () => {
    setWindowsfilter((windowsfilter) => !windowsfilter);
  };

  const radioHandler = (e) => {
    setSearchm(e.target.value);
  };
  console.log(searchm);
  return (
    <>
      <div className=" container shadow-2xl flex flex-row justify-between h-16 items-center bg-teal-500  px-10">
        <div className="flex flex-row-reverse space-x-[3px]">
          <Input
            classn={
              "w-[390px] border-2 border-gray-300 ml-10 outline-none text-right rounded-md px-3 py-1 md:w-[250px]"
            }
            place={"...جستجوی کالای مورد نظر"}
            type={"text"}
            id={"search"}
            name={"search"}
            changehandler={searchHandler}
            val={value}
          />
          {value && (
            <div className="w-[350px] flex flex-col absolute top-14 lg:left-32 lg:w-[200px] left-60 bg-teal-300 z-50 p-3 rounded-md">
              <div className="flex flex-col divide-y">
                {windowsFilterItem.map((item) => (
                  <Link>{item.name}</Link>
                ))}
              </div>
            </div>
          )}
          <Button
            click={clickHandler}
            className={""}
            name={<ImFilter className="w-5 h-5" />}
          />
          {windowsfilter && (
            <div className="w-[200px] lg:left-5 lg:top-10 flex flex-col absolute top-16 left-28 bg-teal-300 z-50 p-3 rounded-md">
              <IoCloseSharp
                onClick={() => {
                  setWindowsfilter((windowsfilter) => !windowsfilter);
                }}
              />
              <span>
                <Input
                  type={"radio"}
                  name={"Laptop"}
                  val={"/Laptop"}
                  changehandler={radioHandler}
                  checked={searchm === "/Laptop"}
                />
                Laptop
              </span>
              <span>
                <Input
                  type={"radio"}
                  name={"Laptop"}
                  val={"/MobilePhone"}
                  changehandler={radioHandler}
                  checked={searchm === "/MobilePhone"}
                />
                MobilePhone
              </span>
            </div>
          )}
        </div>
        <Link to="/">
          <img
            src="LogoSite.png"
            alt="shop logo"
            className="w-[250px] h-10 cursor-pointer rounded-[50pt] lg:hidden"
          />
        </Link>
        <div className="flex flex-row justify-center items-center space-x-3 w-[250px]">
          <Link
            className="cursor-pointer hover:bg-teal-300 px-3  rounded-md md:px-5 lg:hidden"
            to="/Signin"
          >
            <span className="">ثبت نام</span>
          </Link>
          <Link
            className="cursor-pointer hover:bg-teal-300 px-3 rounded-md lg:hidden"
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
