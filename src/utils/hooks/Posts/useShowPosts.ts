import { showPostsRequest } from "@/api/posts/posts";
import { useQuery } from "@tanstack/react-query";

export const useShowPosts = () => {
  const {
    data: { content: posts, pageable, totalPages, totalElements } = {},
    isLoading,
  } = useQuery({
    queryFn: () => showPostsRequest(),
    queryKey: ["posts"],
  });
  return { posts, pageable, isLoading, totalPages, totalElements };
};
