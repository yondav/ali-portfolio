import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { print_design } from '../../../data/print_design';
import Thumbnail from '../../thumbnail';

const PrintDesign = ({ pageVariants, pageStyle, pageTransition }) => {
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
      paddingBottom: '2rem',
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
                  source={print_design[0].thumbnail}
                  alt={print_design[0].title}
                  name={print_design[0].title}
                  client={print_design[0].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={print_design[1].thumbnail}
                  alt={print_design[1].title}
                  name={print_design[1].title}
                  client={print_design[1].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={print_design[2].thumbnail}
                  alt={print_design[2].title}
                  name={print_design[2].title}
                  client={print_design[2].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12}>
                <Thumbnail
                  source={print_design[3].thumbnail}
                  alt={print_design[3].title}
                  name={print_design[3].title}
                  client={print_design[3].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={print_design[4].thumbnail}
                  alt={print_design[4].title}
                  name={print_design[4].title}
                  client={print_design[4].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={print_design[5].thumbnail}
                  alt={print_design[5].title}
                  name={print_design[5].title}
                  client={print_design[5].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={print_design[6].thumbnail}
                  alt={print_design[6].title}
                  name={print_design[6].title}
                  client={print_design[6].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Thumbnail
                  source={print_design[7].thumbnail}
                  alt={print_design[7].title}
                  name={print_design[7].title}
                  client={print_design[7].client}
                  width='100%'
                />
              </Grid>
              <Grid item xs={12}>
                <Thumbnail
                  source={print_design[8].thumbnail}
                  alt={print_design[8].title}
                  name={print_design[8].title}
                  client={print_design[8].client}
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

export default PrintDesign;
