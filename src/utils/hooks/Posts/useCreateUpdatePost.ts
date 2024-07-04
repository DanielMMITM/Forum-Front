import { createPostRequest, updatePostRequest } from '@/api/Posts/posts';
import { handleErrorsResponse } from '@/utils/helpers/handleErrorsResponse';
import { ActionTypes } from '@/utils/types/commonTypes';
import { CustomAxiosError } from '@/utils/types/errorTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useCreateUpdatePost = (action: ActionTypes) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createUpdatePost, isPending } = useMutation({
    mutationFn: (body: Record<string, string | number>) =>
      action === 'Create' ? createPostRequest(body) : updatePostRequest(body),
    onSuccess: (data) => {
      toast.success(
        `Post ${
          action === 'Create' ? 'created' : action === 'Update' ? 'updated' : 'closed'
        } successfully!`,
        {
          className: 'toast',
        }
      );
      queryClient.invalidateQueries({ queryKey: ['postsList'] });
      queryClient.invalidateQueries({ queryKey: ['post'] });
      if (action !== 'Close') navigate(`/show`, { replace: true, state: { postId: data.id } });
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });
  return { createUpdatePost, isPending };
};
