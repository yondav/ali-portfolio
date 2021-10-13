export const pageVariants = {
  initial: {
    opacity: 0,
    x: '200vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    // x: '-100vw',
    scale: 1,
  },
};

export const pageVariantsAlt = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    // x: '200vw',
    scale: 1,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.7,
};

export const pageStyle = {
  position: 'absolute',
};

export const modalVariants = {
  initial: {
    opacity: 0,
    y: '100vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: '-100vw',
    scale: 1,
  },
};

export const headerLogos = {
  initial: {
    opacity: 0,
    transform: 'scale(1.1)',
  },
  animate: {
    transform: 'scale(1)',
  },
};
