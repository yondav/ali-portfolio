import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ui_ux } from '../../../data/ui_ux';
import Thumbnail from '../../thumbnail';

const DigitalDesign = ({ pageVariants, pageStyle, pageTransition }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(document.querySelector('.nav').offsetWidth);
    console.log(isLoaded);
    if (document.querySelector('.nav').offsetWidth) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: isLoaded && document.querySelector('.nav').offsetWidth,
      paddingBottom: '5rem',
    },
    grid: {
      padding: theme.spacing(9),
    },
  }));

  const classes = useStyles();

  return (
    <>
      {isLoaded ? (
        <motion.div
          style={pageStyle}
          className='row'
          initial='initial'
          animate='in'
          exit='out'
          variants={pageVariants}
          transition={pageTransition}
        >
          <Box sx={{ flexGrow: 1 }} className={classes.root}>
            <Grid
              container
              spacing={10}
              style={{
                margin: 0,
                width: '100%',
              }}
            >
              <Grid item xs={12}>
                <Thumbnail data={ui_ux[0]} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail data={ui_ux[1]} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail data={ui_ux[2]} />
              </Grid>
              <Grid item xs={12}>
                <Thumbnail data={ui_ux[3]} />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      ) : (
        ''
      )}
    </>
  );
};

export default DigitalDesign;
