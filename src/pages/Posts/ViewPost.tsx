import { CardAnswers } from "@/components/CardAnswers";
import { Box, Button, FormHelperText, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import profilePic from "@/assets/images/profile.webp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useUserStore } from "@/store/userStore";
import { useDeletePost } from "@/utils/hooks/Posts/useDeletePost";
import { PostResponse } from "@/utils/types/postsTypes";

export const ViewPost = () => {
  const { id } = useUserStore();
  const { state } = useLocation();
  const navigate = useNavigate();
  const post = state as PostResponse;
  const { isPending, deletePost } = useDeletePost();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginTop={"calc(100vh - (100vh - 50px))"}
      padding={"6rem"}
      className="posts"
      minHeight={"80vh"}
    >
      <Box display={"flex"} fontSize={"1.5rem"}>
        <Button
          variant="text"
          color="info"
          sx={{ fontSize: "inherit" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon fontSize={"inherit"} /> Back
        </Button>
      </Box>
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
            <h2>Curso: {post.courseId}</h2>
            <h3>{post.statusPost}</h3>
          </Box>
        </Box>
        <p className="text">{post.text}</p>
        {id === post.userCreator.id && (
          <Box display={"flex"} justifyContent={"end"}>
            <Button
              variant="contained"
              type="submit"
              sx={{ fontSize: "1.5rem" }}
              disabled={isPending}
            >
              Edit Post
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="error"
              sx={{ fontSize: "1.5rem", marginLeft: { xs: 0, md: "1.5rem" } }}
              onClick={() => deletePost(post.id)}
              disabled={isPending}
            >
              Delete Post
            </Button>
          </Box>
        )}
      </Box>

      <Box borderTop={"2px solid gray"} mt={"2rem"}>
        <Grid
          container
          spacing={2}
          className="form-container"
          justifyContent={"end"}
        >
          <Grid item xs={12} sx={{ fontSize: "1.5rem" }} mt={"2rem"}>
            <Box display={"flex"} flexDirection={"column"} className="posts">
              <label id="--custom-label">Add a comment</label>
              <textarea id="--text-area" disabled={isPending} />
            </Box>
            <FormHelperText className="form-container__error form-container__error--posts"></FormHelperText>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
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
