import { motion, useInView } from "framer-motion";
import {
  buttonVarantAnmation,
  fadeTextAnimation,
  textAnimationVar,
} from "../assets/config/motion";
import { useRef } from "react";
import Button from "./Button";
import { resume } from "../assets";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="about">
      <div className=" flex  justify-center">
        <div className="flex flex-col md:gap-10 justify-center items-center text-white pt-5 my-16">
          <div className="py-12  overflow-hidden " ref={ref}>
            <motion.div
              variants={textAnimationVar}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <h1>About Me</h1>
            </motion.div>
          </div>
          <motion.div
            variants={fadeTextAnimation}
            initial="initial"
            whileInView="animate"
            className="text-slate-300 font-medium text-[13px] md:text-[20px] text-center  md:px-20 leading-8 md:leading-9 md:w-[100%] xl:w-[70%] flex flex-wrap gap-5"
          >
            <div>
              <p>
                Hi there! I&apos;m Brijesh K, a full stack developer with
                expertise in JavaScript, React, WordPress, Next.js, Tailwind CSS
                and PHP (not core PHP). My passion lies in creating dynamic,
                user-friendly web applications that meet modern standards.
              </p>
            </div>
            <div>
              <p>
                I enjoy combining the flexibility of React and JavaScript with
                the power of Next.js for seamless performance, while using
                WordPress for effective content management. With a strong grasp
                of Tailwind CSS, I ensure every project has a sleek, responsive
                design.
              </p>
            </div>
            <div>
              <p>
                Whether it&apos;s optimizing performance with Vite or
                integrating robust backend solutions, I am committed to
                delivering high-quality results. Download my resume by clicking
                the button below and discover how I can help bring your ideas to
                life with innovative web solutions!
              </p>
            </div>
          </motion.div>
          <div className="mt-8">
            <Button
              variants={buttonVarantAnmation}
              initial="initial"
              whileHover="hover"
              whileTap="whiletap"
              className="text-[15px] h-16 rounded-[5px] relative z-0 font-medium"
              px="px-20"
              href={resume}
              download
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
