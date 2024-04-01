import { createUserRequest } from "@/api/Auth/auth";
import { handleErrorsResponse } from "@/utils/helpers/handleErrorsResponse";
import { CustomAxiosError } from "@/utils/types/errorTypes";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { mutate: createUser, isPending } = useMutation({
    mutationFn: (body: Record<string, string>) => createUserRequest(body),
    onSuccess: (data: SignUpResponse) => {
      toast.success(
        `Your user has been created successfully, ${data.username}`
      );
      navigate("/login");
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });

  return { createUser, isPending };
};
