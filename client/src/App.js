import React, { useEffect, useState, useContext } from 'react';
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from './utils/animationTransitions';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/header';
import Project from './components/pages/project';
import Information from './components/pages/information';
import Footer from './components/footer';
import './App.css';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isSticky, setSticky] = useState(false);
  const [variant, setVariant] = useState(pageVariants);
  const location = useLocation();

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
    const sticky = document.querySelector('nav').offsetHeight;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset >= sticky) {
        setSticky(true);
        logo.style.width = '10rem';
        stickyLogo.style.display = 'flex';
        nav.classList.add('sticky');
      } else {
        setSticky(false);
        nav.classList.remove('sticky');
        stickyLogo.style.display = 'none';
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [setSticky]);

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
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Redirect to='/presentation_design' />
          </Route>
          <Route path='/digital_art'>
            <div className='page-wrap'>
              <Project url='digital_art' pageVariants={variant} />
            </div>
          </Route>
          <Route path='/print_design'>
            <div className='page-wrap'>
              <Project url='print_design' pageVariants={variant} />
            </div>
          </Route>
          <Route path='/presentation_design'>
            <div className='page-wrap'>
              <Project url='presentation_design' pageVariants={variant} />
            </div>
          </Route>
          <Route path='/ui_ux'>
            <div className='page-wrap'>
              <Project url='ui_ux' pageVariants={variant} />
            </div>
          </Route>
          <Route path='/information'>
            <div className='page-wrap'>
              <Information
                pageVariants={variant}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
        </Switch>
      </AnimatePresence>
      {isSticky && <Footer updateMode={updateMode} />}
    </>
  );
};

export default App;
