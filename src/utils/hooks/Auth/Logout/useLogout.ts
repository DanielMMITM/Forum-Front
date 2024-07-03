import { useUserStore } from '@/store/userStore';

export const useLogout = () => {
  const { setId } = useUserStore();
  function logout() {
    localStorage.removeItem('token');
    setId(null);
  }

  return { logout };
};
