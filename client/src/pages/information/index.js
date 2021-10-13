import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BsArrowDown } from 'react-icons/bs';
import useAPI from '../../hooks/useAPI';
import ContactModal from '../../components/contact_modal';
import { logoFilter } from '../../components/logos';
import resume from '../../assets/alison_lamb_cv_2021.pdf';
import './information.css';

const Information = ({ pageVariants, pageStyle, pageTransition }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const { response, loading, error } = useAPI({
    method: 'get',
    url: `/api/users`,
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (document.querySelector('.nav').offsetWidth && response) {
      setIsLoaded(true);
      setData(response[0]);
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
              <Grid item xs={12} md={7}>
                <div className='column-wrap'>
                  <div className='headshot'>
                    <img src={data.headshot} alt='Alison Lamb' />
                  </div>
                  <a
                    href={resume}
                    download='alison_lamb_resume_2021'
                    className='resume'
                  >
                    DOWNLOAD RESUME <BsArrowDown className='download' />
                  </a>

                  <p className='bio'>{data.bio}</p>
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className='column-wrap'>
                  <button className='btn' onClick={handleOpen}>
                    Email Me
                  </button>
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
                      <p>{data.location}</p>
                    </Grid>
                    <Grid item xs={5}>
                      <p className='bold'>EDUCATION</p>
                    </Grid>
                    <Grid item xs={7}>
                      {data.education.map((edu, i) => (
                        <p key={i}>{edu}</p>
                      ))}
                    </Grid>
                    <Grid item xs={5}>
                      <p className='bold'>INTERESTS</p>
                    </Grid>
                    <Grid item xs={7}>
                      {data.interests.map((int, i) => (
                        <p key={i}>{int}</p>
                      ))}
                    </Grid>
                    <Grid item xs={5}>
                      <p className='bold'>TECH</p>
                    </Grid>
                    <Grid item xs={7}>
                      <div className='tech-cont'>
                        {data.tech.map((te, i) =>
                          React.createElement(logoFilter(te)[0].el, {
                            key: i,
                            width: '1.5rem',
                            height: '1.5rem',
                          })
                        )}
                      </div>
                    </Grid>
                  </Grid>
                  <button className='btn' onClick={handleOpen}>
                    Seriously, Email Me
                  </button>
                </div>
              </Grid>
            </Grid>
          </Box>
          <ContactModal handleClose={handleClose} open={open} />
        </motion.div>
      ) : (
        ''
      )}
    </>
  );
};

export default Information;
