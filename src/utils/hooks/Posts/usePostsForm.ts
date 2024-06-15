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
} from "@/utils/constants/Posts/PostsConstants";
import { capitalizeString } from "@/utils/helpers/capitalizeString";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useCreateUpdatePost } from "./useCreateUpdatePost";
import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { PostForm, PostResponse } from "@/utils/types/postTypes";
import { ActionTypes } from "@/utils/types/commonTypes";

interface UpdateProps {
  post?: PostResponse;
  action: ActionTypes;
}

export const usePostsForm = ({ post, action }: UpdateProps) => {
  const { id } = useUserStore();
  const [course, setCourse] = useState<string>("0");
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
  } = useForm<PostForm>({
    defaultValues: {
      title: "",
      course: 0,
      text: "",
    },
  });

  useEffect(() => {
    if (post) {
      setValue("title", post.title);
      setValue("course", post.courseId);
      setCourse(String(post.courseId));
      setValue("text", post.text);
    }
  }, [post]);

  const { createUpdatePost, isPending } = useCreateUpdatePost(action);

  function updateFields(): void {
    reset();
  }

  const handleChange = (event: SelectChangeEvent) => {
    setCourse(event.target.value);
  };

  const { ref: titleReference, ...titleProps } = register(TITLE_FIELD, {
    required: `${capitalizeString(TITLE_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: TITLE_MAX_LENGTH,
      message: `${capitalizeString(
        TITLE_FIELD
      )}${MAX_LENGTH_ERROR}${TITLE_MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const { ref: courseReference, ...courseProps } = register(COURSE_FIELD, {
    required: `${capitalizeString(COURSE_FIELD)}${REQUIRED_FIELD_ERROR}`,
    validate: (value: number) => {
      if (String(value) === "0") {
        return `${capitalizeString(COURSE_FIELD)}${REQUIRED_FIELD_ERROR}`;
      }
    },
  });

  const { ref: textReference, ...textProps } = register(TEXT_FIELD, {
    required: `${capitalizeString(TEXT_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: TEXT_MAX_LENGTH,
      message: `${capitalizeString(
        TEXT_FIELD
      )}${MAX_LENGTH_ERROR}${TEXT_MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const onSubmit: SubmitHandler<PostForm> = (data) => {
    console.log("submit: ", data);
    const { title, text, course } = data;
    const body: Record<string, string | number> = {
      title: title,
      text: text,
      courseId: course,
    };
    if (action === "Update") {
      body["id"] = post!.id;
      body["statusPost"] = post!.statusPost;
    } else if (action === "Create") {
      body["userId"] = Number(id);
    }
    createUpdatePost(body, { onSuccess: updateFields });
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
    handleChange,
    course,
  };
};
