import { format } from "date-fns";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
      <section className="text-center">
        <h2 className="text-5xl font-bold text-gray-200 pt-5">
          This is my special gaming website
        </h2>
        <p className="text-gray-300 text-lg font-bold mt-3">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </p>
      </section>
      {/* // section 2 */}
      <section className="w-7/12 mx-auto h-50 bg-[#072a41] mt-3">
        <h2>Game Slider</h2>
      </section>
    </div>
  );
};

export default Home;
