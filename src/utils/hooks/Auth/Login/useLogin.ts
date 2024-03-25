import { loginRequest } from "@/api/Auth/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (body: Record<string, string>) => loginRequest(body),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/");
    },
    onError: (error) => {
      alert("Invalid credentials: " + error.message);
    },
  });

  return { login, isPending };
};
