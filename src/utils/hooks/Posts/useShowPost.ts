import { showPostRequest } from '@/api/Posts/posts';
import { useQuery } from '@tanstack/react-query';

export const useShowPost = (postId: number) => {
  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryFn: () => showPostRequest(postId),
    queryKey: ['post', postId],
  });

  return { post, isLoadingPost };
};
