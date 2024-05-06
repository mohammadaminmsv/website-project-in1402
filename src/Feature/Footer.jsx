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
        className="container rounded-t-2xl shadow-2xl bottom-0 relative h-[200pt] flex flex-row-reverse justify-between mt-10 w-full px-20  py-3 bg-teal-50 text-right"
        id="footer"
      >
        <div className="container flex flex-col space-y-3">
          <span className="font-bold">امور مشتریان</span>
          <span className="font-thin">داشبورد مشتریان</span>
          <span className="font-thin">شرایط فروش به همکار</span>
          <span className="font-thin">قوانین امتیاز و پاداش</span>
          <span className="font-thin">آموزش فعال سازی دستگاه</span>
        </div>
        <div className="container flex flex-col space-y-3">
          <span className="font-bold">راهنمای مشتریان</span>
          <span className="font-thin">راهنمای خرید</span>
          <span className="font-thin">روش ارسال و خرید</span>
          <span className="font-thin">پرسش های متداول</span>
          <span className="font-thin">قوانین و مقررات</span>
          <span className="font-thin">حریم خصوصی</span>
        </div>
        <div className="container flex flex-col space-y-3 ">
          <span className="font-bold">اطلاعات تماس</span>
          <span className="font-thin">نشانی:تهران اختیاریه جنوبی</span>
          <span className="font-thin">تلفن:09050962205</span>
          <span className="font-thin text-nowrap">
            mohammadaminmsv27@gmail.com : ایمیل
          </span>
          <span className="font-thin">تماس با ما</span>
        </div>
        <div className="container flex flex-col space-y-3 pr-5">
          <span className="font-bold ">موسوی در شبکه های اجتماعی</span>
          <div className="flex flex-row space-x-4">
            <span className="font-thin ml-24 cursor-pointer">
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
