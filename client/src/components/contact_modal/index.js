import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Modal, makeStyles, Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { AiOutlineClose } from 'react-icons/ai';
import Contact from '../contact';
import './contact_modal.css';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  paper: { width: 200, height: 200 },
}));

const ContactModal = ({ open, handleClose }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 989);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
        timeout: 1000,
      }}
      BackdropComponent={Backdrop}
      open={open}
      onClose={handleClose}
      style={{ transformOrigin: '0 10 0' }}
      {...(open ? { timeout: 5000 } : {})}
    >
      <Fade
        in={open}
        style={{ transformOrigin: '0 10 0' }}
        {...(open ? { timeout: 500 } : { timeout: 500 })}
      >
        <div className='contact-modal'>
          <Slide
            direction='up'
            in={open}
            style={{ transformOrigin: '0 10 0' }}
            {...(open ? { timeout: 400 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <div className='logo-container'>
              {!isDesktop && (
                <AiOutlineClose className='expand' onClick={handleClose} />
              )}
              <i
                className={`form-logo ${!darkMode ? 'to-white' : 'to-black'}`}
              ></i>
            </div>
          </Slide>
          <Slide
            direction='down'
            in={open}
            style={{ transformOrigin: '0 10 0' }}
            {...(open ? { timeout: 400 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <div className='form-container'>
              {isDesktop && (
                // <div className='close-cont'>
                <AiOutlineClose
                  className='close close-contact'
                  onClick={handleClose}
                />
              )}
              <Contact handleClose={handleClose} />
            </div>
          </Slide>
        </div>
      </Fade>
    </Modal>
  );
};

export default ContactModal;
