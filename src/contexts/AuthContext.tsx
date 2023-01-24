import React, { useContext, useState, createContext } from "react";
import * as auth from "../services/AuthService";
import { AuthContextType, User } from "../types";
import { Outlet } from "react-router-dom";

let AuthContext: React.Context<AuthContextType>;

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  async function login(username: string, password: string) {
    setLoading(true);
    const response = await auth.login(username, password);
    setCurrentUser(response?.user || null);
    setLoading(false);
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

  AuthContext = createContext(value);

  return (
    <AuthContext.Provider value={value}>
      {!loading && <Outlet />}
    </AuthContext.Provider>
  );
};
