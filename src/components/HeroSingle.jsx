import { motion } from "framer-motion";
import { profileCircle } from "../assets";
import {
  buttonVarantAnmation,
  textAnimationVar,
} from "../assets/config/motion";
import About from "./About";
import Button from "./Button";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const HeroSingle = () => {
  return (
    <>
      <section className="hero-background bg-[length:60%] bg-no-repeat bg-center ">
        <div className="flex flex-wrap justify-center items-center pt-[137px] pb-[103px]">
          <div className="flex flex-col justify-center items-center  gap-1">
            <img src={profileCircle} alt="" />
            <div className=" overflow-hidden ">
              <motion.div
                variants={textAnimationVar}
                initial="initial"
                animate="animate"
              >
                <h1 className="text-white pt-8 pb-14">Brijesh K</h1>
              </motion.div>
            </div>

            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold text-[26px]">
              Data Sorcerer
            </p>
            <p className="text-white text-[19px]  w-[40%] text-center leading-8">
              As a passionate data scientist, with expertise in machine
              learning, AI, and data analytics, I thrive on the challenges of
              exploring complex data landscapes and uncovering meaningful
              patterns that drive innovation
            </p>
          </div>
          <div className="mt-14">
            <Button
              variants={buttonVarantAnmation}
              initial="initial"
              whileHover="hover"
              whileTap="whiletap"
              className="text-[15px] h-16 rounded-[5px] relative z-0 font-medium"
              px="px-20"
              href="/contact"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default HeroSingle;
