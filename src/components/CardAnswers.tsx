import { Box, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import profilePic from '@/assets/images/profile.webp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useUserStore } from '@/store/userStore';
import { useCheckSolution } from '@/utils/hooks/Response/useCheckSolution';
import { Status } from '@/utils/enum/Status';
import { Response } from '@/utils/types/responseTypes';
interface CardAnswerProps {
  postUserCreator: number;
  postStatus: string;
  response: Response;
}

export default function CardAnswers({
  postUserCreator,
  postStatus,
  response: {
    id,
    text,
    userCreator: { username },
  },
}: CardAnswerProps) {
  const { id: userId } = useUserStore.getState();
  const { checkSolution, isPendingSolution } = useCheckSolution();
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      mt={'2rem'}
      className="card-response"
      alignItems={'start'}
    >
      <Box display={'flex'} flexDirection={'column'} flexBasis={'20%'} alignSelf={'center'}>
        <Box display={'flex'} justifyContent={'center'}>
          <img src={profilePic} alt="Profile Picture" className="card-response__picture" />
        </Box>
        <h2 className="heading-secondary--card-response__name">{username}</h2>
      </Box>
      <Box display={'flex'} flexBasis={'75%'} mt={-1}>
        <p className="text--card-response">{text}</p>
      </Box>
      {userId === postUserCreator ||
        !isPendingSolution ||
        (postStatus !== Status.SOLVED && (
          <Box display={'flex'} justifySelf={'end'} fontSize={'inherit'}>
            <Tooltip
              title={<Typography variant="h6">Set solution</Typography>}
              placement="bottom"
              disableInteractive
              TransitionComponent={Zoom}
            >
              <IconButton size="small" onClick={() => checkSolution(id)}>
                <CheckCircleIcon className="card-response__check" />
              </IconButton>
            </Tooltip>
          </Box>
        ))}
    </Box>
  );
}
