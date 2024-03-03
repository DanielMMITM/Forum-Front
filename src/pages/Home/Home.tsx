import { Box, Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        component={"header"}
        className="home-header"
      >
        <h1 className="heading-primary--main">Welcome</h1>
        <p className="heading-primary--sub">
          Our forum is the perfect place to share knowledge and solve your
          problems.
        </p>
        <a href="#" className="home-header--swipe">
          Swipe up
        </a>
      </Box>
      <Container>
        <Box display={"flex"} border={"2px red solid"} component={"main"}>
          <h1>HOME FROM COMPONENT</h1>
        </Box>
      </Container>
    </>
  );
};
