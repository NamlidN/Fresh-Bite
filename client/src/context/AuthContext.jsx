import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const value = {
    authData,
    setAuthData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
