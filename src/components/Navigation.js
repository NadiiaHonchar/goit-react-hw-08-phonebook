import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* <NavLink to="/register">Register</NavLink>
      <NavLink to="/login" >LogIn</NavLink> */}
      {/* <NavLink to="/logout">LogOut</NavLink> */}
    </nav>
  );
};

export default Navigation;
