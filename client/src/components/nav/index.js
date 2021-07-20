import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { TabOne, TabTwo, TabThree, TabFour } from '../pages';
import { AnimatePresence } from 'framer-motion';

let variants;

const pageVariants = {
  initial: {
    opacity: 0,
    x: '200vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    // x: '-100vw',
    scale: 1,
  },
};

const pageVariantsAlt = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    // x: '200vw',
    scale: 1,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.7,
};

const pageStyle = {
  position: 'absolute',
};

const NavTabs = withStyles({
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
    // transition: 'var(--ease',
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
  const location = useLocation();
  const [isMobile, setMobile] = useState(window.innerWidth < 460);
  let [value, setValue] = useState(0);
  let newValue;

  const updateMedia = () => setMobile(window.innerWidth < 460);

  const handleChange = (event, newValue) => {
    newValue > value ? (variants = pageVariants) : (variants = pageVariantsAlt);
    setValue(newValue);
  };

  const handleScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [setValue, value]);

  return (
    <>
      <nav className={classes.root}>
        <div className={classes.demo1}>
          <div
            className='sticky-logo-cont'
            style={{ display: 'none', width: '100%', justifyContent: 'center' }}
          >
            <i
              className='header-logo sticky-logo'
              style={{ width: '2.5rem', cursor: 'pointer' }}
              onClick={handleScroll}
            />
          </div>
          {isMobile ? (
            <SwipeableViews enableMouseEvents>
              <NavTab
                label='Tab 1'
                component={NavLink}
                to='/tab_1'
                onClick={(e) => {
                  newValue = 0;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
              <NavTab
                label='Tab 2'
                component={NavLink}
                to='/tab_2'
                onClick={(e) => {
                  newValue = 1;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
              <NavTab
                label='Tab 3'
                component={NavLink}
                to='/tab_3'
                onClick={(e) => {
                  newValue = 2;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
              <NavTab
                label='Tab 4'
                component={NavLink}
                to='/tab_4'
                onClick={(e) => {
                  newValue = 3;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
            </SwipeableViews>
          ) : (
            <NavTabs
              value={value}
              onChange={handleChange}
              aria-label='nav tabs'
            >
              <NavTab label='Tab 1' component={NavLink} to='/tab_1' />
              <NavTab label='Tab 2' component={NavLink} to='/tab_2' />
              <NavTab label='Tab 3' component={NavLink} to='/tab_3' />
              <NavTab label='Tab 4' component={NavLink} to='/tab_4' />
            </NavTabs>
          )}
          <Typography className={classes.padding} />
        </div>
      </nav>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path='/tab_1'>
            <TabOne
              pageVariants={variants}
              pageStyle={pageStyle}
              pageTransition={pageTransition}
            />
          </Route>
          <Route path='/tab_2'>
            <TabTwo
              pageVariants={variants}
              pageStyle={pageStyle}
              pageTransition={pageTransition}
            />
          </Route>
          <Route path='/tab_3'>
            <TabThree
              pageVariants={variants}
              pageStyle={pageStyle}
              pageTransition={pageTransition}
            />
          </Route>
          <Route path='/tab_4'>
            <TabFour
              pageVariants={variants}
              pageStyle={pageStyle}
              pageTransition={pageTransition}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Nav;
