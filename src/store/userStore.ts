import { create } from "zustand";

interface UserStore {
  id: number | null;
  setId: (id: number | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  id: null,
  setId: (id: number | null): void => {
    set(() => ({
      id: id,
    }));
  },
}));
