import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="w-full mx-auto h-280 md:min-h-screen bg-gradient-to-tr from-[#b60505] via-[#4e0b9b] to-[#336802]">
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-50 gap-0 md:gap-5 space-y-3">
        <div className="w-100 md:w-full mx-auto h-130 md:h-200 bg-[#92157d] rounded-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mt-15 md:mt-40">
            <span className="text-red-500">3DM</span>GAME
          </h2>
          <div className="mt-10 md:mt-40 text-center text-gray-300">
            <h1 className="text-2xl md:text-4xl font-bold ">Welcome Back!</h1>
            <h1 className="text-3xl font-bold ">Our special gaming website!</h1>
            <h2 className=" text-2xl font-bold space-y-3 mt-10">
              YOU WANT MOST GAMES IN HEAR!
            </h2>

            <p className=" text-xl font-bold space-y-3 mt-2">
              Please login our website
            </p>
            <p className=" text-lg font-bold space-y-3 mt-1">
              and enjoy the all game!
            </p>
          </div>
        </div>

        {/* Login card */}
        <div className="w-100 md:w-full mx-auto h-130 md:h-200 bg-[#0f357a] rounded-2xl">
          <div className="w-full max-w-md p-0 md:p-8 mt-10 md:mt-30 ml-0 md:ml-35">
            {/* form */}
            <form className="md:space-y-5 space-y-3 ml-10">
              <h2 className="text-2xl font-semibold mb-2 text-center text-gray-200">
                Sign up
              </h2>

              <div>
                <label className="block text-sm text-gray-300 ml-2 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-80 md:w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-2xl"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300  ml-2 font-medium mb-1">
                  Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-80 md:w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-2xl"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 ml-2 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-80 md:w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-2xl"
                />
              </div>

              <div className="relative">
                <label className="block text-sm text-gray-300 ml-2 mb-1">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-80 md:w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-2xl"
                />
                <span className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                  {/* <FaEye /> : <FaEyeSlash /> */}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  className="my-btn w-80 md:w-full h-10 bg-gradient-to-r from-green-700 via-yellow-600 to-blue-700 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 rounded-2xl"
                >
                  Login
                </button>
              </div>

              {/* Divider */}
              {/* <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div> */}

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signin"
                  className="text-blue-400 text-lg font-bold hover:text-white underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
