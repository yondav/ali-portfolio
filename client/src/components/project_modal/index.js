import React from 'react';
import { Modal, Paper, makeStyles, Backdrop } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  paper: { width: 200, height: 200 },
}));

const ProjectModal = ({ open, handleClose }) => {
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
        <Paper className={classes.paper}>Test</Paper>
      </Grow>
    </Modal>
  );
};

export default ProjectModal;
