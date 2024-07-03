import { AddResponseRequest } from '@/api/Responses/response';
import { handleErrorsResponse } from '@/utils/helpers/handleErrorsResponse';
import { CustomAxiosError } from '@/utils/types/errorTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useAddResponse = () => {
  const queryClient = useQueryClient();
  const { mutate: addResponse, isPending: isPendingAddAnswer } = useMutation({
    mutationFn: (body: Record<string, string | number>) => AddResponseRequest(body),
    onSuccess: () => {
      toast.success(`Response created successfully!`, {
        className: 'toast',
      });
      queryClient.invalidateQueries({ queryKey: ['post'] });
      queryClient.invalidateQueries({ queryKey: ['postsList'] });
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });

  return { addResponse, isPendingAddAnswer };
};
