import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-xl"
        >
          CollegeHub
        </Link>

        <div className="flex gap-4">
          <Link to="/colleges">
            Colleges
          </Link>

          <Link to="/compare">
            Compare
          </Link>

          <Link to="/profile/saved">
            Saved
          </Link>

          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}