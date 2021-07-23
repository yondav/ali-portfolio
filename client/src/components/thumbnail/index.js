import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from '../project_modal';
import './thumbnail.css';

const Thumbnail = ({ source, alt, name, client, width }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='thumbnail' onClick={handleOpen}>
        <div width='100%' className='thumbnail-cont'>
          <img src={source} alt={alt} width={width} />
        </div>
        <div className='thumbnail-text'>
          <p>{name}</p>
          {client.map((c) => (
            <div className='thumbnail-text' key={c}>
              <p>|</p>
              <p>{c}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        <ProjectModal handleClose={handleClose} open={open} />
      </AnimatePresence>
    </>
  );
};

export default Thumbnail;
