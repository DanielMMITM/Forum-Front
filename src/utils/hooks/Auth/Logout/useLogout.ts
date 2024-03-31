export const useLogout = () => {
  function logout() {
    localStorage.removeItem("token");
  }

  return { logout };
};
