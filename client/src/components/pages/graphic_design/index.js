import React from 'react';
import { motion } from 'framer-motion';

const GraphicDesign = ({ pageVariants, pageStyle, pageTransition }) => {
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
      <h1>TAB 3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        voluptatem nobis atque id obcaecati itaque perspiciatis quo quibusdam.
        Animi corrupti non beatae quo ab sed deleniti architecto deserunt porro
        laborum, similique debitis voluptatibus delectus odio nisi eos eius
        ducimus id amet itaque nihil voluptates! Laudantium dicta minus
        repellendus magnam consequuntur?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        repellendus amet ab voluptas tempora voluptates fugit beatae, sit
        doloribus explicabo deserunt, totam tempore rem labore ullam. Ipsam
        veniam velit magnam pariatur! Exercitationem optio, ullam expedita omnis
        officia atque. Accusamus, ut, ad veritatis itaque aliquid deleniti atque
        enim, error vero reprehenderit explicabo mollitia repellat consequuntur
        commodi unde optio est cupiditate saepe.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit animi
        reiciendis saepe libero doloremque voluptatem cupiditate porro magnam,
        blanditiis ipsam incidunt explicabo possimus nisi corporis suscipit
        minus nemo quisquam? Porro praesentium adipisci esse. Dignissimos sunt
        eveniet aut sapiente aliquam illum?
      </p>
    </motion.div>
  );
};

export default GraphicDesign;
