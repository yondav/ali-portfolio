import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import StickySocials from './components/sticky_socials/StickySocials';

const App = () => {
  useEffect(() => {
    const nav = document.querySelector('nav');
    const stickyLogo = document.querySelector('.sticky-logo-cont');
    const logo = document.querySelector('.header-logo');
    const sticky = nav.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        logo.style.width = '10rem';
        stickyLogo.style.display = 'flex';
        // header.classList.add('sticky');
        nav.classList.add('sticky');
      } else {
        // header.classList.remove('sticky');
        nav.classList.remove('sticky');
        stickyLogo.style.display = 'none';
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <div className='App'>
      <Header />
      <StickySocials />
    </div>
  );
};

export default App;
