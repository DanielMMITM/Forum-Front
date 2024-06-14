import { CardPost } from "@/components/CardPost";
import { useShowPosts } from "@/utils/hooks/Posts/useShowPosts";
import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  PaginationItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { usePaginationUtils } from "@/utils/hooks/usePaginationUtils";
import { PostResponse } from "@/utils/types/postTypes";

export const Posts = () => {
  const navigate = useNavigate();
  const { posts, totalPages, isLoading } = useShowPosts();
  const { currentPage, handleChange } = usePaginationUtils();

  if (isLoading && !posts) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
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
          onClick={() => navigate("/new-post")}
          sx={{ alignSelf: "center", fontSize: "1.3rem" }}
        >
          New Post
        </Button>
      </Box>
      {!isLoading && !posts ? (
        <Box display={"flex"} mt={"20rem"} justifyContent={"center"}>
          <h1 className="heading-primary">
            Whoops!... There are no posts to show
          </h1>
        </Box>
      ) : (
        <>
          {posts?.map((post: PostResponse) => (
            <CardPost key={post.id} data={post} />
          ))}
          <Box
            display={"flex"}
            alignSelf={{ xs: "center", md: "flex-end" }}
            mt={"4rem"}
          >
            <Pagination
              size="large"
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
              onChange={handleChange}
              count={totalPages}
              page={Number(currentPage)}
              color="secondary"
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </>
      )}
    </Box>
  );
};
