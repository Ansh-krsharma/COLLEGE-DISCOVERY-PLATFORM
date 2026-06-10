import { Moon, Sun } from "lucide-react";

import { useThemeStore } from "../../store/themeStore";

export default function ThemeToggle() {
  const dark =
    useThemeStore(
      (state) => state.dark
    );

  const toggleTheme =
    useThemeStore(
      (state) =>
        state.toggleTheme
    );

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
