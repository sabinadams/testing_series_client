import React, { useContext, useState, createContext } from "react";
import * as auth from "../services/AuthService";
import { AuthContextType, User } from "../types";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AuthContextInitial = {
  user: null,
  signup: () => {},
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(AuthContextInitial);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  async function login(username: string, password: string) {
    setLoading(true);
    const response = await auth.login(username, password);
    setCurrentUser(response?.user || null);
    setLoading(false);
    const origin = location.state?.from?.pathname || "/";
    navigate(origin);
  }

  function logout() {
    setCurrentUser(null);
    auth.logout();
  }

  async function signup(username: string, password: string) {
    setLoading(true);
    const response = await auth.signup(username, password);
    setCurrentUser(response?.user || null);
    setLoading(false);
  }

  const value = {
    user: currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* <{!loading && <Outlet />}> */}
      <Outlet />
    </AuthContext.Provider>
  );
};
