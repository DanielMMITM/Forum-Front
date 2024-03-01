import { Box, Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Box display={"flex"} component={"header"} className="home-header"></Box>
      <Container>
        <Box
          display={"flex"}
          border={"2px red solid"}
          mt={"calc(100vh - 88vh)"}
          component={"main"}
        >
          <h1>HOME FROM COMPONENT</h1>
        </Box>
      </Container>
    </>
  );
};
