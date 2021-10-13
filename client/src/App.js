import React, { useEffect, useState, useContext } from 'react';
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from './utils/animationTransitions';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext';
import { AdminContext } from './context/AdminContext';
import Header from './components/header';
import Project from './components/pages/project';
import Information from './components/pages/information';
import Footer from './components/footer';
import AdminRoute from './components/admin_route';
import AdminPortal from './components/pages/admin_portal';
import Login from './components/pages/login';
import './App.css';

const projectPages = [
  '/digital_art',
  '/print_design',
  '/presentation_design',
  '/ui_ux',
];

const App = () => {
  const theme = useContext(ThemeContext);
  const isAdmin = useContext(AdminContext);
  const darkMode = theme.state.darkMode;
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [variant, setVariant] = useState(pageVariants);

  // for dark mode
  useEffect(() => {
    const logos = document.querySelectorAll('.header-logo');

    if (darkMode) {
      document.querySelector('body').classList = 'dark';
      logos.forEach((logo) =>
        logo.classList.contains('to-black')
          ? logo.classList.replace('to-black', 'to-white')
          : logo.classList.add('to-white')
      );
    } else {
      document.querySelector('body').classList = '';
      logos.forEach((logo) =>
        logo.classList.contains('to-white')
          ? logo.classList.replace('to-white', 'to-black')
          : logo.classList.add('to-black')
      );
    }
  }, [darkMode]);

  // for sticky nav
  useEffect(() => {
    const nav = document.querySelector('nav');
    const stickyLogo = document.querySelector('.sticky-logo-cont');
    const logo = document.querySelector('.header-logo');
    const stickyHandler = (width) => {
      setSticky(true);
      logo.style.width = `${width}rem`;
      stickyLogo.style.display = 'flex';
      nav.classList.add('sticky');
    };

    if (location.pathname.includes('admin')) {
      stickyHandler(3);
    }

    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset >= nav.offsetHeight) {
        stickyHandler(10);
      } else {
        setSticky(false);
        nav.classList.remove('sticky');
        stickyLogo.style.display = 'none';
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [setSticky, location]);

  const updateMode = () => {
    darkMode
      ? theme.dispatch({ type: 'LIGHTMODE' })
      : theme.dispatch({ type: 'DARKMODE' });
  };

  return (
    <>
      <Header
        updateMode={updateMode}
        variant={variant}
        setVariant={setVariant}
        location={location}
      />
      <AnimatePresence>
        <Switch location={location}>
          <Route exact path='/'>
            <Redirect to='/presentation_design' />
          </Route>
          {projectPages.map((page, i) => (
            <Route path={page} key={i}>
              <div className='page-wrap'>
                <Project url={page} pageVariants={variant} />
              </div>
            </Route>
          ))}
          <Route path='/information'>
            <div className='page-wrap'>
              <Information
                pageVariants={variant}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          {/* ADMIN ROUTING */}
          <AdminRoute exact path='/admin' component={AdminPortal} />
          <Route exact path='/admin/login'>
            <div
              className='page-wrap'
              style={{ height: '100vh', justifyContent: 'center' }}
            >
              <Login />
            </div>
          </Route>
        </Switch>
      </AnimatePresence>
      {isSticky && <Footer updateMode={updateMode} />}
    </>
  );
};

export default App;
