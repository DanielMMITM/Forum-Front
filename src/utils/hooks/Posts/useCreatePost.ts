import { createPostRequest } from "@/api/Posts/posts";
import { handleErrorsResponse } from "@/utils/helpers/handleErrorsResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (body: Record<string, string | number>) =>
      createPostRequest(body),
    onSuccess: () => {
      toast.success("Post created successfully!", { className: "toast" });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error: any) => {
      handleErrorsResponse(error);
    },
  });
  return { createPost, isPending };
};
