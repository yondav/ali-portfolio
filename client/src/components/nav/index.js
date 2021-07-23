import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import {
  DigitalDesign,
  PrintDesign,
  GraphicDesign,
  UIUX,
  Information,
} from '../pages';
import { AnimatePresence } from 'framer-motion';
import './nav.css';

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

const slideStyles = {
  root: {
    height: 'calc(100% - 1rem)',
    overflowX: 'auto',
  },
  slideContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
};

const NavTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    margin: ' 0 .8rem',
    fontFamily: ['Jost', 'sans-serif'].join(','),
    fontSize: window.innerWidth > 989 ? '1.125em' : '1em',
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
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: 'var(--pr-white)',
    transition: 'var(--ease)',
  },
}));

const Nav = () => {
  const classes = useStyles();
  const location = useLocation();
  const [isMobile, setMobile] = useState(window.innerWidth < 700);
  let page = location.pathname.substring(1);
  console.log(page);

  const indexToLocation = {
    digital_design: 0,
    print_design: 1,
    graphic_design: 2,
    ui_ux: 3,
    information: 4,
  };

  let [value, setValue] = useState(indexToLocation[page]);
  let newValue;

  const updateMedia = () => setMobile(window.innerWidth < 700);

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
        <div className='nav'>
          <div
            className='sticky-logo-cont'
            style={{ display: 'none', width: '100%', justifyContent: 'center' }}
          >
            <i
              className='header-logo sticky-logo to-black'
              style={{ width: '2.5rem', cursor: 'pointer' }}
              onClick={handleScroll}
            />
          </div>
          {isMobile ? (
            <SwipeableViews
              enableMouseEvents
              style={slideStyles.root}
              slideStyle={slideStyles.slideContainer}
              index={value}
            >
              <NavTab
                label='DIGITAL DESIGN'
                component={NavLink}
                to='/digital_design'
                onClick={(e) => {
                  newValue = 0;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
                // style={{ alignSelf: 'center' }}
              />
              <NavTab
                label='PRINT DESIGN'
                component={NavLink}
                to='/print_design'
                onClick={(e) => {
                  newValue = 1;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
              <NavTab
                label='GRAPHIC DESIGN'
                component={NavLink}
                to='/graphic_design'
                onClick={(e) => {
                  newValue = 2;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
              <NavTab
                label='UI/UX'
                component={NavLink}
                to='/ui_ux'
                onClick={(e) => {
                  newValue = 3;
                  newValue > value
                    ? (variants = pageVariants)
                    : (variants = pageVariantsAlt);
                  setValue(newValue);
                }}
              />
              <NavTab
                label='INFORMATION'
                component={NavLink}
                to='/information'
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
              <NavTab
                label='DIGITAL DESIGN'
                component={NavLink}
                to='/digital_design'
              />
              <NavTab
                label='PRINT DESIGN'
                component={NavLink}
                to='/print_design'
              />
              <NavTab
                label='GRAPHIC DESIGN'
                component={NavLink}
                to='/graphic_design'
              />
              <NavTab label='UI/UX' component={NavLink} to='/ui_ux' />
              <NavTab
                label='INFORMATION'
                component={NavLink}
                to='/information'
              />
            </NavTabs>
          )}
          <Typography className={classes.padding} />
        </div>
      </nav>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Redirect to='/digital_design' />
          </Route>
          <Route path='/digital_design'>
            <div className='page-wrap'>
              <DigitalDesign
                isMobile={isMobile}
                pageVariants={variants}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/print_design'>
            <div className='page-wrap'>
              <PrintDesign
                pageVariants={variants}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/graphic_design'>
            <div className='page-wrap'>
              <GraphicDesign
                pageVariants={variants}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/ui_ux'>
            <div className='page-wrap'>
              <UIUX
                pageVariants={variants}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/information'>
            <div className='page-wrap'>
              <Information
                pageVariants={variants}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Nav;
