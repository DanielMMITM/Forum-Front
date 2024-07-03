import { Box, Button, FormHelperText, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import profilePic from '@/assets/images/profile.webp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useUserStore } from '@/store/userStore';
import { useDeletePost } from '@/utils/hooks/Posts/useDeletePost';
import { Response } from '@/utils/types/responseTypes';
import { StatusIndicator } from '@/components/StatusIndicator';
import { useModalHandler } from '@/utils/hooks/useModalHandler';
import { CustomModal } from '@/components/CustomModal';
import CardAnswers from '@/components/CardAnswers';
import { useAddResponseForm } from '@/utils/hooks/Response/useAddResponseForm';
import { EMPTY } from '@/utils/constants/GlobalConstants';
import { TEXT_PLACEHOLDER } from '@/utils/constants/Response/responseConstants';
import { useShowPost } from '@/utils/hooks/Posts/useShowPost';
import { Spinner } from '@/components/Spinner';
import { scrollToTop } from '@/utils/helpers/scrollToTop';
import { Status } from '@/utils/enum/Status';

export function ShowPost() {
  const { id } = useUserStore.getState();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { isPending, deletePost } = useDeletePost();
  const { open, handleCloseModal, handleOpenModal } = useModalHandler();

  const { post, isLoadingPost } = useShowPost(state.postId as number);

  const {
    textResponseReference,
    textResponseProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPendingAddAnswer,
  } = useAddResponseForm(post?.id!);

  scrollToTop();

  if (isLoadingPost) return <Spinner />;

  if (!isLoadingPost && post)
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        marginTop={'calc(100vh - (100vh - 50px))'}
        padding={'6rem'}
        className="posts"
        minHeight={'80vh'}
      >
        <Box display={'flex'} fontSize={'1.5rem'}>
          <Button
            variant="text"
            color="info"
            sx={{ fontSize: 'inherit' }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon fontSize={'inherit'} /> Back
          </Button>
        </Box>
        <Box>
          <h1 className=" heading-primary">{post.title}</h1>
          <Box
            display={'flex'}
            flexDirection={{
              xs: 'column',
              md: 'row',
            }}
            justifyContent={'space-between'}
            mb={'2rem'}
            alignItems={'stretch'}
          >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <img src={profilePic} alt="Profile Picture" className="card-post__picture" />
              <h2>{post.userCreator.username}</h2>
            </Box>
            <Box
              display={'flex'}
              flexDirection={{
                xs: 'column',
                sm: 'row',
                md: 'column',
              }}
              alignItems={'center'}
              justifyContent={{
                sm: 'space-between',
                md: 'start',
              }}
            >
              <h2>Curso: {post.courseId}</h2>
              <StatusIndicator status={post.statusPost} />
            </Box>
          </Box>
          <p className="text">{post.text}</p>
          {id === post.userCreator.id && (
            <Box
              display={'flex'}
              flexDirection={{
                xs: 'column',
                sm: 'row',
              }}
              justifyContent={{
                xs: 'center',
                sm: 'end',
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{ fontSize: '1.5rem' }}
                disabled={isPending}
                onClick={() => {
                  navigate(`/update-post`, {
                    replace: true,
                    state: {
                      post: post,
                      action: 'Update',
                    },
                  });
                }}
              >
                Edit Post
              </Button>
              <Button
                variant="contained"
                type="submit"
                color="error"
                sx={{
                  fontSize: '1.5rem',
                  marginLeft: {
                    xs: 0,
                    sm: '1.5rem',
                  },
                  marginTop: {
                    xs: '1.5rem',
                    sm: 0,
                  },
                }}
                onClick={handleOpenModal}
                disabled={isPending}
              >
                Delete Post
              </Button>
            </Box>
          )}
        </Box>
        <Box borderTop={'2px solid gray'} mt={'2rem'}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2} className="form-container" justifyContent={'end'}>
              <Grid item xs={12} sx={{ fontSize: '1.5rem' }} mt={'2rem'}>
                <Box display={'flex'} flexDirection={'column'}>
                  <label className="heading-secondary form-container__label--response">
                    Add comment
                  </label>
                  <textarea
                    className="form-container__text-area--response"
                    disabled={isPending || isPendingAddAnswer || post.statusPost === Status.CLOSED}
                    placeholder={TEXT_PLACEHOLDER}
                    ref={textResponseReference}
                    {...textResponseProps}
                  />
                  <FormHelperText className="form-container__error form-container__error--posts">
                    {errors?.text ? errors?.text?.message : EMPTY}
                  </FormHelperText>
                </Box>
                <FormHelperText className="form-container__error form-container__error--posts"></FormHelperText>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isPendingAddAnswer || isPending || post.statusPost === Status.CLOSED}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box mt={'2rem'}>
            {post.answers.map((answer: Response) => (
              <CardAnswers
                key={answer.id}
                postUserCreator={post.userCreator.id}
                postStatus={post.statusPost}
                response={answer}
              />
            ))}
          </Box>
        </Box>
        <CustomModal
          open={open}
          handleCloseModal={handleCloseModal}
          title="Delete post?"
          content="You are about to delete your post, this action cannot' be undone"
          action="Delete"
          post={post}
          doAction={deletePost}
        />
      </Box>
    );
}
