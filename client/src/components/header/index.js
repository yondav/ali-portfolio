import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiContrastLine,
} from 'react-icons/ri';
import Nav from '../nav';
import './header.css';

const Header = ({ updateMode }) => {
  return (
    <div className='header-cont'>
      <header className='header'>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className='header-icons'>
              <div className='contrast'>
                <RiContrastLine
                  className='contrast-icons'
                  onClick={updateMode}
                />
              </div>
              <div className='socials'>
                <a
                  href='https://www.linkedin.com/in/alison-lamb-a3173312/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <RiLinkedinFill className='social-icons' />
                </a>
                <a
                  href='https://www.instagram.com/alilambop/?hl=en'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <RiInstagramLine className='social-icons' />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='header-logo-cont'>
              <i className='header-logo to-black' />
            </div>
          </Grid>
        </Grid>
      </header>
      <Nav />
    </div>
  );
};

export default Header;
