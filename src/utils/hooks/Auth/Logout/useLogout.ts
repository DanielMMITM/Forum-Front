import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return { logout };
};
