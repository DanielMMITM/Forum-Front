import { User } from "@/utils/types/userTypes";
import { create } from "zustand";

interface UserStore {
  id: number | null;
  user: User | null;
  setId: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  id: null,
  user: null,
  setId: (id: number | null): void => {
    set(() => ({
      id: id,
    }));
  },
}));
