import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((p) => String(p.id) === id);

  const { coverPhoto, title, category, description, ratings, developer } =
    app || {};
  return (
    <div className="w-full mx-auto h-70 md:h-150">
      <div className="w-11/12 mx-auto md:w-6/12 h-58 md:h-90 bg-gray-300 flex rounded-3xl gap-2 md:gap-5 mt-20 md:mt-50">
        <div className="">
          <img
            src={coverPhoto}
            alt=""
            className="w-25 h-25 md:w-70 md:h-70 rounded-full ml-3 md:ml-20 mt-10 md:mt-3"
          />
          <h2 className="text-xs md:text-lg font-bold ml-2 md:ml-30 mt-1 md:mt-3">
            {title} @!
          </h2>
        </div>
        <div className="w-70 h-50 md:w-120 md:h-80 ml-5 md:ml-20 ">
          <h2 className="text-sm md:text-3xl font-bold text-red-500 text-center">
            App Details
          </h2>
          <div className="spacey-y-5 mt-2 md:mt-5">
            <h2 className="text-sm md:text-xl font-bold">
              Category:{" "}
              <span className="text-xs md:text-lg text-black/70 ml-12">
                {category}
              </span>
            </h2>
            <div className="flex ">
              <h2 className="text-sm md:text-xl font-bold mt-1 md:mt-2">
                description:{" "}
              </h2>
              <h2 className="text-xs md:text-lg text-black/70 ml-10 mt-2">
                {description}
              </h2>
            </div>
            <h2 className="text-sm md:text-xl font-bold mt-1 md:mt-2">
              Ratings:
              <span className="text-xs md:text-lg text-black/70 ml-20">
                {ratings}
              </span>
            </h2>

            <h2 className="text-sm md:text-xl font-bold mt-1 md:mt-2">
              Developer:{" "}
              <span className="text-xs md:text-lg text-black/70 ml-12">
                {developer}
              </span>
            </h2>

            <button className="btn w-20 md:w-30 bg-blue-500 text-xs md:text-lg text-white mt-1 md:mt-2">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
