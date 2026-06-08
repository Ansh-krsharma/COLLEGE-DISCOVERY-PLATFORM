import { create } from "zustand";
import { type College } from "../types/college.ts";

interface CompareStore {
  colleges: College[];

  addCollege: (
    college: College
  ) => void;

  removeCollege: (
    id: string
  ) => void;
}

export const useCompareStore =
  create<CompareStore>((set) => ({
    colleges: [],

    addCollege: (college) =>
      set((state) => {
        const exists =
          state.colleges.some(
            (c) =>
              c.id === college.id
          );

        if (
          exists ||
          state.colleges.length >= 3
        ) {
          return state;
        }

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
  }));