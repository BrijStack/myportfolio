import { motion } from "framer-motion";
import SkillAnimation from "./ui/SkillAnimation";
import { fadeTextAnimation } from "../assets/config/motion";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-wrap xl:flex-nowrap justify-center items-center px-0 md:px-10 xl:px-0 py-10">
        <motion.div
          variants={fadeTextAnimation}
          initial="initial"
          whileInView="animate"
          className="text-white w-full flex items-start justify-center flex-col md:pr-20 gap-4"
        >
          <h1 className=" leading-[3rem] md:leading-[6rem] text-[42px] md:text-[80px]">
            Elevate my web development skills with ease
          </h1>
          <p className="text-slate-300 leading-9 text-[16px] md:text-lg">
            I am dedicated to mastering the latest technologies and best
            practices in the industry. From front-end design to back-end
            development, I continually strive to create seamless, efficient, and
            innovative web solutions. My commitment to learning and adapting
            ensures that I can tackle any challenge and deliver top-notch
            results.
          </p>
        </motion.div>
        <motion.div
          variants={fadeTextAnimation}
          initial="initial"
          whileInView="animate"
          className="flex flex-col justify-center w-full items-center overflow-hidden  whitespace-nowrap h-[400px] xl:h-[800px] mb-[-100px] md:mb-0"
        >
          <SkillAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
