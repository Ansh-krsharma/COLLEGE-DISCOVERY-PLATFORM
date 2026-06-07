import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  dark: boolean;

  toggleTheme: () => void;
}

export const useThemeStore =
  create<ThemeStore>()(
    persist(
      (set) => ({
        dark: false,

        toggleTheme: () =>
          set((state) => ({
            dark: !state.dark,
          })),
      }),
      {
        name: "theme-store",
      }
    )
  );