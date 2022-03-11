import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/authSelector";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
