import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/authSelector";
import { Nav, Stack } from "react-bootstrap";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <Nav
        variant="pills"
        className="justify-content-center flex-grow-1 pe-3 "
        justify
      >
        <Stack direction="horizontal" gap={5} bg="success" className="ms-10">
          <Nav.Link as={NavLink} className="text-warning " to="/">
            HomePage
          </Nav.Link>

          {isLoggedIn && (
            <Nav.Link as={NavLink} to="/contacts" className="text-warning">
              Contacts
            </Nav.Link>
          )}
        </Stack>
      </Nav>
    </nav>
  );
};

export default Navigation;
