import React, { useState } from "react";
import Slider from "../Components/Slider";
import Button from "../Components/Button";
import { Link, Outlet } from "react-router-dom";
import { GiGameConsole } from "react-icons/gi";
import { TbDeviceMobileSearch } from "react-icons/tb";
import { GiLaptop } from "react-icons/gi";
import { TbDeviceWatch } from "react-icons/tb";
import SpecialComponent from "../ProductComponent/SpecialComponent";
import FetchInfo from "../Information/FetchInfo";

const Home = () => {
  return (
    <div className=" space-y-[60pt]">
      <div className="my-10 container  ">
        <Slider />
      </div>
      <div className="container flex flex-row justify-center divide-x-4 divide-gray-300 lg:flex-col lg:space-y-3">
        <div className="flex flex-col-reverse px-16 text-center md:px-5">
          <p className="text-xs">ارسال سریع و فوری برای محدوده شهر تهران</p>
          <strong>ارسال فوری</strong>
        </div>
        <div className="flex flex-col-reverse px-16 text-center md:px-5">
          <p className="text-xs">کالای معتبر و مطمئن</p>
          <strong className="md:whitespace-nowrap">ضمانت اصالت کالا</strong>
        </div>
        <div className="flex flex-col-reverse px-16 text-center md:px-5">
          <p className="text-xs">پس از ثبت سفارش</p>
          <strong className="md:whitespace-nowrap">تحویل درب محل</strong>
        </div>
        <div className="flex flex-col-reverse px-16 text-center md:px-5">
          <p className="text-xs">تا ۷ روز پس از تحویل سفارش</p>
          <strong className="md:whitespace-nowrap">ضمانت ارجاع و تعویض</strong>
        </div>
      </div>
      <div className="grid grid-flow-col items-center  justify-center  space-x-12 md:grid-cols-2  md:gap-4 md:grid-rows-2 mt-10 lg:grid-cols-4 lg:grid-rows-4">
        <Link
          className="cursor-pointer flex md:items-center md:justify-center"
          to="/product/watch"
        >
          <Button
            logo={<TbDeviceWatch className="w-10 h-10" />}
            name={"ساعت هوشمند"}
            className={
              "flex flex-row bg-yellow-600 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link
          className="cursor-pointer flex md:items-center md:justify-center "
          to="/product/watch"
        >
          <Button
            logo={<TbDeviceMobileSearch className="w-10 h-10" />}
            name={"گوشی و تبلت"}
            className={
              "flex flex-row bg-green-500  justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl md:ml-0"
            }
          />
        </Link>
        <Link
          className="cursor-pointer flex md:items-center md:justify-center"
          to="/product/watch"
        >
          <Button
            logo={<GiLaptop className="w-10 h-10" />}
            name={"لبتاپ"}
            className={
              "flex flex-row bg-green-300  justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link
          className="cursor-pointer flex md:items-center md:justify-center "
          to="/product/watch"
        >
          <Button
            logo={<GiGameConsole className="w-10 h-10" />}
            name={"کنسول بازی"}
            className={
              "flex flex-row justify-around bg-yellow-300 w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
      </div>
      <Outlet />
      <SpecialComponent />
      <div className="grid grid-flow-col items-center  justify-center space-x-12 md:grid-cols-2  md:gap-4 md:grid-rows-2 mt-10 ">
        <Link
          className="cursor-pointer flex md:items-center md:justify-center"
          to="/product/watch"
        >
          <Button
            logo={<TbDeviceWatch className="w-10 h-10" />}
            name={"ساعت هوشمند"}
            className={
              "flex flex-row bg-yellow-600 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link
          className="cursor-pointer flex md:items-center md:justify-center "
          to="/product/watch"
        >
          <Button
            logo={<TbDeviceMobileSearch className="w-10 h-10" />}
            name={"گوشی و تبلت"}
            className={
              "flex flex-row bg-green-500 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl "
            }
          />
        </Link>
        <Link
          className="cursor-pointer flex md:items-center md:justify-center"
          to="/product/watch"
        >
          <Button
            logo={<GiLaptop className="w-10 h-10" />}
            name={"لبتاپ"}
            className={
              "flex flex-row bg-green-300  justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link
          className="cursor-pointer flex md:items-center md:justify-center "
          to="/product/watch"
        >
          <Button
            logo={<GiGameConsole className="w-10 h-10" />}
            name={"کنسول بازی"}
            className={
              "flex flex-row justify-around bg-yellow-300 w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
      </div>
      <Outlet />
      <SpecialComponent />
    </div>
  );
};

export default Home;
