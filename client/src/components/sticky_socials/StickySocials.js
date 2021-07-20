import React from 'react';
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri';
import './sticky_socials.css';

const StickySocials = () => {
  return (
    <div className='sticky-socials'>
      <RiLinkedinFill className='sticky-icons' />
      <RiInstagramLine className='sticky-icons' />
    </div>
  );
};

export default StickySocials;
