import { Box } from '@mui/material';
import sprite from '@/assets/icons/sprite.svg';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const { pathname } = useLocation();
  if (pathname !== '/login' && pathname !== '/signup')
    return (
      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(2, minmax(max-content, 1fr))'}
        gap={'2rem'}
        justifyItems={'center'}
        className="footer"
        padding={'2rem'}
      >
        <Box>
          <h2 className="heading-primary--footer">Logo</h2>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          className="footer__links"
        >
          <a href="" className="footer__link">
            About us
          </a>
          <a href="" className="footer__link">
            Resources
          </a>
          <a href="" className="footer__link">
            Contact
          </a>
        </Box>
        <Box gridColumn={'1/-1'}>
          <svg className="footer__social-icon footer__link ">
            <use xlinkHref={`${sprite}#icon-facebook2`}></use>
          </svg>
          <svg className="footer__social-icon footer__link ">
            <use xlinkHref={`${sprite}#icon-instagram`}></use>
          </svg>
          <svg className="footer__social-icon footer__link ">
            <use xlinkHref={`${sprite}#icon-twitter`}></use>
          </svg>
        </Box>
      </Box>
    );
};
