import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import StickySocials from './components/sticky_socials';

const App = () => {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const nav = document.querySelector('nav');
    const stickyLogo = document.querySelector('.sticky-logo-cont');
    const logo = document.querySelector('.header-logo');
    const sticky = document.querySelector('.header-cont').offsetHeight;
    console.log(sticky);
    const scrollCallBack = window.addEventListener('scroll', () => {
      console.log(window.pageYOffset);
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

  return (
    <div className='App'>
      <Header />
      {isSticky && <StickySocials />}
    </div>
  );
};

export default App;
