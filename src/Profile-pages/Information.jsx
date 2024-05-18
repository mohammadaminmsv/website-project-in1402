import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { UserActions } from "../Information/FetchUserInfo";
import { UpdateDataOfUser } from "../Information/UpdateDataOfUser";
import { useNavigate } from "react-router";
import { infoActions } from "../Information/GetUserDataFromDB";

const Information = () => {
  const myInformation = useSelector((state) => state.logi);
  const dispatch = useDispatch();
  const [disActioveInput, setDisActiveInput] = useState(false);
  const [continuee, setContinuee] = useState(true);
  const [final, setFinal] = useState(true);
  const [formchange, setFormchange] = useState(
    myInformation.userInfoAgreeSeqment.userInfoAgreeSeqment
  );

  const toggleInput = () => {
    setDisActiveInput((current) => !current);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setContinuee((current) => !current);
    toggleInput();
  };

  const changehandler = (e) => {
    setFormchange({
      ...formchange,
      [e.target.name]: e.target.value,
    });
  };

  const virayeshhandler = (e) => {
    e.preventDefault();
    toggleInput();
    setContinuee((current) => !current);
    setFinal((current) => !current);

    dispatch(UserActions.changeInfoOfUser(formchange));
  };

  const navigate = useNavigate()
  const myitem = useSelector((state) => state.user.userInfo);
  const agreeHandler = (e) => {
    e.preventDefault();

    console.log(myitem[0].id);
    dispatch(UpdateDataOfUser(myitem));
    dispatch(
      infoActions.showInformationOfUser({
        userInfoAgreeSeqment: formchange,
      })
    );
    navigate("/profile")
   
  };
  return (
    <div className="container text-right mb-5">
      <div className="my-3  mx-20 ">
        <span className=" font-thin">اطلاعات کاربری شما</span>
      </div>
      <form className="px-10  flex flex-col border-x-2 mx-20 shadow-md py-5 ">
        <div className=" text-right flex flex-row-reverse justify-around my-3">
          <div className="flex flex-col text-right w-1/2 mx-2">
            <span>نام</span>
            <Input
              id={"name"}
              name={"name"}
              changehandler={changehandler}
              val={formchange.name}
              type={"text"}
              active={!disActioveInput}
              classn={`w-full 
              ${
                disActioveInput
                  ? "bg-white border-gray-500"
                  : "bg-gray-200 border-gray-300"
              } placeholder:px-3 mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200 text-right`}
            />
          </div>
          <div className="flex flex-col text-right w-1/2 mx-2  ">
            <span>نام خانوادگی</span>
            <Input
              id={"lastname"}
              name={"lastname"}
              changehandler={changehandler}
              val={formchange.lastname}
              active={!disActioveInput}
              type={"text"}
              classn={`w-full
              ${
                disActioveInput
                  ? "bg-white border-gray-500"
                  : "bg-gray-200 border-gray-300"
              } placeholder:px-3 mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200 text-right`}
            />
          </div>
        </div>

        <div className="flex flex-col text-right mx-2">
          <span>تلفن همراه</span>
          <Input
            id={"phonenumber"}
            active={!disActioveInput}
            name={"phonenumber"}
            changehandler={changehandler}
            val={formchange.phonenumber}
            type={"tel"}
            classn={` placeholder:px-3
            ${
              disActioveInput
                ? "bg-white border-gray-500"
                : "bg-gray-200 border-gray-300"
            } placeholder:text-right  w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>
        <div className=" text-right flex flex-row-reverse justify-around mt-3">
          <div className="flex flex-col text-right w-1/2 mx-2">
            <span>کلمه عبور</span>
            <Input
              id={"password"}
              active={!disActioveInput}
              name={"password"}
              changehandler={changehandler}
              val={formchange.password}
              type={"password"}
              classn={`placeholder:px-3
              ${
                disActioveInput
                  ? "bg-white border-gray-500"
                  : "bg-gray-200 border-gray-300"
              } placeholder:text-right w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
            />
          </div>
          <div className="flex flex-col text-right w-1/2 mx-2  ">
            <span>تایید کلمه عبور</span>
            <Input
              active={!disActioveInput}
              id={"repassword"}
              name={"repassword"}
              changehandler={changehandler}
              val={formchange.repassword}
              type={"password"}
              classn={`placeholder:px-3 
              ${
                disActioveInput
                  ? "bg-white border-gray-500"
                  : "bg-gray-200 border-gray-300"
              }placeholder:text-right w-full mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
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
            active={!disActioveInput}
            id={"homeaddress"}
            changehandler={changehandler}
            val={formchange.homeaddress}
            name={"homeaddress"}
            classn={`w-full mx-3 mr-3 
            ${
              disActioveInput
                ? "bg-white border-gray-500"
                : "bg-gray-200 border-gray-300"
            } py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200 text-right`}
          />
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>تلفن ثابت</span>
          <Input
            active={!disActioveInput}
            id={"homenumber"}
            changehandler={changehandler}
            val={formchange.homenumber}
            name={"homenumber"}
            classn={`w-full mx-3 mr-3
            ${
              disActioveInput
                ? "bg-white border-gray-500"
                : "bg-gray-200 border-gray-300"
            } py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>
        <div className="flex flex-col text-right mx-2">
          <span>کد ملی</span>
          <Input
            id={"code"}
            active={!disActioveInput}
            changehandler={changehandler}
            val={formchange.code}
            name={"code"}
            classn={`w-full
            ${
              disActioveInput
                ? "bg-white border-gray-500"
                : "bg-gray-200 border-gray-300"
            } placeholder:text-right placeholder:px-3 mx-3 mr-3 py-[4px] border rounded-lg focus:ring-2 outline-none my-1 ring-green-200`}
          />
        </div>
        {final ? (
          continuee ? (
            <Button
              name={"ویرایش اطلاعات کاربری"}
              id={"virayesh"}
              className={"bg-green-400 px-5 py-1 rounded-lg mt-4"}
              click={handleClick}
            />
          ) : (
            <Button
              name={"تایید اطلاعات جدید"}
              id={"changeInfo"}
              click={virayeshhandler}
              className={"bg-sky-400 px-5 py-1 rounded-lg mt-4"}
            />
          )
        ) : (
          <Button
            name={"افزودن اطلاعات جدید"}
            id={"changeInfo"}
            click={agreeHandler}
            className={"bg-red-400 px-5 py-1 rounded-lg mt-4"}
          />
        )}
      </form>
    </div>
  );
};

export default Information;
