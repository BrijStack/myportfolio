import { motion, useInView } from "framer-motion";
import { fadeTextAnimation, textAnimationVar } from "../assets/config/motion";
import { projects } from "../constants";
import { PinContainer } from "./ui/3d-pin";
import { porjectbg } from "../assets";
import { FaLocationArrow } from "react-icons/fa";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="projects">
      <div className="pt-4">
        <div className="flex flex-col gap-6 md:gap-10 justify-center items-center text-white pt-5 my-16">
          <div className="py-12  overflow-hidden " ref={ref}>
            <motion.div
              variants={textAnimationVar}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <h1>My Projects</h1>
            </motion.div>
          </div>
          <motion.p
            variants={fadeTextAnimation}
            initial="initial"
            whileInView="animate"
            className="text-slate-300 text-[13px] md:text-[20px] text-center md:px-20 leading-8 md:leading-9"
          >
            Step into the world of Brijesh K, where frontend elegance meets
            backend robustness. As a skilled Fullstack Developer, I specialize
            in creating seamless digital experiences that marry sleek design
            with powerful functionality. Join me on the journey to bring your
            ideas to life!
          </motion.p>
        </div>

        <div className="pt-0 pb-4">
          <motion.div
            variants={fadeTextAnimation}
            initial="initial"
            whileInView="animate"
            className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"
          >
            {projects.map(({ id, title, des, img, iconLists, link }) => (
              <div
                key={id}
                className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              >
                <PinContainer title={link} href={link}>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] md:h-[26vh] xl:h-[40vh]  mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img src={porjectbg} alt="bg-img" />
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0"
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                    {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-slate-300">
                    {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center text-white">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple ">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
