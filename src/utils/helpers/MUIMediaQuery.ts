import { useMediaQuery } from '@mui/material';

export default function MUIMediaQuery() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return { isSmallScreen };
}
