import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link } from "react-router-dom";
import {getUserName} from '../../redux/auth/authSelector';
// import {getUsername} from '../../redux/auth/authOperation';
import { logOut } from "../../redux/auth/authOperation";

const UserMenu = () => {
   const dispatch= useDispatch();
   const name = useSelector(getUserName);
//    const avatar = defaultAvatar;

    return (
        <div>
        {/* <Link to="/logout">LogOut</Link> */}
        <h2>Hello {name} </h2>
        <button type="button" 
        onClick={()=>dispatch(logOut())}
        // onClick={}
        >
            LogOut</button>
        </div>
    );
  };

export default UserMenu;