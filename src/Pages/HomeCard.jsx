import React from "react";

const HomeCard = ({ game }) => {
  return (
    <div className="">
      <img
        src={game.coverPhoto}
        alt=""
        className="w-30 h-30 rounded-full ml-5 mt-5"
      />
    </div>
  );
};

export default HomeCard;
