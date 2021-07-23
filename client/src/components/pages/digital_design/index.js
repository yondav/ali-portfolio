import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { presentation_design } from '../../../data/presentation_design';
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
      // flexGrow: 1,
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
                <Thumbnail
                  source={presentation_design[0].thumbnail}
                  alt={presentation_design[0].title}
                  name={presentation_design[0].title}
                  client={presentation_design[0].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={presentation_design[1].thumbnail}
                  alt={presentation_design[1].title}
                  name={presentation_design[1].title}
                  client={presentation_design[1].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={presentation_design[2].thumbnail}
                  alt={presentation_design[2].title}
                  name={presentation_design[2].title}
                  client={presentation_design[2].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12}>
                <Thumbnail
                  source={presentation_design[3].thumbnail}
                  alt={presentation_design[3].title}
                  name={presentation_design[3].title}
                  client={presentation_design[3].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={presentation_design[4].thumbnail}
                  alt={presentation_design[4].title}
                  name={presentation_design[4].title}
                  client={presentation_design[4].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={presentation_design[5].thumbnail}
                  alt={presentation_design[5].title}
                  name={presentation_design[5].title}
                  client={presentation_design[5].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={presentation_design[6].thumbnail}
                  alt={presentation_design[6].title}
                  name={presentation_design[6].title}
                  client={presentation_design[6].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={presentation_design[7].thumbnail}
                  alt={presentation_design[7].title}
                  name={presentation_design[7].title}
                  client={presentation_design[7].client}
                  width='100%'
                />
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
