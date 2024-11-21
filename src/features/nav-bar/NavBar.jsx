import React from "react";
import { NavLink } from "react-router-dom";
//import "./NavBar.css";

import { FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

import { BsBackpack3 } from "react-icons/bs";
import { TbPokeball } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

export const NavBar = () => {
  const navItems = [
    { path: "/", label: "Home", icon: <IoHomeOutline /> },
    { path: "/explore", label: "Explore", icon: <TbPokeball /> },
    { path: "/bag", label: "Bag", icon: <BsBackpack3 /> },
    { path: "/starters", label: "Starters", icon: <FaRegStar /> },
  ];

  return (
    <nav className="navbar border border-b-1 rounded-full w-fit bg-red-500">
      <ul className="navbar-links flex flex-row no-wrap gap-4 m-3">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="border rounded-full p-1 text-5xl flex justify-center bg-red-100"
          >
            <NavLink
              to={item.path}
              className={`bg-white rounded-full ${({ isActive }) =>
                isActive ? "active-link" : ""}`}
            >
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
