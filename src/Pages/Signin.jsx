import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Signin = () => {
  return (
    <div className="w-full mx-auto min-h-screen bg-gradient-to-tr from-[#7c0606] via-[#9b0b9b] to-[#861d0a]">
      <div className="grid grid-cols-1 md:grid-cols-2 p-50">
        <div className="w-full mx-auto h-200 bg-[#6d1db8] rounded-l-3xl">
          <h2 className="text-6xl font-bold text-white text-center mt-20">
            <span className="text-red-500">3DM</span>GAME
          </h2>
          <div className="mt-40 ml-10 text-white">
            <h1 className="text-4xl font-bold ">
              YOU WANT MOST GAMES IN HEAR!
            </h1>
            <h2 className=" text-2xl font-bold space-y-3 mt-10 ml-15">
              Welcome to our special gaming website!
            </h2>

            <p className=" text-xl font-bold space-y-3 ml-40 mt-2">
              Please login our website
            </p>
            <p className=" text-lg font-bold space-y-3 ml-43 mt-1">
              and enjoy the all game!
            </p>
          </div>
        </div>

        {/* Login card */}
        <div className="w-full mx-auto h-200 bg-[#8727b4] rounded-r-3xl">
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 mt-30 ml-40">
            {/* conditional rendaring */}

            <form className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Sign In
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="text"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <span className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                  {/* <FaEye /> : <FaEyeSlash /> */}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  className="hover:underline cursor-pointer"
                  type="button"
                >
                  Forget password?
                </button>

                <button
                  type="submit"
                  className="my-btn w-full h-10 bg-gradient-to-r from-green-700 via-yellow-600 to-blue-700 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
                >
                  Login
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </button>

              {/* Github Signin */}
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FaGithub className="w-5 h-5" />
                Continue with Github
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  //   to="/signup"
                  className="text-blue-400 text-lg font-bold hover:text-white underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
