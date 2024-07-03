import { Spinner } from '@/components/Spinner';
import { EMPTY } from '@/utils/constants/GlobalConstants';
import { TEXT_PLACEHOLDER, TITLE_PLACEHOLDER } from '@/utils/constants/Posts/PostsConstants';
import { scrollToTop } from '@/utils/helpers/scrollToTop';
import { useCourses } from '@/utils/hooks/Posts/useCourses';
import { usePostsForm } from '@/utils/hooks/Posts/usePostsForm';
import { ActionTypes } from '@/utils/types/commonTypes';
import { Course } from '@/utils/types/courseTypes';
import { PostResponse } from '@/utils/types/postTypes';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const CreateUpdatePost = () => {
  const { state } = useLocation();
  const post = state?.post as PostResponse;
  const action = state?.action as ActionTypes;
  const navigate = useNavigate();
  const { courses, isLoadingCourses } = useCourses();
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
    handleChange,
    course,
  } = usePostsForm({ post, action });

  useEffect(() => {
    if ((!post && action === 'Update') || !action) {
      navigate('/');
    }
  }, []);

  scrollToTop();

  if (isLoadingCourses && !courses) {
    return <Spinner />;
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      marginTop={'calc(100vh - (100vh - 50px))'}
      padding={'6rem'}
      className="posts"
    >
      <Box display={'flex'} className="posts__header">
        <Box display={'flex'} mr={'auto'}>
          <h2 className="heading-secondary heading-secondary--posts">{action} post</h2>
        </Box>
      </Box>
      <Container>
        <Grid
          container
          marginTop={'3rem'}
          gridAutoFlow={'column'}
          rowGap={2}
          component={'form'}
          className="form-container"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Grid item xs={12}>
            <label className="heading-secondary form-container__label--post">Title</label>
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
            <label className="heading-secondary form-container__label--post">Course</label>
            <Select
              fullWidth
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={course}
              onChange={handleChange}
              sx={{ fontSize: '1.6rem' }}
              size="small"
              ref={courseReference}
              inputProps={{ ...courseProps }}
              disabled={isPending}
            >
              <MenuItem value={0} sx={{ fontSize: '1.6rem' }} disabled>
                <em>Select a course</em>
              </MenuItem>
              {courses?.map((course: Course) => (
                <MenuItem key={course.id} value={course.id} sx={{ fontSize: '1.6rem' }}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className="form-container__error form-container__error--posts">
              {errors?.course ? errors?.course?.message : EMPTY}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sx={{ fontSize: '1.5rem' }} display={'flex'} flexDirection={'column'}>
            <label className="heading-secondary form-container__label--post">Text</label>
            <textarea
              className="form-container__text-area--post"
              placeholder={TEXT_PLACEHOLDER}
              ref={textReference}
              {...textProps}
              disabled={isPending}
            />
            <FormHelperText className="form-container__error form-container__error--posts">
              {errors?.text ? errors?.text?.message : EMPTY}
            </FormHelperText>
          </Grid>
          <Grid container item xs={12} columnGap={4} justifyContent={'end'}>
            <Grid item xs={12} md={2} order={{ xs: 2, md: 1 }}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() =>
                  action === 'Create'
                    ? navigate(-1)
                    : navigate(`/posts/${post.id}`, {
                        replace: true,
                        state: post,
                      })
                }
                disabled={isPending}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} md={2} order={{ xs: 1, md: 2 }} marginBottom={{ xs: '2rem', md: 0 }}>
              <Button variant="contained" fullWidth type="submit" disabled={isPending}>
                {action}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
