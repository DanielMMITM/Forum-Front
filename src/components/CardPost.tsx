import { Box } from "@mui/material";
import profilePic from "@/assets/images/profile.webp";
import { Link } from "react-router-dom";

interface CardProps {
  data: PostResponse;
}

export const CardPost = ({ data }: CardProps) => {
  const { id, title, text } = data;
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      mt={"2rem"}
      className="card-post"
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} marginInline={"7rem"} className="card-post__img">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="card-post__picture"
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={{ xs: "40vw", sm: "28vw", md: "16vw", lg: "10vw" }}
        >
          <h2 className="heading-secondary--card-post__name">
            Cristiano Ronaldo Santos Aveiro
          </h2>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"start"}
        marginInlineStart={"2rem"}
        marginInlineEnd={"6rem"}
      >
        <Link to={`/posts/${id}`} replace={true} state={data} className="posts">
          <h2 className=" heading-secondary heading-secondary--card-post__title">
            {title}
          </h2>
        </Link>
        <p className="text--card-post">{text}</p>
      </Box>
    </Box>
  );
};
