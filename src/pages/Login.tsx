import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useLoginForm } from "@/utils/hooks/Auth/Login/useLoginForm";
import { capitalizeString } from "@/utils/helpers/capitalizeString";
import { PASSWORD_FIELD, USERNAME_FIELD } from "@/utils/constants/Auth/Login";

export const Login = () => {
  const {
    usernameReference,
    usernameProps,
    passwordReference,
    passwordProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPending,
  } = useLoginForm();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <h1 className="heading-primary">Login</h1>
      <Box
        display={"flex"}
        alignContent={"center"}
        flexDirection={"column"}
        rowGap={"2rem"}
        minWidth={"30%"}
        className="form-container"
        component={"form"}
        onSubmit={handleSubmit(onSubmit, onError)}
        autoComplete="off"
      >
        <TextField
          label={capitalizeString(USERNAME_FIELD)}
          variant="filled"
          type="text"
          ref={usernameReference}
          {...usernameProps}
          error={!!errors.username}
        />
        <FormHelperText className="form-container__error">
          {errors?.username ? errors?.username?.message : ""}
        </FormHelperText>
        <TextField
          label={capitalizeString(PASSWORD_FIELD)}
          variant="filled"
          type="text"
          ref={passwordReference}
          {...passwordProps}
          error={!!errors.password}
        />
        <FormHelperText className="form-container__error">
          {errors?.password ? errors?.password?.message : ""}
        </FormHelperText>
        <Button variant="contained" type="submit" disabled={isPending}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
