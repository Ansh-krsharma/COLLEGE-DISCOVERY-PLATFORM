import { Link } from "react-router-dom";
import { useCompareStore } from "../../store/compareStore";
import { useSavedStore } from "../../store/savedStore";
import ThemeToggle from "./ThemeToggle";
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
        <div className="hidden md:flex gap-4">  </div>
        <div className="flex gap-4">
          <div className="md:hidden">
  Menu
</div>
          <Link to="/colleges">
            Colleges
          </Link>

          <Link to="/compare">
  Compare (
  {colleges.length}
  )
</Link>

          <Link to="/profile/saved">
  Saved (
  {savedCount}
  )
</Link>

          <Link to="/login">
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}