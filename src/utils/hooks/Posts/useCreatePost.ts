import { createPostRequest } from "@/api/posts/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (body: Record<string, string>) => createPostRequest(body),
    onSuccess: () => {
      alert("Post created");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      alert(error);
    },
  });
  return { createPost, isPending };
};
