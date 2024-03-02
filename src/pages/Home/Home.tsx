import { Box, Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Box display={"flex"} component={"header"} className="home-header">
        <h1 className="heading-primary home-header--heading">Welcome</h1>
        <p className="home-header--text">
          Our forum is the perfect place to share knowledge and solve your
          problems.
        </p>
        <a href="#" className="home-header--swipe">
          Swipe up
        </a>
      </Box>
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
