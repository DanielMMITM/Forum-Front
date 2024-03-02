import { Box, Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Box display={"flex"} component={"header"} className="home-header">
        <h1 className="heading-primary home-header--heading">Welcome</h1>
        <p className="home-header--text">
          Nuestro foro es el lugar perfecto para compartir conocimientos y
          resolver dudas.
        </p>
        <a href="#" className="home-header--swipe">
          Explorar
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
