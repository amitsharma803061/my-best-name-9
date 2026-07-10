import React from "react";
import { PiDotsSixVerticalLight } from "react-icons/pi";

const TopSixCard = ({ app }) => {
  const { coverPhoto, title, ratings } = app;
  return (
    <div className="card w-100 md:w-70 h-63 bg-gray-300 space-y-2">
      <img
        src={coverPhoto}
        alt=""
        className="w-95 md:w-65 h-40 ml-2 mt-2 rounded-2xl"
      />
      <div className="flex justify-between text-sm font-bold text-gray-700">
        <h2 className="ml-2">{title}</h2>
        <p className="mr-2">{ratings}</p>
      </div>
      <button className=" btn text-white bg-[#5917b1] ml-2 me-2  ">
        Vew Details
      </button>
    </div>
  );
};

export default TopSixCard;
