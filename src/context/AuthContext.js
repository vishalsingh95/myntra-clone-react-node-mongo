import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")) : null
  );

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser(jwtDecode(token));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const refreshAuth = () => {
    const token = localStorage.getItem("token");
    setUser(token ? jwtDecode(token) : null);
  };

  const value = { user, login, logout, refreshAuth };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
