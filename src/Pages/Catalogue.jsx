import React from "react";
import Login from "./Login";

const Catalogue = () => {
  const popout = () => {
    alert(<Login />);
  };

  return (
    <>
      <div className="container">
        <div>
          <div className=" ">
            <img
              src="iphone-15-pro-model-unselect-gallery-2-202309_GEO_EMEA.jpg "
              className=""
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl text-white font-bold h-[500pt]  top-48 hover:backdrop-blur-md">
            IPHONE-15 PRO
            <button className=" bg-gray-700 px-10 py-2 rounded-2xl mt-10">
              برای مشاهده محصول کلیک کنید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
