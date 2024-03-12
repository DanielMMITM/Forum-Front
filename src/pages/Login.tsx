import { Box, Button, TextField } from "@mui/material";

export const Login = () => {
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
        component={"form"}
        rowGap={"2rem"}
        minWidth={"30%"}
        className="login-form"
      >
        <TextField label="Username" variant="filled" />
        <TextField label="Password" variant="filled" />
        <Button variant="contained">Login</Button>\
      </Box>
    </Box>
  );
};
