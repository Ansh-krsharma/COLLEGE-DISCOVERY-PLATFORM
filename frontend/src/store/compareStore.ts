import { create } from "zustand";

interface College {
  id: string;
  name: string;
}

interface CompareStore {
  colleges: College[];

  addCollege: (
    college: College
  ) => void;

  removeCollege: (
    id: string
  ) => void;
}

export const useCompareStore = create<CompareStore>((set) => ({
  colleges: [],

  addCollege: (college) =>
    set((state) => ({
      colleges: [...state.colleges, college].slice(0, 3),
    })),

  removeCollege: (id) =>
    set((state) => ({
      colleges: state.colleges.filter((c) => c.id !== id),
    })),
}));