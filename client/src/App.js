import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import StickySocials from './components/sticky_socials';

const App = () => {
  const [isDark, setDark] = useState(false);
  const [isSticky, setSticky] = useState(false);
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
      <Header updateMode={updateMode} />
      {/* header holds nav component which renders each page and holds all routing logic for transitions */}
      {isSticky && <StickySocials updateMode={updateMode} />}
      {isSticky && <Footer />}
    </div>
  );
};

export default App;
