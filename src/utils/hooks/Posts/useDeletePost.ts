import { deletePostRequest } from "@/api/Posts/posts";
import { handleErrorsResponse } from "@/utils/helpers/handleErrorsResponse";
import { CustomAxiosError } from "@/utils/types/errorTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDeletePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: (id: number) => deletePostRequest(id),
    onSuccess: (data) => {
      toast.success(`${data}`, { className: "toast" });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate(-1);
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });
  return { deletePost, isPending };
};
