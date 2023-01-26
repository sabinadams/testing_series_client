import { useEffect } from "react";
import Layout from "../components/layout";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
export default function Login() {
  const { login, signup, user } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(state?.path || "/");
    }
  }, [user]);

  return (
    <Layout>
      <button onClick={async () => await login("test", "test")}>Login</button>
      <button onClick={async () => await signup("test", "test")}>
        Sign Up
      </button>
    </Layout>
  );
}
