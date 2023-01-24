import { API_URL } from "../config/constants";
import { toast } from "react-toastify";
import { AuthResponse } from "../types";

export async function login(username: string, password: string) {
  const response = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data: AuthResponse = await response.json();
  if (response.ok) {
    localStorage.setItem("quoots-token", data.token);
    return data;
  } else {
    toast.error(data.message);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("quoots-token");
}

export async function signup(username: string, password: string) {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data: AuthResponse = await response.json();
  if (response.ok) {
    localStorage.setItem("quoots-token", data.token);
    return data;
  } else {
    toast.error(data.message);
    return null;
  }
}
