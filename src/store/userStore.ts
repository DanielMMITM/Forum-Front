import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore {
  id: number | null;
  setId: (id: number | null) => void;
}

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    id: null,
    setId: (id: number | null): void => {
      set(() => ({
        id: id,
      }));
    },
  }))
);
