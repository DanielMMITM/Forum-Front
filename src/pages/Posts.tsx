import { CardPost } from "@/components/CardPost";
import { Box } from "@mui/material";

export const Posts = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
      marginTop={"calc(100vh - (100vh - 76px))"}
      padding={"6rem"}
    >
      <h2 className="heading-secondary heading-secondary--posts">Posts</h2>
      <CardPost />
      <CardPost />
      <CardPost />
    </Box>
  );
};
