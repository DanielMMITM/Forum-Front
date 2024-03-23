import { Box, Button, Container, Grid, TextField } from "@mui/material";

export const NewPost = () => {
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
          <h2 className="heading-secondary heading-secondary--posts">
            Create post
          </h2>
        </Box>
      </Box>
      <Container>
        <Grid
          container
          marginTop={"4rem"}
          gridAutoFlow={"column"}
          rowGap={2}
          component={"form"}
          className="form-container"
        >
          <Grid item xs={12}>
            <label id="--custom-label" className="heading-secondary">
              Title
            </label>
            <TextField fullWidth sx={{ fontSize: "1.5rem" }}></TextField>
          </Grid>
          <Grid item xs={12} sx={{ fontSize: "1.5rem" }}>
            <label id="--custom-label" className="heading-secondary">
              Text
            </label>
            <TextField fullWidth></TextField>
          </Grid>
          <Grid container item xs={12} columnGap={4} justifyContent={"end"}>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="error" fullWidth>
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" fullWidth>
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
