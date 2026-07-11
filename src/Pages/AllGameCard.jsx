import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const AllGameCard = ({ game }) => {
  const { title, coverPhoto, category, ratings, id } = game;

  return (
    <div className="card w-100 md:w-70 h-63 bg-gray-300 space-y-2 hover:scale-105 transition ease-in-out">
      <img
        src={coverPhoto}
        alt=""
        className="w-95 md:w-65 h-40 ml-2 mt-2 rounded-2xl"
      />
      <div className="flex justify-between text-sm font-bold text-gray-700">
        <h2 className="ml-2">{title}</h2>
        <p className="mr-2 flex items-center gap-1">
          {ratings}
          <FaStarHalfAlt />
        </p>
      </div>
      <Link
        to={`/app/${id}`}
        className=" btn text-white bg-[#5917b1] ml-2 me-2"
      >
        View Details
      </Link>
    </div>
  );
};

export default AllGameCard;
