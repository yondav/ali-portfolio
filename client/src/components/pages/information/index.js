import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './information.css';
import resume from '../../../assets/alison_lamb_cv_2021.pdf';

const Information = ({ pageVariants, pageStyle, pageTransition }) => {
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
              <Grid item xs={12} md={7}>
                <div className='column-wrap'>
                  <div className='headshot'>
                    <img
                      src='https://res.cloudinary.com/yup-schlepp/image/upload/v1627000912/ali/ali_f29fx2.jpg'
                      alt='Alison Lamb'
                    />
                  </div>
                  <a href={resume} download={resume} className='resume'>
                    DOWNLOAD CV
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, necessitatibus? Deserunt deleniti quam numquam omnis
                    accusantium labore quia enim voluptate consequuntur
                    recusandae minima officiis ipsum repellat quod dolore
                    placeat, odio soluta sequi optio mollitia molestiae velit
                    tenetur? Facere dolores harum saepe autem minima sapiente
                    dolor dignissimos assumenda. Nesciunt dolores incidunt
                    mollitia labore! Explicabo voluptate sequi et atque pariatur
                    praesentium reiciendis quidem, voluptatem ut nam vero velit
                    quae sint facilis nesciunt expedita culpa totam ratione
                    alias ad! At, officia vel, tempore libero quibusdam
                    praesentium saepe nulla veritatis fugit, obcaecati ipsam
                    dolorum tempora velit voluptate temporibus eos eius
                    consectetur porro debitis harum.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className='column-wrap'>
                  <button className='btn'>Email Me</button>
                  <Grid
                    container
                    spacing={2}
                    style={{
                      margin: 0,
                      width: '100%',
                    }}
                  >
                    <Grid item xs={5}>
                      <p className='bold'>LOCATION</p>
                    </Grid>
                    <Grid item xs={7}>
                      <p>New York City</p>
                    </Grid>
                    <Grid item xs={5}>
                      <p className='bold'>EDUCATION</p>
                    </Grid>
                    <Grid item xs={7}>
                      <p>Fasion Institute Of Technology</p>
                      <p>La Sorbonne</p>
                    </Grid>
                    <Grid item xs={5}>
                      <p className='bold'>INTERESTS</p>
                    </Grid>
                    <Grid item xs={7}>
                      <p>Textile Design</p>
                      <p>Interior Design</p>
                      <p>Color Psychology</p>
                      <p>Pitbull Breed Awareness</p>
                      <p>MCU</p>
                      <p>French Language</p>
                      <p>Bauhaus</p>
                      <p>File Structure Naming Conventions</p>
                    </Grid>
                  </Grid>
                  <button className='btn'>Seriously, Email Me</button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      ) : (
        <h1>LOADING</h1>
      )}
    </>
  );
};

export default Information;
