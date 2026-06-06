import { create } from "zustand";
import { persist } from "zustand/middleware";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  averagePackage: number;
  highestPackage: number;
}

persist(
  (set) => ({
     ...
  }),
  {
    name: "compare-storage",
  }
)
interface CompareState {
  colleges: College[];

  addCollege: (
    college: College
  ) => void;

  removeCollege: (
    id: string
  ) => void;

  clearCompare: () => void;
}

export const useCompareStore =
  create<CompareState>((set) => ({
    colleges: [],

    addCollege: (college) =>
      set((state) => {
        const exists =
          state.colleges.find(
            (c) =>
              c.id === college.id
          );

        if (exists)
          return state;

        if (
          state.colleges.length >= 3
        )
          return state;

        return {
          colleges: [
            ...state.colleges,
            college,
          ],
        };
      }),

    removeCollege: (id) =>
      set((state) => ({
        colleges:
          state.colleges.filter(
            (c) => c.id !== id
          ),
      })),

    clearCompare: () =>
      set({
        colleges: [],
      }),
  }));