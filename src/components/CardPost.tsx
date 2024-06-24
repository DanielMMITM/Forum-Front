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
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={{ xs: "1rem", md: 0 }}
      >
        <Box display={"flex"} marginInline={"7rem"}>
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
        alignSelf={{ xs: "stretch", md: "start" }}
        marginInlineStart={"2rem"}
        marginInlineEnd={"1.5rem"}
        flexGrow={1}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <h2 className=" heading-secondary heading-secondary--card-post__title">
            {title}
          </h2>
          <StatusIndicator status={statusPost} />
        </Box>
        <p className="text--card-post">{text}</p>
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", sm: "flex-end" }}
          m={{
            xs: "1rem 0rem 2rem 0",
            sm: "3rem 3rem 2rem 0",
          }}
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
