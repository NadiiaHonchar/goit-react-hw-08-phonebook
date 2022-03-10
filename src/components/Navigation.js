import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
