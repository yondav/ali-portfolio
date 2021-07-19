import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

const NavTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: 'var(--pr-black)',
  },
})(Tabs);

const NavTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    margin: ' 0 .8rem',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: 'var(--pr-black)',
    '&:hover': {
      color: 'var(--pr-grey)',
      opacity: 1,
    },
    '&$selected': {
      color: 'var(--emph-black)',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'var(--emph-black',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: 'var(--pr-white)',
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [isMobile, setMobile] = useState(window.innerWidth < 460);
  const [value, setValue] = useState(0);

  const updateMedia = () => setMobile(window.innerWidth < 460);

  const handleChange = (event, newValue) => setValue(newValue);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        {isMobile ? (
          <SwipeableViews enableMouseEvents>
            <NavTab label='Tab 1' component={NavLink} to='/' />
            <NavTab label='Tab 2' component={NavLink} to='/tab_2' />
            <NavTab label='Tab 3' component={NavLink} to='/tab_3' />
            <NavTab label='Tab 4' component={NavLink} to='/tab_4' />
          </SwipeableViews>
        ) : (
          <NavTabs
            value={value}
            onChange={handleChange}
            aria-label='ant example'
          >
            <NavTab label='Tab 1' component={NavLink} to='/tab_2' />
            <NavTab label='Tab 2' component={NavLink} to='/tab_2' />
            <NavTab label='Tab 3' component={NavLink} to='/tab_3' />
            <NavTab label='Tab 4' component={NavLink} to='/tab_4' />
          </NavTabs>
        )}
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};

export default Nav;
