import React, { useEffect, useState } from "react";
import Information from "../Profile-pages/Information";
import BuyInfo from "../Profile-pages/BuyInfo";
import Button from "../Components/Button";
import { userInfo } from "../Data/UserInfo";

const Profile = () => {
  const [show, setShow] = useState({
    base: true,
    buy: false,
    information: false,
  });

  useEffect(() => {
    document
      .querySelector("#buyinfo")
      .addEventListener("click", changecomponentbuy);
    document
      .querySelector("#information")
      .addEventListener("click", changecomponentinfo);
  }, []);

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

  const myInfo = userInfo.find((item) => item.id === 100);
  return (
    <div className="container text-right mt-8 ">
      <div>
        <span className=" font-thin">{myInfo.name} سلام</span>{" "}
      </div>
      <div className="container flex flex-row-reverse text-right mt-4 shadow-lg h-[600pt]">
        <div className="w-1/4 bg-green-400 rounded-e-lg p-2 space-y-2">
          <Button className={``} name={"سابقه خرید"} id={"buyinfo"} />
          <Button className={``} name={"اطلاعات کاربر"} id={"information"} />
        </div>
        <div className="w-3/4 bg-slate-50 rounded-s-lg p-2">
          {show.base && (
            <div className="flex flex-col">
              <span>
                {myInfo.name} {myInfo.lastname}
              </span>
              "خوش آمدید! با سلام و احترام به شما. از وقتی که برای ما وقت
              گذاشته‌اید، سپاسگزاریم. امیدواریم اینجا برای شما تجربه‌ای دلپذیر و
              مفید باشد. با ما همراه باشید و از خدمات و محتواهای متنوعی که برای
              شما فراهم کرده‌ایم بهره‌مند شوید. اگر سوالی دارید یا به کمکی نیاز
              دارید، با ما تماس بگیرید. مجدداً خوش آمدید و امیدواریم وقت خوبی را
              در اینجا سپری کنید."
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
