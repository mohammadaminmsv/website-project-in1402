import React from "react";
import styles from "../theme/Style.Footer.module.css";
import { Link, Outlet } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <footer
        className="container rounded-t-2xl shadow-2xl lg:flex-col lg:space-y-4 bottom-0 relative lg:h-[490px] h-[200pt] flex flex-row-reverse justify-between mt-10 w-full px-20  py-3 bg-teal-50 text-right md:px-3"
        id="footer"
      >
        <div className="container flex flex-col lg:divide-x-4 lg:flex-wrap lg:flex-row-reverse space-y-3 md:space-y-1">
          <span className="font-bold lg:px-4">امور مشتریان</span>
          <span className="font-thin">داشبورد مشتریان</span>
          <span className="font-thin">شرایط فروش به همکار</span>
          <span className="font-thin">قوانین امتیاز و پاداش</span>
          <span className="font-thin">آموزش فعال سازی دستگاه</span>
        </div>
        <div className="container flex flex-col lg:divide-x-4 lg:flex-wrap space-y-3 lg:flex-row-reverse">
          <span className="font-bold lg:px-4">راهنمای مشتریان</span>
          <span className="font-thin">راهنمای خرید</span>
          <span className="font-thin">روش ارسال و خرید</span>
          <span className="font-thin">پرسش های متداول</span>
          <span className="font-thin">قوانین و مقررات</span>
          <span className="font-thin">حریم خصوصی</span>
        </div>
        <div className="container flex flex-col lg:divide-x-4 lg:flex-wrap space-y-3 lg:flex-row-reverse">
          <span className="font-bold  lg:px-4">اطلاعات تماس</span>
          <span className="font-thin">نشانی:تهران اختیاریه جنوبی</span>
          <span className="font-thin">تلفن:09050962205</span>
          <span className="font-thin text-nowrap">
            mohammadaminmsv27@gmail.com : ایمیل
          </span>
          <span className="font-thin">تماس با ما</span>
        </div>
        <div className="container flex flex-col space-y-3 pr-5 md:pr-1">
          <span className="font-bold ">موسوی در شبکه های اجتماعی</span>
          <div className="flex flex-row space-x-4">
            <span className="font-thin ml-24 md:ml-0 cursor-pointer">
              <FaInstagram className="w-12 h-12" />
            </span>
            <span className="font-thin cursor-pointer">
              <RiTelegramLine className="w-12 h-12" />
            </span>
            <span className="font-thin mt-[3pt] cursor-pointer">
              <VscGithub className="w-10 h-10" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
