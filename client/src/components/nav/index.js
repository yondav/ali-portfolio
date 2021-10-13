import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import {
  pageVariants,
  pageVariantsAlt,
} from '../../utils/animationTransitions';
import './nav.css';

const NavTabs = withStyles({
  indicator: {
    backgroundColor: 'var(--pr-black)',
  },
})(Tabs);

const slideStyles = {
  root: {
    width: '40%',
    height: 'calc(100% - 1rem)',
    overflowX: 'visible',
    margin: '0 auto',
  },
  slideContainer: {
    display: 'flex',
    justifyContent: 'center',
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
  },
}));

const Nav = ({ setVariant, location }) => {
  const classes = useStyles();
  const [isMobile, setMobile] = useState(window.innerWidth < 720);
  let page = location.pathname.substring(1);
  console.log(page);

  const indexToLocation = {
    digital_design: 0,
    print_design: 1,
    graphic_design: 2,
    ui_ux: 3,
    information: 4,
  };

  let [value, setValue] = useState(indexToLocation[page] || 0);

  const updateMedia = () => setMobile(window.innerWidth < 720);

  const handleChange = (e, newValue) => {
    newValue > value ? setVariant(pageVariants) : setVariant(pageVariantsAlt);
    setValue(newValue);
  };

  const handleScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [setValue, value]);

  const routes = useMemo(
    () => [
      { label: 'PRESENTATION DESIGN', to: '/presentation_design' },
      { label: 'PRINT DESIGN', to: '/print_design' },
      { label: 'UI/UX', to: '/ui_ux' },
      { label: 'DIGITAL ART', to: '/digital_art' },
      { label: 'INFO', to: '/information' },
    ],
    []
  );

  const mapRoutesMobile = useCallback(
    () =>
      routes.map((route, i) => (
        <NavTab
          key={i}
          label={route.label}
          component={NavLink}
          to={route.to}
          onClick={(e) => {
            i > value ? setVariant(pageVariants) : setVariant(pageVariantsAlt);
            setValue(i);
          }}
        />
      )),
    [routes, value, setVariant]
  );

  const mapRoutes = useCallback(
    () =>
      routes.map((route, i) => (
        <NavTab key={i} label={route.label} component={NavLink} to={route.to} />
      )),
    [routes]
  );

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
            <div style={{ width: '100vw', overflow: 'hidden' }}>
              <SwipeableViews
                enableMouseEvents
                style={slideStyles.root}
                slideStyle={slideStyles.slideContainer}
                index={value}
                hysteresis={0.1}
                threshold={2}
              >
                {mapRoutesMobile()}
              </SwipeableViews>
            </div>
          ) : (
            <NavTabs
              value={value}
              onChange={handleChange}
              aria-label='nav tabs'
            >
              {mapRoutes()}
            </NavTabs>
          )}
          <Typography className={classes.padding} />
        </div>
      </nav>
    </>
  );
};

export default Nav;
