import { loginRequest } from "@/api/Auth/auth";
import { handleErrorsResponse } from "@/utils/helpers/handleErrorsResponse";
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
    onError: (error: any) => {
      handleErrorsResponse(error);
    },
  });

  return { login, isPending };
};
