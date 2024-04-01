import { Box } from "@mui/material";

export const Register = () => {
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
      </Box>
    </Box>
  );
};
