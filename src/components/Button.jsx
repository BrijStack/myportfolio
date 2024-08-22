import { motion } from "framer-motion";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  relative,
  variants,
  whileHover,
  whileTap,
  target,
  download,
}) => {
  const classes = `button  ${
    relative ? "relative" : ""
  } inline-flex items-center justify-center h-14 text-center  leading-5 ${
    px || "px-16"
  } ${white ? "text-white" : "text-black"} ${className || ""}`;
  ``;

  const renderButton = () => (
    <motion.button
      className={classes}
      onClick={onClick}
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      <span className="linear-mask">{children}</span>
    </motion.button>
  );
  const renderLink = () => (
    <motion.a
      href={href}
      className={classes}
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
      target={target}
      download={download}
    >
      {children}
    </motion.a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
