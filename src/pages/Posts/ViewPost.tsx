import { CardAnswers } from "@/components/CardAnswers";
import { Box, Button, FormHelperText, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import profilePic from "@/assets/images/profile.webp";

export const ViewPost = () => {
  const { state: post } = useLocation();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginTop={"calc(100vh - (100vh - 50px))"}
      padding={"6rem"}
      className="posts"
      minHeight={"80vh"}
    >
      <Box>
        <h1 className=" heading-primary">{post.title}</h1>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mb={"2rem"}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <img
              src={profilePic}
              alt="Profile Picture"
              className="card-post__picture"
            />
            <h2>{post.userCreator.username}</h2>
          </Box>
          <Box>
            <h2>{post.statusPost}</h2>
          </Box>
        </Box>
      </Box>
      <p className="text">{post.text}</p>
      <Grid
        container
        spacing={2}
        className="form-container"
        justifyContent={"end"}
      >
        <Grid item xs={12} sx={{ fontSize: "1.5rem" }}>
          <Box display={"flex"} flexDirection={"column"} className="posts">
            <label id="--custom-label">Add a comment</label>
            <textarea id="--text-area" />
          </Box>
          <FormHelperText className="form-container__error form-container__error--posts"></FormHelperText>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained" fullWidth type="submit">
            Create
          </Button>
        </Grid>
      </Grid>

      <Box mt={"4rem"} borderTop={"2px solid gray"}>
        <Box mt={"2rem"}>
          {post.answers.map((answer: any) => (
            <CardAnswers
              key={answer.id}
              id={answer.id}
              text={answer.text}
              solution={answer.solution}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
