import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import Navigation from "./Navigation";
import { getIsLoggedIn } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";

const AppHead = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand={false}
          bg="dark"
          className="mx-10"
          style={{ padding: "10px" }}
        >
          <Navigation></Navigation>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navbar>
      </header>
    </>
  );
};
export default AppHead;
