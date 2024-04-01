import {
  CONFIRM_PASSWORD_ERROR,
  CONFIRM_PASSWORD_FIELD,
  EMAIL_FIELD,
  MAX_LENGTH,
  MAX_LENGTH_EMAIL,
  PASSWORD_FIELD,
  USERNAME_FIELD,
} from "@/utils/constants/Auth/SignUp";
import {
  CHARACTERS_WORD_ERROR,
  MAX_LENGTH_ERROR,
  REQUIRED_FIELD_ERROR,
} from "@/utils/constants/GlobalConstants";
import { capitalizeString } from "@/utils/helpers/capitalizeString";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

export const useSignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpForm>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { ref: usernameReference, ...usernameProps } = register(
    USERNAME_FIELD,
    {
      required: `${capitalizeString(USERNAME_FIELD)}${REQUIRED_FIELD_ERROR}`,
      maxLength: {
        value: MAX_LENGTH,
        message: `${capitalizeString(
          USERNAME_FIELD
        )}${MAX_LENGTH_ERROR}${MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
      },
    }
  );

  const { ref: emailReference, ...emailProps } = register(EMAIL_FIELD, {
    required: `${capitalizeString(EMAIL_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: MAX_LENGTH_EMAIL,
      message: `${capitalizeString(
        EMAIL_FIELD
      )}${MAX_LENGTH_ERROR}${MAX_LENGTH_EMAIL}${CHARACTERS_WORD_ERROR}`,
    },
  });

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

  const { ref: confirmPasswordReference, ...confirmPasswordProps } = register(
    CONFIRM_PASSWORD_FIELD,
    {
      required: CONFIRM_PASSWORD_ERROR,
      maxLength: {
        value: MAX_LENGTH,
        message: `${capitalizeString(
          CONFIRM_PASSWORD_FIELD
        )}${MAX_LENGTH_ERROR}${MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
      },
    }
  );

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<SignUpForm> = (data) => {
    console.log("ERROR: ", data);
  };

  return {
    usernameReference,
    usernameProps,
    emailReference,
    emailProps,
    passwordReference,
    passwordProps,
    confirmPasswordReference,
    confirmPasswordProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
  };
};
