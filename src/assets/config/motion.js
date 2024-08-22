export const transition = {
  type: "spring",
  damping: 30,
};

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0.5, duration: 2 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const textAnimationVar = {
  initial: {
    y: "30vh",
    transition: { duration: 0.5 },
  },
  animate: {
    y: 0,
    transition: { duration: 1 },
  },
};

export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    transition: {
      staggerChldren: 0.09,
    },
  },
};

export const fadeTextAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

export const buttonVarantAnmation = {
  initial: {
    "--bg-pos": "0% 0",
  },
  hover: {
    "--bg-pos": "100% 0",
    scale: 1.1,
  },
  whiletap: {
    scale: 0.9,
  },
};

export const scalingHover = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};
