import { useLogin } from "@/hooks/Auth/useLogin";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "all" });

  const { login, isPending } = useLogin();

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
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
        />
        <FormHelperText sx={{ color: "red", fontSize: "1.3rem" }}>
          {errors?.username ? errors?.username?.message : ""}
        </FormHelperText>
        <TextField
          label="Password"
          variant="filled"
          type="text"
          {...register("password", { required: "Password is required" })}
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
