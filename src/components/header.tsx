import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();
  return (
    <h1 className="bg-white px-6 py-4 font-extrabold text-black text-xl">
      Quoot | {user ? user.username : "Not logged in"}
    </h1>
  );
}
