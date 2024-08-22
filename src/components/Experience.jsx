import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { motion, useInView } from "framer-motion";
import { textAnimationVar } from "../assets/config/motion";
import { useRef } from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: " 0.3em 0.3em 1em rgb(0 0 10 / 50%)",
        borderRadius: "15px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] leading-7 md:text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-slate-300 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-200 text-[13px] md:text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="experience">
      <div className="my-20">
        <div className="flex flex-col gap-6 md:gap-10 justify-center items-center text-white py-5 my-20">
          <div className="py-8  overflow-hidden" ref={ref}>
            <motion.div
              variants={textAnimationVar}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <h1>Experience</h1>
            </motion.div>
          </div>
          <p className="text-slate-300">What I have done so far</p>
        </div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
