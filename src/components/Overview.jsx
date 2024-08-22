import { motion } from "framer-motion";
import { profileCircle } from "../assets";
import {
  buttonVarantAnmation,
  textAnimationVar,
} from "../assets/config/motion";
import Button from "./Button";

const Overview = () => {
  return (
    <section
      className="hero-background bg-[length:60%] bg-no-repeat bg-center "
      id="overview"
    >
      <div className="flex flex-wrap justify-center items-center py-[20px] md:py-[100px]">
        <div className="flex flex-col justify-center items-center  md:gap-1">
          <img src={profileCircle} className="w-[150px] md:w-[180px] " alt="" />
          <div className=" overflow-hidden ">
            <motion.div
              variants={textAnimationVar}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-white pt-8 pb-8">Brijesh K</h1>
            </motion.div>
          </div>
          <div className="">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold text-[18px] md:text-[26px]">
              Software Developer
            </p>
          </div>
          <div className="flex justify-center items-center md:w-[80%] xl:w-[40%]">
            <p className="text-white text-[14px] md:text-[19px] text-center leading-8">
              As a skilled full stack developer, I excel in creating dynamic,
              scalable applications. I enjoy the challenges of modern web
              development, from crafting seamless user experiences to building
              robust backend systems that drive innovation.
            </p>
          </div>
          <div className="mt-5">
            <Button
              variants={buttonVarantAnmation}
              initial="initial"
              whileHover="hover"
              whileTap="whiletap"
              className="text-[15px] h-16 rounded-[5px] relative z-0 font-medium"
              px="px-20"
              href="#contact"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
