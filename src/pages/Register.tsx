import { Box, Button, FormHelperText, Grid, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";

export const Register = () => {
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
      >
        <TextField label="Username" variant="filled" type="text" />
        <FormHelperText className="form-container__error"></FormHelperText>
        <TextField label="Email" variant="filled" type="text" />
        <FormHelperText className="form-container__error"></FormHelperText>
        <TextField label="Contraseña" variant="filled" type="text" />
        <FormHelperText className="form-container__error"></FormHelperText>
        <TextField label="Confirmar contraseña" variant="filled" type="text" />
        <FormHelperText className="form-container__error"></FormHelperText>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Button variant="contained" type="submit" fullWidth color="error">
              Back
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Button variant="contained" type="submit" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
