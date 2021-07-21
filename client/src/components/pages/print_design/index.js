import React from 'react';
import { motion } from 'framer-motion';

const PrintDesign = ({ pageVariants, pageStyle, pageTransition }) => {
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
      <h1>TAB 2</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel labore ex
        atque esse ad blanditiis, sed fuga dignissimos, nobis mollitia ea quam
        consectetur quos pariatur modi officiis. Officia fuga delectus, nemo eos
        repellendus recusandae dignissimos beatae aliquid autem quibusdam dolor
        similique, ratione voluptatum distinctio eligendi placeat. Est quae
        doloribus cupiditate?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam
        nostrum illum fuga, expedita reiciendis officia aspernatur, excepturi,
        quia quae odio debitis ullam nisi explicabo. Ea maiores ab ullam et, nam
        totam optio eveniet labore, quibusdam quasi accusantium modi veritatis
        possimus quia placeat at a sequi architecto vero voluptas odit.
      </p>
    </motion.div>
  );
};

export default PrintDesign;
