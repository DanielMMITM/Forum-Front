import {
  CHARACTERS_WORD_ERROR,
  MAX_LENGTH_ERROR,
  REQUIRED_FIELD_ERROR,
} from '@/utils/constants/GlobalConstants';
import { capitalizeString } from '@/utils/helpers/capitalizeString';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useUserStore } from '@/store/userStore';
import { ResponseForm } from '@/utils/types/responseTypes';
import { useAddResponse } from './useAddResponse';
import { TEXT_FIELD, TEXT_MAX_LENGTH } from '@/utils/constants/Response/responseConstants';

export const useAddResponseForm = (postId: number) => {
  const { id } = useUserStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ResponseForm>({
    defaultValues: {
      text: '',
    },
  });

  const { addResponse, isPendingAddAnswer } = useAddResponse();

  function updateFields(): void {
    reset();
  }

  const { ref: textResponseReference, ...textResponseProps } = register(TEXT_FIELD, {
    required: `${capitalizeString(TEXT_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: TEXT_MAX_LENGTH,
      message: `${capitalizeString(
        TEXT_FIELD
      )}${MAX_LENGTH_ERROR}${TEXT_MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const onSubmit: SubmitHandler<ResponseForm> = (data) => {
    console.log('submit: ', data);
    const { text } = data;
    const body: Record<string, string | number> = {
      text: text,
      postId: postId,
      userId: Number(id),
    };
    addResponse(body, { onSuccess: updateFields });
  };

  const onError: SubmitErrorHandler<ResponseForm> = (data) => {
    console.log('error: ', data);
  };

  return {
    textResponseReference,
    textResponseProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPendingAddAnswer,
  };
};
