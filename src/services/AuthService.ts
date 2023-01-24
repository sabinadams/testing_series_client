import { API_URL } from "../config/constants";
import { toast } from "react-toastify";
import { AuthResponse } from "../types";

export async function login(username: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data: AuthResponse = await response.json();
    localStorage.setItem("quoots-token", data.token);
    return data;
  } else {
    toast("This sucks...");
    return null;
  }
}

export function logout() {
  localStorage.removeItem("quoots-token");
}

export async function signup(username: string, password: string) {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data: AuthResponse = await response.json();
    localStorage.setItem("quoots-token", data.token);
    return data;
  } else {
    toast("This sucks...");
    return null;
  }
}
