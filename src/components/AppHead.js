import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import Navigation from "./Navigation";
import { getIsLoggedIn } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";

const AppHead = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <Navigation></Navigation>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
export default AppHead;
