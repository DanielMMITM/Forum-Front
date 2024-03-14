import { Box } from "@mui/material";
import profilePic from "@/assets/images/profile.webp";

export const CardPost = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      mt={"2rem"}
      className="card-post"
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} marginInline={"4rem"} className="card-post__img">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="card-post__picture"
          />
        </Box>
        <h2 className="heading-secondary--card-post__name">
          Cristiano Ronaldo Santos Aveiro
        </h2>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"start"}
        marginInlineStart={"2rem"}
        marginInlineEnd={"6rem"}
      >
        <h2 className=" heading-secondary heading-secondary--card-post__title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h2>
        <p className="text--card-post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione
          consectetur, ea dicta dolores accusantium aliquam magni dolor id
          suscipit fugiat blanditiis, voluptatem soluta odio quisquam
          necessitatibus, commodi amet reiciendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis ratione consectetur, ea dicta
          dolores accusantium aliquam magni dolor id suscipit fugiat blanditiis,
          voluptatem soluta odio quisquam necessitatibus, commodi amet
          reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis ratione consectetur, ea dicta dolores accusantium aliquam magni
          dolor id suscipit fugiat blanditiis, voluptatem soluta odio quisquam
          necessitatibus, commodi amet reiciendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis ratione consectetur, ea dicta
          dolores accusantium aliquam magni dolor id suscipit fugiat blanditiis,
          voluptatem soluta odio quisquam necessitatibus, commodi amet
          reiciendis.
        </p>
      </Box>
    </Box>
  );
};
