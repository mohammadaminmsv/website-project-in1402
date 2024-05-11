import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { sendUserDataToDb } from "../Information/Senddata";
import { UserActions } from "../Information/FetchUserInfo";
import Popup from "reactjs-popup";
import Notiaction, { NotiActions } from "../Information/Notiaction";
import Notfication from "../Components/Notfication";
import { useNavigate } from "react-router";
import axios from "axios";

const Signin = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    repassword: "",
    homeaddress: "",
    homenumber: "",
    code: "",
  });
  const [infoToDb, setInfoToDb] = useState([]);
  const changehandler = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const [continu, setContinu] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const isFormFilled =
      form.name &&
      form.lastname &&
      form.email &&
      form.phonenumber &&
      form.password &&
      form.repassword;

    if (isFormFilled) {
      console.log(form);
      dispatch(UserActions.addUser(form));
      setContinu(true);
    } else {
      dispatch(
        NotiActions.showNotification({
          open: true,
          message: "اطلاعات را تکمیل کنید",
          type: "warning",
        })
      );
    }
  };
  const myItem = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(
        "https://amin-test-web-exp-default-rtdb.firebaseio.com/UserInformation.json"
      )
      .then((res) => setInfoToDb(res.data.userInfo));
  }, []);
  const navigator = useNavigate();
  const signhandler = () => {
    console.log(myItem);
    console.log(form);
    if (infoToDb.find((user) => user.email === form.email)) {
      dispatch(
        NotiActions.showNotification({
          open: true,
          message: "ایمیل تکراری است",
          type: "error",
        })
      );
    } else {
      dispatch(sendUserDataToDb(myItem));
      setContinu(false);
      setTimeout(() => {
        navigator(`/Profile`);
      }, 3000);
    }
  };

  return (
    <div className="container text-right">
      <div className="my-3 mx-20">
        <span className=" font-thin">ایجاد حساب جدید</span>
      </div>
      <form
        onSubmit={handleClick}
        className="px-10  flex flex-col border-x-2 mx-20 shadow-md py-5"
      >
        <div className=" text-right flex flex-row-reverse justify-around my-3">
          <div className="flex flex-col text-right w-1/2 mx-2">
            <span>نام</span>
            <Input
              id={"name"}
              place={"حتما تکمیل بشود"}
              name={"name"}
              changehandler={changehandler}
              type={"text"}
              classn={`w-full placeholder:px-3 mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200 text-right`}
            />
          </div>
          <div className="flex flex-col text-right w-1/2 mx-2  ">
            <span>نام خانوادگی</span>
            <Input
              id={"lastname"}
              place={"حتما تکمیل بشود"}
              name={"lastname"}
              changehandler={changehandler}
              type={"text"}
              classn={`w-full placeholder:px-3 mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200 text-right`}
            />
          </div>
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>آدرس ایمیل</span>
          <Input
            id={"email"}
            name={"email"}
            type={"email"}
            changehandler={changehandler}
            classn={`w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>تلفن همراه</span>
          <Input
            id={"phonenumber"}
            place={"حتما تکمیل بشود"}
            name={"phonenumber"}
            changehandler={changehandler}
            type={"tel"}
            classn={` placeholder:px-3 placeholder:text-right  w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>
        <div className=" text-right flex flex-row-reverse justify-around mt-3">
          <div className="flex flex-col text-right w-1/2 mx-2">
            <span>کلمه عبور</span>
            <Input
              id={"password"}
              place={"حتما تکمیل بشود"}
              name={"password"}
              changehandler={changehandler}
              type={"password"}
              classn={`placeholder:px-3 placeholder:text-right w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
            />
          </div>
          <div className="flex flex-col text-right w-1/2 mx-2  ">
            <span>تایید کلمه عبور</span>
            <Input
              id={"repassword"}
              place={"حتما تکمیل بشود"}
              name={"repassword"}
              changehandler={changehandler}
              type={"password"}
              classn={`placeholder:px-3 placeholder:text-right w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
            />
          </div>
        </div>
        <div className="mb-3">
          <span className=" font-thin">
            رمز عبور باید شامل حروف بزرگ لاتین و اعداد باشد
          </span>
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>آدرس محل سکونت</span>
          <Input
            id={"homeaddress"}
            changehandler={changehandler}
            name={"homeaddress"}
            classn={`w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200 text-right`}
          />
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>تلفن ثابت</span>
          <Input
            id={"homenumber"}
            changehandler={changehandler}
            name={"homenumber"}
            classn={`w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>کد ملی</span>
          <Input
            id={"code"}
            place={"حتما تکمیل بشود"}
            changehandler={changehandler}
            name={"code"}
            classn={`w-full placeholder:text-right placeholder:px-3 mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>

        <div className="mt-5">
          {!continu && (
            <Button
              className={`bg-green-300 px-5 rounded-md py-[4px] transition-all duration-700`}
              id={"button"}
              name={"تایید اطلاعات"}
            />
          )}
          {continu ? (
            <div className="mt-10 flex flex-row space-x-5 transition-all duration-700">
              <button
                className=" bg-blue-300 px-5 rounded-md"
                onClick={signhandler}
              >
                ثبت نام
              </button>
            </div>
          ) : (
            <div className="transition-all duration-700"></div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signin;
