import { checkSolutionRequest } from '@/api/Responses/response';
import { handleErrorsResponse } from '@/utils/helpers/handleErrorsResponse';
import { CustomAxiosError } from '@/utils/types/errorTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCheckSolution = () => {
  const queryClient = useQueryClient();

  const { mutate: checkSolution, isPending: isPendingSolution } = useMutation({
    mutationFn: (id: number) => checkSolutionRequest(id),
    onSuccess: () => {
      toast.success(`Solution checked successfully!`, {
        className: 'toast',
      });
      queryClient.invalidateQueries({ queryKey: ['post'] });
      queryClient.invalidateQueries({ queryKey: ['postsList'] });
    },
    onError: (error: CustomAxiosError) => {
      handleErrorsResponse(error.response.data);
    },
  });

  return { checkSolution, isPendingSolution };
};
