import React, { useState, Suspense } from 'react';
// import ProjectModal from '../project_modal';
import './thumbnail.css';

const ProjectModal = React.lazy(() => import('../project_modal'));

const Thumbnail = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='thumbnail' onClick={handleOpen}>
        <div width='100%' className='thumbnail-cont'>
          <img src={data.thumbnail.src} alt={data.title} width='100%' />
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
      <Suspense fallback=''>
        <ProjectModal handleClose={handleClose} open={open} data={data} />
      </Suspense>
    </>
  );
};

export default Thumbnail;
