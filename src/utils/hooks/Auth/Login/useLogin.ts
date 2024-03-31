import { loginRequest } from "@/api/Auth/auth";
import { useUserStore } from "@/store/userStore";
import { handleErrorsResponse } from "@/utils/helpers/handleErrorsResponse";
import { CustomAxiosError } from "@/utils/types/errorTypes";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (body: Record<string, string>) => loginRequest(body),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      const { setId } = useUserStore();
      setId(data.id);
      navigate("/");
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });

  return { login, isPending };
};
