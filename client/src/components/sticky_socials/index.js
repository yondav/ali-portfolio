import React from 'react';
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiContrastLine,
} from 'react-icons/ri';
import './sticky_socials.css';

const StickySocials = ({ updateMode }) => {
  return (
    <div className='sticky-socials'>
      <a
        href='https://www.linkedin.com/in/alison-lamb-a3173312/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiLinkedinFill className='sticky-icons' />
      </a>
      <a
        href='https://www.instagram.com/alilambop/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiInstagramLine className='sticky-icons' />
      </a>
      <div className='underline'>
        <RiContrastLine className='sticky-icons' onClick={updateMode} />
      </div>
    </div>
  );
};

export default StickySocials;
