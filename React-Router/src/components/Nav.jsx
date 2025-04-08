import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex px-20 py-5 gap-10 text-white">
      <NavLink to="/" className={({ isActive }) => `relative group pb-1 ${isActive ? 'active-link font-bold' : ''}`}>
        Home
      </NavLink>
      <NavLink to="/user" className={({ isActive }) => `relative group pb-1 ${isActive ? 'active-link font-bold' : ''}`}>
        User
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `relative group pb-1 ${isActive ? 'active-link font-bold' : ''}`}>
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
