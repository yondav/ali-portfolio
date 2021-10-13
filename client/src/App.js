import React, { useEffect, useState } from 'react';
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from './utils/animationTransitions';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { debouncer } from './utils/debouncer';
import Header from './components/header';
import Project from './components/project';
import Information from './pages/information';
import Footer from './components/footer';
import AdminRoute from './components/admin_route';
import AdminPortal from './pages/admin_portal';
import Login from './pages/login';
import './App.css';

const projectPages = [
  '/digital_art',
  '/print_design',
  '/presentation_design',
  '/ui_ux',
];

const App = () => {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [variant, setVariant] = useState(pageVariants);

  useEffect(() => {
    const nav = document.querySelector('nav');
    const stickyLogo = document.querySelector('.sticky-logo-cont');
    const logo = document.querySelector('.header-logo');
    const stickyHandler = debouncer(() => {
      if (window.pageYOffset >= nav.offsetHeight) {
        setSticky(true);
        logo.style.width = `10rem`;
        stickyLogo.style.display = 'flex';
        nav.classList.add('sticky');
      } else {
        setSticky(false);
        nav.classList.remove('sticky');
        stickyLogo.style.display = 'none';
      }
    }, 50);

    const scrollCallBack = window.addEventListener('scroll', stickyHandler);

    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [setSticky, location]);

  return (
    <>
      <Header variant={variant} setVariant={setVariant} location={location} />
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
      {isSticky && <Footer />}
    </>
  );
};

export default App;
