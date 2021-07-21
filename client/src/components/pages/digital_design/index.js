import React from 'react';
import { motion } from 'framer-motion';

const DigitalDesign = ({ pageVariants, pageStyle, pageTransition }) => {
  return (
    <motion.div
      style={pageStyle}
      className='row'
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>TAB 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius
        nemo quaerat, aut deleniti beatae nihil neque asperiores culpa, itaque
        qui blanditiis accusantium iure mollitia. Est molestias qui assumenda
        fugit eos quibusdam, hic praesentium consectetur labore laboriosam
        eveniet quam quo eligendi velit eum blanditiis amet in architecto!
        Quibusdam, vel exercitationem.
      </p>
    </motion.div>
  );
};

export default DigitalDesign;
