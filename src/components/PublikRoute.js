import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/authSelector";

export default function PublikRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const souldNavigate = isLoggedIn && restricted;
  if (souldNavigate) {
    return <Navigate to="/" />;
  }
  return children;
}
