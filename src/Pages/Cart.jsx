import React from "react";

const Cart = () => {
  return (
    <>
      <div className="container text-right my-10 flex flex-col">
        <div>
          <span className=" font-thin opacity-45 text-2xl mr-5">سبد خرید</span>
        </div>
        <div className="flex flex-row-reverse my-5">
          <div className="w-4/5 border border-1 shadow-2xl h-[200pt] bg-slate-50 ml-28 rounded-lg">
            khl lpw,g
          </div>
          <div className="w-1/5 bg-red-400">shtva alh</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
