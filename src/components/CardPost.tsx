import { Box } from "@mui/material";
import profilePic from "@/assets/images/profile.webp";
import { Link } from "react-router-dom";
import { PostResponse } from "@/utils/types/postTypes";
import { StatusIndicator } from "./StatusIndicator";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CardProps {
  data: PostResponse;
}

export const CardPost = ({ data }: CardProps) => {
  const {
    id,
    title,
    text,
    userCreator: { username },
    statusPost,
  } = data;
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
          <h2 className="heading-secondary--card-post__name">{username}</h2>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"start"}
        marginInlineStart={"2rem"}
        marginInlineEnd={"1.5rem"}
        flexGrow={1}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexBasis={"90%"}
        >
          <h2 className=" heading-secondary heading-secondary--card-post__title">
            {title}
          </h2>
          <StatusIndicator status={statusPost} />
        </Box>
        <p className="text--card-post">{text}</p>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          m={"3rem 3rem 1rem 0"}
        >
          <Link
            to={`/posts/${id}`}
            replace={true}
            state={data}
            className="posts--show-btn"
          >
            Show <ArrowForwardIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
