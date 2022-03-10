import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelector";
import { logOut } from "../../redux/auth/authOperation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <h2>Hello {name} </h2>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
