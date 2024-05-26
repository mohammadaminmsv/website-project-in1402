import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";

import { cardActons } from "../Information/Card";
import Button from "../Components/Button";
import { NotiActions } from "../Information/Notiaction";
import { UserActions } from "../Information/FetchUserInfo";
import { infoActions } from "../Information/GetUserDataFromDB";
import { sendUserDataToDb } from "../Information/Senddata";
import addbutItemToDb from "../Information/addbutItemToDb";

const Cart = () => {
  const cardItems = useSelector((state) => state.card.items);
  const [counts, setCounts] = useState(
    cardItems.reduce(
      (acc, item) => ({ ...acc, [item.item.id]: item.counts }),
      {}
    )
  );

  const dispatch = useDispatch();
  console.log(cardItems);

  const decrementHandler = (id) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[id] || 0) - 1;
      if (newCount <= 0) {
        const { [id]: _, ...newCounts } = prevCounts;
        dispatch(cardActons.decrementCount(id));
        return newCounts;
      } else {
        dispatch(cardActons.decrementCount(id));
        return { ...prevCounts, [id]: newCount };
      }
    });
  };

  const incrementHandler = (id) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[id] || 0) + 1;
      dispatch(cardActons.incrementCount(id));
      return { ...prevCounts, [id]: newCount };
    });
  };

  const deletehandler = (id) => {
    setCounts((prevCounts) => {
      const { [id]: _, ...newCounts } = prevCounts;
      dispatch(cardActons.deleteItem(id));
      return newCounts;
    });
  };

  const login = useSelector(
    (state) => state.logi.userInfoAgreeSeqment.userInfoAgreeSeqment
  );
  const user = useSelector((state) => state.user);

  const clickHandler = () => {
    if (login === "") {
      dispatch(
        NotiActions.showNotification({
          open: true,
          message: "لطفا ابتدا ورود به سایت کنید",
          type: "error",
        })
      );
    } else {
      const userData = {
        userId: login.id,
        cartItems: cardItems,
        total: cardItems.reduce(
          (total, item) => total + item.item.price * item.counts,
          0
        ),
      };

      dispatch(addbutItemToDb(userData));
    }
  };

  return (
    <>
      <div className="container text-right my-10 flex flex-col ">
        <div>
          <span className=" font-thin opacity-45 text-2xl mr-5">سبد خرید</span>
        </div>
        <div className="flex flex-row-reverse my-5 lg:flex-col lg:mr-12 lg:items-start lg:content-start lg:justify-start">
          <div className="w-4/5 border border-1 shadow-2xl  bg-slate-50 ml-28 h-full rounded-lg">
            اطلاعات خرید شما به صورت زیر است
            {cardItems.length > 0 ? (
              <ul className="flex py-10  flex-col space-y-5">
                {cardItems.map((item, index) => (
                  <div className="flex flex-row-reverse space-x-4 justify-between">
                    <li
                      className="flex flex-row-reverse justify-between space-x-28 w-full px-5 rounded-lg bg-green-300"
                      key={index}
                    >
                      <div className="flex flex-col">
                        <span>{item.item.name} : نام کالا</span>
                        <span>قیمت: {item.item.price}</span>
                        <span>تعداد:{item.counts}</span>
                      </div>
                      <div className="flex content-center items-center">
                        <img
                          className=" content-center w-10 h-10"
                          src={item.item.img}
                        />
                      </div>
                    </li>
                    <div className="px-2">
                      <div onClick={() => deletehandler(item.item.id)}>
                        {<MdDeleteForever className="w-5 h-5" />}
                      </div>
                      <div onClick={() => incrementHandler(item.item.id)}>
                        {<FaPlus className="w-5 h-5" />}
                      </div>
                      <div onClick={() => decrementHandler(item.item.id)}>
                        {<FaWindowMinimize className="w-5 h-5 text-2xl" />}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <p>سبد خرید خالی است.</p>
            )}
          </div>
          <div className="w-1/5 lg:items-start  lg:flex-wrap lg:w-[180px] lg:ml-20  lg:mt-5 flex flex-col bg-slate-100 pr-5 space-y-4 items-end border border-1 shadow-2xl h-auto rounded-lg">
            مبلغ فاکتور شده
            <div className="mt-2 bg-red-300 w-3/5 lg:w-max lg:items-center flex flex-row justify-center">
              {cardItems.reduce(
                (total, item) => total + item.item.price * item.counts,
                0
              )}
              دلار
            </div>{" "}
            <div>
              <Button
                name={"پرداخت"}
                className={
                  "bg-green-300 px-5 rounded-md py-[4px] transition-all duration-700 mb-5"
                }
                click={clickHandler}
                id={"payment"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
