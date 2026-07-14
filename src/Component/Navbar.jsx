import React from "react";
import { GiH2O, GiTigerHead } from "react-icons/gi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[#270335]">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black/80 text-white rounded-box z-1 mt-3 w-52 p-2"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>All_Apps</NavLink>
              </li>
              <li>{/* <NavLink>Download_App</NavLink> */}</li>
            </ul>
          </div>
          <h2>
            <GiTigerHead className="text-white w-15 h-15" />
          </h2>
        </div>

        <div className="navbar-end gap-15">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-gray-300 text-lg px-1">
              {" "}
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>All_Apps</NavLink>
              </li>
              <li>{/* <NavLink>Download_App</NavLink> */}</li>
            </ul>
          </div>
          <div>
            <NavLink to={"/signin"} className={"btn btn-primary"}>
              Signin
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
