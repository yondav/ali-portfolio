import React from 'react';
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiContrastLine,
} from 'react-icons/ri';
import useThemeContext from '../../hooks/useThemeContext';
import './footer.css';

const Footer = () => {
  const { updateMode } = useThemeContext();
  return (
    <footer>
      <div className='footer-socials'></div>
      <p>&#169; {new Date().getFullYear()} Alison Lamb</p>
      <div className='footer-socials'>
        <a
          href='https://www.linkedin.com/in/alison-lamb-a3173312/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiLinkedinFill className='sticky-icons' />
        </a>
        <a
          href='https://www.instagram.com/alilambop/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiInstagramLine className='sticky-icons footer-ig' />
        </a>
        <RiContrastLine
          className='sticky-icons footer-contrast'
          onClick={updateMode}
        />
      </div>
    </footer>
  );
};

export default Footer;
