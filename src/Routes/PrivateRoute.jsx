import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, spinner } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);
  if (user?.email) {
    return children;
  }
  if (spinner) {
    return <progress className="progress w-56"></progress>;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
