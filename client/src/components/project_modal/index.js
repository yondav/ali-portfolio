import React, { useState, useEffect } from 'react';
import { Modal, makeStyles, Backdrop } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Grow from '@material-ui/core/Grow';
import { AiOutlineClose } from 'react-icons/ai';
import { GiExpand } from 'react-icons/gi';
import './project_modal.css';
import { logoFilter } from '../logos';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  paper: { width: 200, height: 200 },
}));

const ProjectModal = ({ open, handleClose, data }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 989);
  const [expand, setExpand] = useState(false);
  const classes = useStyles();

  const updateMedia = () => setDesktop(window.innerWidth > 989);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <Modal
      className={classes.modal}
      closeAfterTransition
      BackdropProps={{
        timeout: 100,
      }}
      BackdropComponent={Backdrop}
      open={open}
      onClose={handleClose}
    >
      <Grow
        in={open}
        style={{ transformOrigin: '0 10 0' }}
        {...(open ? { timeout: 1000 } : {})}
      >
        <div className='project-modal'>
          <div className='carousel-container'>
            <div className='controls'>
              <GiExpand className='expand' onClick={() => setExpand(true)} />
              {!isDesktop && (
                <AiOutlineClose className='expand' onClick={handleClose} />
              )}
            </div>
            {expand && (
              <AiOutlineClose
                className='close close-expand'
                onClick={() => setExpand(false)}
              />
            )}
            <div className='slider-cont'>
              <AwesomeSlider
                mobileTouch={true}
                fillParent={expand ? true : false}
              >
                {data.gallery.map((img, index) => (
                  <div key={index} data-src={img} className={img} />
                ))}
              </AwesomeSlider>
            </div>
          </div>
          <div className='info-container'>
            <div className='title-cont'>
              <div className='title'>
                <h1>{data.title}</h1>
                <h2>{data.year}</h2>
              </div>
              {isDesktop && (
                <div className='close-cont'>
                  <AiOutlineClose className='close' onClick={handleClose} />
                </div>
              )}
            </div>
            <p>{data.description}</p>
            <div className='tech'>
              {data.tech.map((te, i) =>
                React.createElement(logoFilter(te)[0].el, {
                  key: i,
                  width: '1.5rem',
                  height: '1.5rem',
                })
              )}
            </div>
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default ProjectModal;
