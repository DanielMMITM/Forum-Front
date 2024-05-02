import { createPostRequest } from "@/api/Posts/posts";
import { handleErrorsResponse } from "@/utils/helpers/handleErrorsResponse";
import { CustomAxiosError } from "@/utils/types/errorTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (body: Record<string, string | number>) =>
      createPostRequest(body),
    onSuccess: (data) => {
      toast.success("Post created successfully!", { className: "toast" });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate(`/posts/${data.id}`);
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });
  return { createPost, isPending };
};
