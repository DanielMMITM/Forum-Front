import {
  CONFIRM_PASSWORD_LABEL,
  EMAIL_FIELD,
  PASSWORD_FIELD,
  USERNAME_FIELD,
} from "@/utils/constants/Auth/authConstants";
import { EMPTY } from "@/utils/constants/GlobalConstants";
import { capitalizeString } from "@/utils/helpers/capitalizeString";
import { useSignUpForm } from "@/utils/hooks/Auth/SignUp/useSignUpForm";
import { useSignUpUtils } from "@/utils/hooks/Auth/SignUp/useSignUpUtils";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const {
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
  } = useSignUpForm();
  const navigate = useNavigate();

  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
  } = useSignUpUtils();

  if (localStorage.getItem("token")) return <Navigate to={"/"} replace />;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <h1 className="heading-primary">Sign Up</h1>
      <Box
        display={"flex"}
        alignContent={"center"}
        flexDirection={"column"}
        rowGap={"2rem"}
        minWidth={"30%"}
        className="form-container"
        component={"form"}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <TextField
          label={capitalizeString(USERNAME_FIELD)}
          variant="filled"
          type="text"
          ref={usernameReference}
          {...usernameProps}
          error={!!errors.username}
          disabled={isPending}
        />
        <FormHelperText className="form-container__error">
          {errors?.username ? errors?.username?.message : EMPTY}
        </FormHelperText>
        <TextField
          label={capitalizeString(EMAIL_FIELD)}
          variant="filled"
          type="text"
          ref={emailReference}
          {...emailProps}
          error={!!errors.email}
          disabled={isPending}
        />
        <FormHelperText className="form-container__error">
          {errors?.email ? errors?.email?.message : EMPTY}
        </FormHelperText>
        <TextField
          label={capitalizeString(PASSWORD_FIELD)}
          variant="filled"
          type={showPassword ? "text" : "password"}
          ref={passwordReference}
          {...passwordProps}
          error={!!errors.password}
          disabled={isPending}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                  sx={{ width: "4rem", height: "4rem" }}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ width: "2rem", height: "2rem" }} />
                  ) : (
                    <Visibility sx={{ width: "2rem", height: "2rem" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText className="form-container__error">
          {errors?.password ? errors?.password?.message : EMPTY}
        </FormHelperText>
        <TextField
          label={CONFIRM_PASSWORD_LABEL}
          variant="filled"
          type={showPassword ? "text" : "password"}
          ref={confirmPasswordReference}
          {...confirmPasswordProps}
          error={!!errors.confirmPassword}
          disabled={isPending}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                  sx={{ width: "4rem", height: "4rem" }}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ width: "2rem", height: "2rem" }} />
                  ) : (
                    <Visibility sx={{ width: "2rem", height: "2rem" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText className="form-container__error">
          {errors?.confirmPassword ? errors?.confirmPassword?.message : EMPTY}
        </FormHelperText>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="error"
              disabled={isPending}
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={isPending}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
