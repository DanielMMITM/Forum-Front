import {
  CONFIRM_PASSWORD_ERROR,
  CONFIRM_PASSWORD_FIELD,
  EMAIL_FIELD,
  MAX_LENGTH,
  MAX_LENGTH_EMAIL,
  PASSWORD_FIELD,
  USERNAME_FIELD,
} from '@/utils/constants/Auth/authConstants';
import {
  CHARACTERS_WORD_ERROR,
  MAX_LENGTH_ERROR,
  REQUIRED_FIELD_ERROR,
} from '@/utils/constants/GlobalConstants';
import { capitalizeString } from '@/utils/helpers/capitalizeString';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';

export const useSignUpForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignUpForm>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { createUser, isPending } = useSignUp();

  const { ref: usernameReference, ...usernameProps } = register(USERNAME_FIELD, {
    required: `${capitalizeString(USERNAME_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: MAX_LENGTH,
      message: `${capitalizeString(
        USERNAME_FIELD
      )}${MAX_LENGTH_ERROR}${MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const { ref: emailReference, ...emailProps } = register(EMAIL_FIELD, {
    required: `${capitalizeString(EMAIL_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: MAX_LENGTH_EMAIL,
      message: `${capitalizeString(
        EMAIL_FIELD
      )}${MAX_LENGTH_ERROR}${MAX_LENGTH_EMAIL}${CHARACTERS_WORD_ERROR}`,
    },
  });

  const { ref: passwordReference, ...passwordProps } = register(PASSWORD_FIELD, {
    required: `${capitalizeString(PASSWORD_FIELD)}${REQUIRED_FIELD_ERROR}`,
    maxLength: {
      value: MAX_LENGTH,
      message: `${capitalizeString(
        PASSWORD_FIELD
      )}${MAX_LENGTH_ERROR}${MAX_LENGTH}${CHARACTERS_WORD_ERROR}`,
    },
    validate: () => {
      if (watch('password') === watch('confirmPassword')) {
        clearErrors('confirmPassword');
        return undefined;
      } else {
        setError('confirmPassword', { message: CONFIRM_PASSWORD_ERROR });
      }
    },
  });

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
      validate: () => {
        if (watch('confirmPassword') !== watch('password')) {
          return CONFIRM_PASSWORD_ERROR;
        }
      },
    }
  );

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    const { username, email, password } = data;
    const body: Record<string, string> = {
      username: username,
      email: email,
      password: password,
    };
    createUser(body);
  };

  const onError: SubmitErrorHandler<SignUpForm> = (data) => {
    console.log('ERROR: ', data);
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
    isPending,
  };
};
