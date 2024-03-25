import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useLoginForm } from "./useLoginForm";

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
        className="form-container "
        component={"form"}
        onSubmit={handleSubmit(onSubmit, onError)}
        autoComplete="off"
      >
        <TextField
          label="Username"
          variant="filled"
          type="text"
          ref={usernameReference}
          {...usernameProps}
          error={!!errors.username}
        />
        <FormHelperText sx={{ color: "red", fontSize: "1.3rem" }}>
          {errors?.username ? errors?.username?.message : ""}
        </FormHelperText>
        <TextField
          label="Password"
          variant="filled"
          type="text"
          ref={passwordReference}
          {...passwordProps}
          error={!!errors.password}
        />
        <FormHelperText sx={{ color: "red", fontSize: "1.3rem" }}>
          {errors?.password ? errors?.password?.message : ""}
        </FormHelperText>
        <Button variant="contained" type="submit" disabled={isPending}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
