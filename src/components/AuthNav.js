import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Stack } from "react-bootstrap";

const AuthNav = () => {
  return (
    <>
      <Nav
        variant="pills"
        className="justify-content-center flex-grow-1 pe-3 "
        justify
      >
        <Stack direction="horizontal" gap={5} bg="text-warning">
          <Nav.Link as={NavLink} to="/register" className="text-warning">
            Register
          </Nav.Link>

          <Nav.Link as={NavLink} to="/login" className="text-warning">
            LogIn
          </Nav.Link>
        </Stack>
      </Nav>
    </>
  );
};
export default AuthNav;
