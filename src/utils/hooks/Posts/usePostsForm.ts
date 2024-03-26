import {
  CHARACTERS_WORD_ERROR,
  MAX_LENGTH_ERROR,
  REQUIRED_FIELD_ERROR,
} from "@/utils/constants/GlobalConstants";
import {
  TEXT_FIELD,
  TEXT_MAX_LENGTH,
  TITLE_FIELD,
  TITLE_MAX_LENGTH,
  COURSE_FIELD,
} from "@/utils/constants/Posts/Posts";
import { capitalizeString } from "@/utils/helpers/capitalizeString";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useCreatePost } from "./useCreatePost";

export const usePostsForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<PostForm>({
    defaultValues: {
      title: "",
      course: 0,
      text: "",
    },
  });

  const { createPost, isPending } = useCreatePost();

  function updateFields(): void {
    reset();
  }

  const { ref: titleReference, ...titleProps } = register(TITLE_FIELD, {
    required: `${capitalizeString(TITLE_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: TITLE_MAX_LENGTH,
      message: `${capitalizeString(
        TITLE_FIELD
      )}${MAX_LENGTH_ERROR}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const { ref: courseReference, ...courseProps } = register(COURSE_FIELD, {
    required: `${capitalizeString(COURSE_FIELD)}${REQUIRED_FIELD_ERROR}`,
  });

  const { ref: textReference, ...textProps } = register(TEXT_FIELD, {
    required: `${capitalizeString(TEXT_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: TEXT_MAX_LENGTH,
      message: `${capitalizeString(
        TEXT_FIELD
      )}${MAX_LENGTH_ERROR}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const onSubmit: SubmitHandler<PostForm> = (data) => {
    console.log("submit: ", data);
    const { title, text } = data;
    const body: Record<string, string | number> = {
      title: title,
      text: text,
      userId: 1,
      courseId: 1,
    };
    createPost(body, { onSuccess: updateFields });
  };

  const onError: SubmitErrorHandler<PostForm> = (data) => {
    console.log("error: ", data);
  };

  return {
    titleReference,
    titleProps,
    textReference,
    textProps,
    courseReference,
    courseProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPending,
  };
};
