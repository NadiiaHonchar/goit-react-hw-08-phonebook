import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelector";
import { logOut } from "../../redux/auth/authOperation";
import { Button, Stack } from "react-bootstrap";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <Stack direction="horizontal" gap={5}>
        <div className="text-warning">Hello {name} </div>
        <Button
          variant="outline-primary"
          className="text-warning"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </Button>
      </Stack>
    </div>
  );
};

export default UserMenu;
