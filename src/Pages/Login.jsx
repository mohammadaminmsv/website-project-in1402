import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NotiActions } from "../Information/Notiaction";
import { infoActions } from "../Information/GetUserDataFromDB";

const Login = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState({});
  const [data, setData] = useState([]);
  const [emialchk, setEmailchk] = useState([]);
  const [passchk, setPasschk] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://amin-test-web-exp-default-rtdb.firebaseio.com/UserInfo.json"
      )
      .then((res) => {
        const usersArray = res.data ? Object.values(res.data) : [];
        setData(usersArray);
      });
  }, []);

  const changehandler = (e) => {
    setInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    data.find((item) => {
      const user = Object.values(item)[2];
      setEmailchk(user.map((item) => item.email));
      setPasschk(user.map((item) => item.password));
    });
  }, [data]);

  const clickhandler = () => {
    if (data.length > 0) {
      let s1 = emialchk.find((item) => item === info.loginemail);
      let s2 = passchk.find((item) => item === info.loginpassword);

      console.log(s1, s2);
      console.log(data);
      if (s1 && s2) {
        const loggedInUser = data.find((item) => {
          const userDetails = Object.values(item)[2];
          return (
            userDetails.email === info.loginemail &&
            userDetails.password === info.loginpassword
          );
        });
        console.log(loggedInUser)
        setShow(false);
        dispatch(
          infoActions.showInformationOfUser({
            userInfoAgreeSeqment: loggedInUser,
          })
        );
        dispatch(
          NotiActions.showNotification({
            open: true,
            message: "ورود شما موفقیت آمیز بود",
            type: "success",
          })
        );
        setTimeout(() => {
          navigate("/Profile");
        }, 2000);
      } else {
        setMessage("نام کاربری یا رمز عبور اشتباه است.");
        setShow(true);
      }
    } else {
      setMessage("خطا در بارگیری داده‌ها، لطفا دوباره تلاش کنید.");
      setShow(true);
    }
  };

  return (
    <div className="container flex flex-col w-1/2 mt-10 text-right">
      <span>مشتریان عضو</span>
      <div className="p-2 h-[390pt] justify-center flex flex-col space-y-8 items-center shadow-2xl border-2 border-teal-400 mt-10">
        <span className=" font-bold">برای ورود فیلد های زیر را پر کنید</span>
        <div className="flex flex-col space-y-2">
          <span>ایمیل خود و یا شماره تلفن موبایل را وارد کنید</span>
          <Input
            classn={
              "w-[300px] border-2 border-black ml-10 outline-none text-right rounded-md px-3 py-1 placeholder:text-sm "
            }
            changehandler={changehandler}
            place={"ایمیل خود و یا شماره تلفن موبایل را وارد کنید"}
            type={"email"}
            id={"loginemail"}
            name={"loginemail"}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span>کلمه عبور</span>
          <Input
            classn={
              "w-[300px] border-2 border-black ml-10 outline-none text-right rounded-md px-3 py-1"
            }
            changehandler={changehandler}
            place={"رمز عبور خود را وارد کنید"}
            type={"password"}
            id={"loginpassword"}
            name={"loginpassword"}
          />
        </div>
        <Button
          className={"bg-green-300 py-2 w-[100pt] rounded-md"}
          id={"login"}
          name={"ورود"}
          click={clickhandler}
        />
        {show && (
          <div className="text-red-500 border-2 px-7 py-2 border-red-200">
            {message}
          </div>
        )}
        <Link className="cursor-pointer" to="/Signin">
          <span className="text-blue-500">
            اگر حساب کاربری ندارید کلیک کنید
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
