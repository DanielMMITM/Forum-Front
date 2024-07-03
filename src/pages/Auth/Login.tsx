import { Box, Button, FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material';
import { useLoginForm } from '@/utils/hooks/Auth/Login/useLoginForm';
import { capitalizeString } from '@/utils/helpers/capitalizeString';
import { PASSWORD_FIELD, USERNAME_FIELD } from '@/utils/constants/Auth/authConstants';
import { EMPTY } from '@/utils/constants/GlobalConstants';
import { Navigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLoginUtils } from '@/utils/hooks/Auth/Login/useLoginUtils';

export const Login = () => {
  const {
    usernameReference,
    usernameProps,
    passwordReference,
    passwordProps,
    handleSubmit,
    onSubmit,
    onError,
    errors,
    isPending,
  } = useLoginForm();

  const { showPassword, handleClickShowPassword, handleMouseDownPassword, handleMouseUpPassword } =
    useLoginUtils();

  if (localStorage.getItem('token')) return <Navigate to={'/'} replace />;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
    >
      <h1 className="heading-primary">Login</h1>
      <Box
        display={'flex'}
        alignContent={'center'}
        flexDirection={'column'}
        rowGap={'2rem'}
        minWidth={'30%'}
        className="form-container"
        component={'form'}
        onSubmit={handleSubmit(onSubmit, onError)}
        autoComplete="off"
      >
        <TextField
          label={capitalizeString(USERNAME_FIELD)}
          variant="filled"
          type="text"
          ref={usernameReference}
          {...usernameProps}
          error={!!errors.username}
          disabled={isPending}
        />
        <FormHelperText className="form-container__error">
          {errors?.username ? errors?.username?.message : EMPTY}
        </FormHelperText>
        <TextField
          label={capitalizeString(PASSWORD_FIELD)}
          variant="filled"
          type={showPassword ? 'text' : 'password'}
          ref={passwordReference}
          {...passwordProps}
          error={!!errors.password}
          disabled={isPending}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                  sx={{ width: '4rem', height: '4rem' }}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ width: '2rem', height: '2rem' }} />
                  ) : (
                    <Visibility sx={{ width: '2rem', height: '2rem' }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText className="form-container__error">
          {errors?.password ? errors?.password?.message : EMPTY}
        </FormHelperText>
        <Button variant="contained" type="submit" disabled={isPending}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
