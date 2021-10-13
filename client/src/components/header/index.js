import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiContrastLine,
} from 'react-icons/ri';
import useThemeContext from '../../hooks/useThemeContext';
import Nav from '../nav';
import './header.css';

const socials = [
  {
    url: 'https://www.linkedin.com/in/alison-lamb-a3173312/',
    title: 'linkedin',
    icon: RiLinkedinFill,
  },
  {
    url: 'https://www.instagram.com/alilambop/?hl=en',
    title: 'instagram',
    icon: RiInstagramLine,
  },
];

const Header = ({ variant, setVariant, location }) => {
  const { updateMode } = useThemeContext();

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
                {socials.map((social, i) => (
                  <a
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={social.title}
                    key={i}
                  >
                    {React.createElement(social.icon, {
                      className: 'social-icons',
                    })}
                  </a>
                ))}
              </div>
            </div>
          </Grid>
          {!location.pathname.includes('admin') && (
            <Grid item xs={12}>
              <div className='header-logo-cont'>
                <i className='header-logo to-black' />
              </div>
            </Grid>
          )}
        </Grid>
      </header>
      <Nav variant={variant} setVariant={setVariant} location={location} />
    </div>
  );
};

export default Header;
