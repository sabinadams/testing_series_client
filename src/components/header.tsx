import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { logout, user } = useAuth();
  return (
    <header className="px-6 py-4 text-gray-800 flex items-center h-20">
      <h1 className="text-xl font-extrabold">Quoot</h1>
      {user && (
        <button
          onClick={logout}
          className="ml-auto text-sm font-bold rounded-md bg-white p-4 shadow-solid transition duration-300 ease-in-out hover:shadow-none hover:translate-x-2 hover:translate-y-2 border-2 border-gray-700"
        >
          Logout
        </button>
      )}
    </header>
  );
}
