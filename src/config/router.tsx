import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../login/login";
import Home from "../home/home";

import { ProtectedRoute } from "../components/ProtectedRoute";
import { AuthProvider } from "../contexts/AuthContext";
export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthProvider />}>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
    </Route>
  )
);
