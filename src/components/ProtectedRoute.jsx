import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;

  if (children.props.children.type.name === "AdminRoutes" && user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};




export default ProtectedRoute;
