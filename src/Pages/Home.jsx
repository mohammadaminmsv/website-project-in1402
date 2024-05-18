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
      <div className="my-10 container">
        <Slider />
      </div>
      <div className="container flex flex-row justify-center divide-x-2 divide-gray-300">
        <div className="flex flex-col-reverse px-16 text-center">
          <p className="text-xs">ارسال سریع و فوری برای محدوده شهر تهران</p>
          <strong>ارسال فوری</strong>
        </div>
        <div className="flex flex-col-reverse px-16 text-center">
          <p className="text-xs">کالای معتبر و مطمئن</p>
          <strong>ضمانت اصالت کالا</strong>
        </div>
        <div className="flex flex-col-reverse px-16 text-center">
          <p className="text-xs">پس از ثبت سفارش</p>
          <strong>تحویل درب محل</strong>
        </div>
        <div className="flex flex-col-reverse px-16 text-center">
          <p className="text-xs">تا ۷ روز پس از تحویل سفارش</p>
          <strong>ضمانت ارجاع و تعویض</strong>
        </div>
      </div>
      <div className="container flex flex-row justify-center space-x-12 ml-16 mt-10 ">
        <Link className="cursor-pointer" to="/product/watch">
          <Button
            logo={<TbDeviceWatch className="w-10 h-10" />}
            name={"ساعت هوشمند"}
            className={
              "flex flex-row bg-yellow-600 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link className="cursor-pointer" to="/product/watch">
          <Button
            logo={<TbDeviceMobileSearch className="w-10 h-10" />}
            name={"گوشی و تبلت"}
            className={
              "flex flex-row bg-green-500 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link className="cursor-pointer" to="/product/watch">
          <Button
            logo={<GiLaptop className="w-10 h-10" />}
            name={"لبتاپ"}
            className={
              "flex flex-row bg-green-300  justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link className="cursor-pointer" to="/product/watch">
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
      <div className="container flex flex-row justify-center space-x-12 ml-16 mt-10 ">
        <Link className="cursor-pointer" to="/product/watch">
          <Button
            logo={<TbDeviceWatch className="w-10 h-10" />}
            name={"ساعت هوشمند"}
            className={
              "flex flex-row bg-yellow-600 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link className="cursor-pointer" to="/product/watch">
          <Button
            logo={<TbDeviceMobileSearch className="w-10 h-10" />}
            name={"گوشی و تبلت"}
            className={
              "flex flex-row bg-green-500 justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link className="cursor-pointer" to="/product/watch">
          <Button
            logo={<GiLaptop className="w-10 h-10" />}
            name={"لبتاپ"}
            className={
              "flex flex-row bg-green-300  justify-around w-52 py-2 border-2 border-black rounded-lg font-semibold text-xl"
            }
          />
        </Link>
        <Link className="cursor-pointer" to="/product/watch">
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
