import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserStore {
  id: number | null;
  setId: (id: number | null) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        id: null,
        setId: (id: number | null): void => {
          set(() => ({
            id: id,
          }));
        },
      }),
      { name: 'userStore' }
    )
  )
);
