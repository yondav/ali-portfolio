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
    !isDark ? setDark(true) : setDark(false);
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
            {!isDark ? (
              <i className='header-logo' />
            ) : (
              <i className='header-logo-white' />
            )}
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
