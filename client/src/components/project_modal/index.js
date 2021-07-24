import React from 'react';
import { Modal, makeStyles, Backdrop } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Grow from '@material-ui/core/Grow';
import './project_modal.css';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  paper: { width: 200, height: 200 },
}));

const ProjectModal = ({ open, handleClose, data }) => {
  const classes = useStyles();

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
            <AwesomeSlider mobileTouch={true}>
              {data.gallery.map((img, index) => (
                <div key={index} data-src={img} className={img} />
              ))}
            </AwesomeSlider>
            );
          </div>
          <div className='info-container'></div>
        </div>
      </Grow>
    </Modal>
  );
};

export default ProjectModal;
