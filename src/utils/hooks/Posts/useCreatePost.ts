import { createPostRequest } from "@/api/Posts/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (body: Record<string, string | number>) =>
      createPostRequest(body),
    onSuccess: () => {
      alert("Post created");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error: any) => {
      alert(error.response.data.message);
    },
  });
  return { createPost, isPending };
};
