import React from "react";
import {Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">LogIn</Link>
    </>
  );
};
export default AuthNav;