import { EMPTY } from "@/utils/constants/GlobalConstants";
import {
  TEXT_PLACEHOLDER,
  TITLE_PLACEHOLDER,
} from "@/utils/constants/Posts/Posts";
import { usePostsForm } from "@/utils/hooks/Posts/usePostsForm";
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
  const navigate = useNavigate();
  const {
    titleReference,
    titleProps,
    courseReference,
    courseProps,
    textReference,
    textProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPending,
  } = usePostsForm();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginTop={"calc(100vh - (100vh - 50px))"}
      padding={"6rem"}
      className="posts"
    >
      <Box display={"flex"} className="posts__header">
        <Box display={"flex"} mr={"auto"}>
          <h2 className="heading-secondary heading-secondary--posts">
            Create post
          </h2>
        </Box>
      </Box>
      <Container>
        <Grid
          container
          marginTop={"3rem"}
          gridAutoFlow={"column"}
          rowGap={2}
          component={"form"}
          className="form-container"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Grid item xs={12}>
            <label id="--custom-label" className="heading-secondary">
              Title
            </label>
            <TextField
              type="text"
              placeholder={TITLE_PLACEHOLDER}
              fullWidth
              size="small"
              ref={titleReference}
              {...titleProps}
              disabled={isPending}
            />
            <FormHelperText className="form-container__error form-container__error--posts">
              {errors?.title ? errors?.title?.message : EMPTY}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={8}>
            <label id="--custom-label" className="heading-secondary">
              Course
            </label>
            <Select
              fullWidth
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={0}
              onChange={() => {}}
              sx={{ fontSize: "1.6rem" }}
              size="small"
              ref={courseReference}
              inputProps={{ ...courseProps }}
              disabled={isPending}
            >
              <MenuItem value={0} sx={{ fontSize: "1.6rem" }} disabled>
                <em>Select a course</em>
              </MenuItem>
              <MenuItem value={10} sx={{ fontSize: "1.6rem" }}>
                Ten
              </MenuItem>
              <MenuItem value={20} sx={{ fontSize: "1.6rem" }}>
                Twenty
              </MenuItem>
              <MenuItem value={30} sx={{ fontSize: "1.6rem" }}>
                Thirty
              </MenuItem>
            </Select>
            <FormHelperText className="form-container__error form-container__error--posts">
              {errors?.course ? errors?.course?.message : EMPTY}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sx={{ fontSize: "1.5rem" }}>
            <label id="--custom-label" className="heading-secondary">
              Text
            </label>
            <textarea
              id="--text-area"
              placeholder={TEXT_PLACEHOLDER}
              ref={textReference}
              {...textProps}
              disabled={isPending}
            />
            <FormHelperText className="form-container__error form-container__error--posts">
              {errors?.text ? errors?.text?.message : EMPTY}
            </FormHelperText>
          </Grid>
          <Grid container item xs={12} columnGap={4} justifyContent={"end"}>
            <Grid item xs={12} md={2} order={{ xs: 2, md: 1 }}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() => navigate(-1)}
                disabled={isPending}
              >
                Back
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              order={{ xs: 1, md: 2 }}
              marginBottom={{ xs: "2rem", md: 0 }}
            >
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isPending}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
