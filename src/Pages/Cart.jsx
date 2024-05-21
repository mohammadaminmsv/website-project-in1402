import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cardItems = useSelector((state) => state.card.items);

  return (
    <>
      <div className="container text-right my-10 flex flex-col">
        <div>
          <span className=" font-thin opacity-45 text-2xl mr-5">سبد خرید</span>
        </div>
        <div className="flex flex-row-reverse my-5">
          <div className="w-4/5 border border-1 shadow-2xl h-[200pt] bg-slate-50 ml-28 rounded-lg">
            اطلاعات خرید شما به صورت زیر است
            {cardItems.length > 0 ? (
              <ul>
                {cardItems.map((item, index) => (
                  <li key={index}>
                    {item.item.name} - قیمت: {item.item.price} - تعداد:{" "}
                    {item.counts}
                  </li>
                ))}
              </ul>
            ) : (
              <p>سبد خرید خالی است.</p>
            )}
          </div>
          <div className="w-1/5 flex flex-col bg-slate-100 pr-5  border border-1 shadow-2xl h-[200pt] rounded-lg">
            مبلغ فاکتور شده
            <div>
              {cardItems.reduce(
                (total, item) => total + item.item.price * item.counts,
                0
              )}
              دلار
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
