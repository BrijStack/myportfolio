import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../assets";
import Button from "./Button";
import Divider from "../design/Divider";
import { useRef } from "react";
import {
  buttonVarantAnmation,
  fadeTextAnimation,
  slideAnimation,
  textAnimationVar,
} from "../assets/config/motion";
import { heading } from "../constants";

const Hero = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScrollValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["40%", "-100%"]
  );

  return (
    <>
      <div className="pt-4">
        <div className="flex lg:flex-wrap justify-around items-start flex-wrap-reverse">
          <motion.div className="-z-10 p-[20px]" {...slideAnimation("right")}>
            <motion.div {...slideAnimation("down")}>
              <motion.img
                style={{ translateY: imageScrollValue }}
                src={profile}
                alt=""
                width={650}
                height={650}
                className="-z-10 "
              />
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col justify-start items-start p-[20px]">
            {heading.map((item) => (
              <motion.h1 key={item.id} className="text-white font-normal">
                <motion.div className="relative py-12 overflow-hidden -z-10">
                  <motion.div
                    variants={textAnimationVar}
                    initial="initial"
                    animate="animate"
                  >
                    {item.title}
                  </motion.div>
                </motion.div>
              </motion.h1>
            ))}
            <div className="mt-5">
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
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeTextAnimation}
        initial="initial"
        whileInView="animate"
        className="lg:px-[35px] md:px-[3px]"
      >
        <motion.p className="text-white font-urbanist md:text-[62px] text-[28px] font-light md:leading-[8rem] leading-[3rem] ">
          Transforming ideas into compelling web experiences through innovative
          design, meticulous development, and seamless project execution.
        </motion.p>
      </motion.div>

      <Divider />

      <div className="pt-10 pb-10 md:pt-24 md:pb-24">
        <motion.div
          variants={fadeTextAnimation}
          initial="initial"
          whileInView="animate"
          className="flex flex-wrap "
        >
          <div className="text-white font-urbanist font-light text-[20px] md:text-[40px] flex-auto w-[40rem] md:leading-[4rem] py-5 sm:py-0">
            <p>
              Explore my portfolio of meticulously crafted web projects. Each
              one is a testament to my dedication to quality, creativity, and
              user-centric design. Click below to discover how I can elevate
              your digital presence with innovative solutions and seamless
              execution.
            </p>
          </div>
          <div className="flex-auto w-1 flex justify-center items-center py-5 sm:py-0">
            <div className=" ">
              <Button
                href="/projects"
                variants={buttonVarantAnmation}
                initial="initial"
                whileHover="hover"
                whileTap="whiletap"
                className="bg-white rounded-full w-80 h-[20rem] relative before:rounded-full text-[15px] font-medium"
              >
                Check My Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
