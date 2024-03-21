import { CardPost } from "@/components/CardPost";
import { Box, Button } from "@mui/material";

export const Posts = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
      marginTop={"calc(100vh - (100vh - 76px))"}
      padding={"6rem"}
      className="posts"
    >
      <Box display={"flex"} className="posts__header">
        <Box display={"flex"} mr={"auto"}>
          <h2 className="heading-secondary heading-secondary--posts">Posts</h2>
        </Box>
        <Button
          variant="contained"
          sx={{ alignSelf: "center", fontSize: "1.3rem" }}
        >
          New Post
        </Button>
      </Box>
      <CardPost />
      <CardPost />
      <CardPost />
    </Box>
  );
};
