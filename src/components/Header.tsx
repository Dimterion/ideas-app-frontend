import { Link, useNavigate } from "@tanstack/react-router";
import { Lightbulb } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { logoutUser } from "@/api/auth";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser, setAccessToken } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setAccessToken(null);
      setUser(null);
      navigate({ to: "/" });
    } catch (err: any) {
      console.log("Could not logout:", err);
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-1 py-4 sm:px-6">
        <div className="flex items-center space-x-2 text-gray-800">
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-800 sm:space-x-2"
          >
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            <h1 className="font-bold sm:text-2xl">Idea App</h1>
          </Link>
        </div>

        <nav className="flex items-center space-x-4">
          <Link
            to="/ideas"
            className="px-1 py-2 leading-none font-medium text-gray-600 transition hover:text-gray-900 sm:px-3"
          >
            Ideas
          </Link>
          {user && (
            <Link
              to="/ideas/new"
              className="rounded-md bg-blue-600 px-1 py-2 leading-none font-medium text-white text-center transition hover:bg-blue-700 sm:px-3"
            >
              + New Idea
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-1 py-2 leading-none font-medium text-gray-600 transition hover:text-gray-700 sm:px-3"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-gray-100 px-1 py-2 leading-none font-medium text-gray-800 transition hover:bg-gray-200 sm:px-3"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="hidden px-2 font-medium text-gray-700 sm:block">
                Welcome, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-1 sm:px-3 py-2 leading-none font-medium text-red-600 transition hover:text-red-900"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
