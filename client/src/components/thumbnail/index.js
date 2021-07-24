import React, { useState } from 'react';
import ProjectModal from '../project_modal';
import './thumbnail.css';

const Thumbnail = ({ data }) => {
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
          <img src={data.thumbnail} alt={data.title} width='100%' />
        </div>
        <div className='thumbnail-text'>
          <p>{data.title}</p>
          {data.client.map((c) => (
            <div className='thumbnail-text' key={c}>
              <p>|</p>
              <p>{c}</p>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal handleClose={handleClose} open={open} data={data} />
    </>
  );
};

export default Thumbnail;
