import {
  MAX_LENGTH,
  PASSWORD_FIELD,
  USERNAME_FIELD,
} from "@/utils/constants/Auth/authConstants";
import {
  CHARACTERS_WORD_ERROR,
  MAX_LENGTH_ERROR,
  REQUIRED_FIELD_ERROR,
} from "@/utils/constants/GlobalConstants";
import { capitalizeString } from "@/utils/helpers/capitalizeString";
import { useLogin } from "@/utils/hooks/Auth/Login/useLogin";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

export const useLoginForm = () => {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { ref: usernameReference, ...usernameProps } = register(
    USERNAME_FIELD,
    {
      required: `${capitalizeString(USERNAME_FIELD)}${REQUIRED_FIELD_ERROR}`,
      maxLength: {
        value: MAX_LENGTH,
        message: `${capitalizeString(
          USERNAME_FIELD
        )}${MAX_LENGTH_ERROR}${MAX_LENGTH_ERROR}${CHARACTERS_WORD_ERROR}`,
      },
    }
  );

  const { ref: passwordReference, ...passwordProps } = register(
    PASSWORD_FIELD,
    {
      required: `${capitalizeString(PASSWORD_FIELD)}${REQUIRED_FIELD_ERROR}`,
      maxLength: {
        value: MAX_LENGTH,
        message: `${capitalizeString(
          PASSWORD_FIELD
        )}${MAX_LENGTH_ERROR}${MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
      },
    }
  );

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log("submit: ", data);
    const body: Record<string, string> = {
      username: data.username,
      password: data.password,
    };
    login(body);
  };

  const onError: SubmitErrorHandler<LoginForm> = (data) => {
    console.log("error: ", data);
  };

  return {
    usernameReference,
    usernameProps,
    passwordReference,
    passwordProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPending,
  };
};
