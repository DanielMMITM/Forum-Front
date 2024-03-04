import { Box } from "@mui/material";
import image from "/src/assets/images/main-sm.webp";

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
        padding={"4rem 6rem"}
      >
        <h1 className="heading-primary">Lorem ipsum dolor sit amet</h1>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          component={"section"}
          mt={"4rem"}
        >
          <Box component={"picture"} flexBasis={"50%"}>
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
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              dolore et, quidem commodi placeat praesentium debitis facilis
              iste, assumenda molestias temporibus hic officiis iusto? Itaque
              eaque iste accusamus pariatur obcaecati?
            </p>
            <h2 className="heading-secondary">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              dolore et, quidem commodi placeat praesentium debitis facilis
              iste, assumenda molestias temporibus hic officiis iusto? Itaque
              eaque iste accusamus pariatur obcaecati?
            </p>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        component={"section"}
        padding={"1rem 6rem 6rem 3rem"}
      >
        <h1 className="heading-primary">Lorem ipsum dolor sit amet</h1>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          className="home-stats"
          p={"2rem"}
        >
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            flexBasis={"100%"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            p={"2rem"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              component={"article"}
              p={"2rem"}
            >
              <h3 className="heading-secondary--stats-title">15</h3>
              <span className="text--stats">
                More than 15 years connecting people
              </span>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              component={"article"}
              p={"2rem"}
            >
              <h3 className="heading-secondary--stats-title">500,000</h3>
              <span className="text--stats">
                Stay in touch with our community
              </span>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              component={"article"}
              p={"2rem"}
            >
              <h3 className="heading-secondary--stats-title">1,000,000</h3>
              <span className="text--stats">Find your doubt over 1M posts</span>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              component={"article"}
              p={"2rem"}
            >
              <h3 className="heading-secondary--stats-title">1,000,000</h3>
              <span className="text--stats">Find your doubt over 1M posts</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
