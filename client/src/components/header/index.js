import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiContrastLine,
} from 'react-icons/ri';
import './header.css';

const Header = () => {
  const [isDark, setDark] = useState(false);

  const updateMode = () => {
    const logo = document.querySelector('.header-logo');
    if (!isDark) {
      setDark(true);
      logo.classList.contains('to-black')
        ? logo.classList.replace('to-black', 'to-white')
        : logo.classList.add('to-white');
    } else {
      setDark(false);
      logo.classList.contains('to-white')
        ? logo.classList.replace('to-white', 'to-black')
        : logo.classList.add('to-black');
    }

    document.querySelector('body').classList.toggle('dark');
  };

  return (
    <header className='header'>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className='header-icons'>
            <div className='contrast'>
              <RiContrastLine className='contrast-icons' onClick={updateMode} />
            </div>
            <div className='socials'>
              <RiLinkedinFill className='social-icons' />
              <RiInstagramLine className='social-icons' />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='header-logo-cont'>
            <i className='header-logo to-black' />
            {/* {!isDark ? (
              <i className='header-logo' />
            ) : (
              <i className='header-logo-white' />
            )} */}
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
