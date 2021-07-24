import React, { useEffect, useState } from 'react';
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from './utils/animationTransitions';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './components/header';
import {
  DigitalArt,
  PrintDesign,
  PresentationDesign,
  UIUX,
  Information,
} from './components/pages';
import Footer from './components/footer';

const App = () => {
  const [isDark, setDark] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [variant, setVariant] = useState(pageVariants);

  const location = useLocation();

  useEffect(() => {
    const nav = document.querySelector('nav');
    const stickyLogo = document.querySelector('.sticky-logo-cont');
    const logo = document.querySelector('.header-logo');
    const sticky = document.querySelector('nav').offsetHeight;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
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
  }, []);

  const updateMode = () => {
    const logos = document.querySelectorAll('.header-logo');

    logos.forEach((logo) => {
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
    });

    document.querySelector('body').classList.toggle('dark');
  };

  return (
    <div className='App'>
      <Header
        updateMode={updateMode}
        variant={variant}
        setVariant={setVariant}
        location={location}
      />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Redirect to='/digital_art' />
          </Route>
          <Route path='/digital_art'>
            <div className='page-wrap'>
              <DigitalArt
                pageVariants={variant}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/print_design'>
            <div className='page-wrap'>
              <PrintDesign
                pageVariants={variant}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/presentation_design'>
            <div className='page-wrap'>
              <PresentationDesign
                pageVariants={variant}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
            </div>
          </Route>
          <Route path='/ui_ux'>
            <div className='page-wrap'>
              <UIUX
                pageVariants={variant}
                pageStyle={pageStyle}
                pageTransition={pageTransition}
              />
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
    </div>
  );
};

export default App;
