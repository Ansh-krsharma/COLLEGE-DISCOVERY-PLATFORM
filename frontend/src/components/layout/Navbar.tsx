import { Link, NavLink } from "react-router-dom";
import { Bookmark, GitCompareArrows, GraduationCap, LogOut, Menu } from "lucide-react";
import { useCompareStore } from "../../store/compareStore";
import { useSavedStore } from "../../store/savedStore";
import { useAuthStore } from "../../store/authStore";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const colleges = useCompareStore((state) => state.colleges);
  const savedCount = useSavedStore((state) => state.savedCount);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold text-slate-950 dark:text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <GraduationCap size={21} />
          </span>
          <span>UniPath</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/colleges" className={linkClass}>
            Colleges
          </NavLink>

          <NavLink to="/compare" className={linkClass}>
            <span className="inline-flex items-center gap-1.5">
              <GitCompareArrows size={15} />
              Compare {colleges.length ? `(${colleges.length})` : ""}
            </span>
          </NavLink>

          <NavLink to="/saved" className={linkClass}>
            <span className="inline-flex items-center gap-1.5">
              <Bookmark size={15} />
              Saved {savedCount ? `(${savedCount})` : ""}
            </span>
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          {token ? (
            <button
              onClick={logout}
              className="hidden h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:text-red-600 dark:border-slate-700 dark:text-slate-200 md:inline-flex"
            >
              <LogOut size={15} />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 md:inline-flex"
            >
              Login
            </Link>
          )}
          <ThemeToggle />
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden">
            <Menu size={19} />
          </button>
        </div>
      </div>
    </nav>
  );
}
