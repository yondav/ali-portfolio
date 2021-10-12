import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../../utils/API';
import Thumbnail from '../../thumbnail';

const DigitalArt = ({ pageVariants, pageStyle, pageTransition, url }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const { response, loading, error } = API({
    method: 'get',
    url: '/api/digital_art',
  });

  useEffect(() => {
    if (document.querySelector('.nav').offsetWidth && response) {
      setIsLoaded(true);
      setData(response);
    } else {
      // add spinner
      console.log({ loading: loading, err: error });
    }
  }, [isLoaded, response, error, loading]);

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
              {data.map((proj, i) => (
                <Grid item xs={12} md={proj.thumbnail.width} key={i}>
                  <Thumbnail data={proj} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      ) : (
        ''
      )}
    </>
  );
};

export default DigitalArt;
