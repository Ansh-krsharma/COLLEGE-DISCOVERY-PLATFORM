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
      className="border rounded-lg p-2"
    >
      {dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}