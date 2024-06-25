import { Box } from '@mui/material';
import profilePic from '@/assets/images/profile.webp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
interface CardAnswerProps {
  id: number;
  text: string;
  solution: boolean;
}

export default function CardAnswers({ id, text, solution }: CardAnswerProps) {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      key={id}
      mt={'2rem'}
      className="card-response"
      alignItems={'start'}
    >
      <Box display={'flex'} flexDirection={'column'} flexBasis={'20%'} alignSelf={'center'}>
        <Box display={'flex'} justifyContent={'center'}>
          <img src={profilePic} alt="Profile Picture" className="card-response__picture" />
        </Box>
        <h2 className="heading-secondary--card-response__name">Leonel Messi</h2>
      </Box>
      <Box display={'flex'} flexBasis={'75%'} mt={-1}>
        <p className="text--card-response">{text}</p>
      </Box>
      <Box display={'flex'} justifySelf={'end'}>
        <CheckCircleIcon className="card-response__check" />
      </Box>
    </Box>
  );
}
