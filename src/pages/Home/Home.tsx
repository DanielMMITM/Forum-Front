import { Box } from "@mui/material";
import image from "/src/assets/images/patrick-fore-0_AX9pab940-unsplash.webp";

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
        <h1 className="heading-primary--main">Welcome !</h1>
        <p className="heading-primary--sub">
          Our forum is the perfect place to share knowledge and solve your
          problems.
        </p>
        <a href="#" className="home-header--swipe">
          Swipe up
        </a>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        component={"main"}
        p={"6rem"}
      >
        <h1 className="heading-primary">Lorem ipsum dolor sit amet.</h1>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          component={"section"}
          mt={"4rem"}
        >
          <Box
            component={"picture"}
            flexBasis={"50%"}
            sx={{ aspectRatio: "16/9" }}
          >
            <img src={image} alt="" className="home-section-image" />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            flexBasis={"50%"}
            p={{ xs: "2rem", lg: "5rem" }}
          >
            <h2 className="heading-secondary">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="paragraphs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              dolore et, quidem commodi placeat praesentium debitis facilis
              iste, assumenda molestias temporibus hic officiis iusto? Itaque
              eaque iste accusamus pariatur obcaecati?
            </p>
            <h2 className="heading-secondary">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="paragraphs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              dolore et, quidem commodi placeat praesentium debitis facilis
              iste, assumenda molestias temporibus hic officiis iusto? Itaque
              eaque iste accusamus pariatur obcaecati?
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};
