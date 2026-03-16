import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("token") ? true : false
  );

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  const refreshAuth = () => {
    const token = localStorage.getItem("token");
    setUser(token ? true : false);
  };

  const value = { user, login, logout, refreshAuth };

  console.log("AuthContext value:", value); // Debugging log

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
