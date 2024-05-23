import React from "react";
import { specialProduct } from "../Data/specialProducts";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SpecialComponent = () => {
  const show = (e) => {
    const itemElement = e.currentTarget.children;
    itemElement[0].style.visibility = "visible";
  };
  const unshow = (e) => {
    const itemElement = e.currentTarget.children;
    itemElement[0].style.visibility = "hidden";
  };
  return (
    <div className="container text-center border-dashed border-t-2 pt-3 border-cyan-300 space-x-10">
      <h3 className=" text-red-400 font-bold text-2xl">محصولات ویژه</h3>
      <div className=" mt-7 grid grid-cols-5 space-x-5  md:grid-cols-3 md:space-y-5">
        {specialProduct.map((item) => (
          <div
            key={item.id}
            onMouseEnter={(e) => show(e, item)}
            onMouseLeave={unshow}
            className="rounded-xl hover:shadow-2xl  ring-2"
          >
            <div className={`invisible rounded-lg absolute bg-green-300 `}>
              <Popup
                trigger={
                  <button className="text-sm p-1 hover:underline">
                    {" "}
                    مشاهده سریع{" "}
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">Welcome to GFG!!!</div>
                    <div>
                      <button
                        className="border border-black"
                        onClick={() => close()}
                      >
                        Close modal
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <img className="rounded-t-xl cursor-pointer" src={item.image} />
            <div className="p-2 my-5 text-xs hover:text-blue-500 cursor-pointer">
              {item.name}
            </div>
            <div className="my-3 pb-2">
              <span className="text-xl">قیمت : </span>
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialComponent;
