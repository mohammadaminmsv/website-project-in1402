import React, { useEffect, useState } from "react";
import Information from "../Profile-pages/Information";
import BuyInfo from "../Profile-pages/BuyInfo";
import Button from "../Components/Button";
import { userInfo } from "../Data/UserInfo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState({
    base: true,
    buy: false,
    information: false,
  });
  const userInfoData = useSelector((state) => state.logi);

  useEffect(() => {
    setUser(userInfoData.userInfoAgreeSeqment.userInfoAgreeSeqment);
  });
  const changecomponentbuy = () => {
    setShow((show) => ({
      ...show,
      base: false,
      buy: true,
      information: false,
    }));
  };
  const changecomponentinfo = () => {
    setShow((show) => ({
      ...show,
      base: false,
      information: true,
      buy: false,
    }));
  };

  return (
    <div className="container text-right mt-8 h-screen">
      <div>
        <span className=" font-thin">{user.name} سلام</span>{" "}
      </div>
      <div className="container flex flex-row-reverse text-right mt-4 shadow-lg ">
        <div className="w-1/4  bg-green-400 rounded-e-lg p-2 space-y-2">
          <Button
            className={``}
            click={changecomponentbuy}
            name={"سابقه خرید"}
            id={"buyinfo"}
          />
          <Button
            className={``}
            click={changecomponentinfo}
            name={"اطلاعات کاربر"}
            id={"information"}
          />
        </div>
        <div className="w-3/4 bg-slate-50 rounded-s-lg p-2">
          {show.base && (
            <div className="flex flex-col">
              <div className="">
                خوش آمدید! با سلام و احترام به شما. از وقتی که برای ما وقت
                گذاشته‌اید، سپاسگزاریم. امیدواریم اینجا برای شما تجربه‌ای دلپذیر
                و مفید باشد. با ما همراه باشید و از خدمات و محتواهای متنوعی که
                برای شما فراهم کرده‌ایم بهره‌مند شوید. اگر سوالی دارید یا به
                کمکی نیاز دارید، با ما تماس بگیرید. مجدداً خوش آمدید و امیدواریم
                وقت خوبی را در اینجا سپری کنید
                <span> {user.email}</span>
              </div>
            </div>
          )}
          {show.buy && <BuyInfo />}
          {show.information && <Information />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
