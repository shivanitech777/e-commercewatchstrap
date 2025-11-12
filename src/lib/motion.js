export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export const staggerChildren = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "var(--shadow-soft)",
  },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "var(--shadow-lift)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  tap: {
    scale: 0.97,
  },
};
