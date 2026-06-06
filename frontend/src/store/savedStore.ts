import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SavedStore {
  savedIds: string[];

  toggleSaved: (
    id: string
  ) => void;

  isSaved: (
    id: string
  ) => boolean;
}

export const useSavedStore =
  create<SavedStore>()(
    persist(
      (set, get) => ({
        savedIds: [],

        toggleSaved: (id) => {
          const saved =
            get().savedIds;

          if (
            saved.includes(id)
          ) {
            set({
              savedIds:
                saved.filter(
                  (item) =>
                    item !== id
                ),
            });
          } else {
            set({
              savedIds: [
                ...saved,
                id,
              ],
            });
          }
        },

        isSaved: (id) =>
          get().savedIds.includes(
            id
          ),
      }),
      {
        name: "saved-colleges",
      }
    )
  );