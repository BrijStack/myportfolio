import { skills1, skills2 } from "../../constants";

const SkillAnimation = () => {
  return (
    <>
      {/* Marquee */}
      <div className="flex flex-col justify-center w-full items-center overflow-hidden  whitespace-nowrap h-[800px] gap-12 maskImg">
        <div className="flex overflow-hidden select-none">
          <Marquee />
          <Marquee />
        </div>
        <div className="flex overflow-hidden select-none">
          <Marquee2 />
          <Marquee2 />
        </div>
      </div>
    </>
  );
};

export default SkillAnimation;
const Marquee = () => {
  return (
    <>
      {/* MarqueeGroup */}
      <div className="flex-shrink-0 flex  items-center justify-around  whitespace-nowrap w-[100%] animate-scroll-vertical">
        {skills1.map((images, index) => (
          // ImageGroup
          <div
            key={index}
            className=" grid  w-[100px] h-[100px]  p-1  place-items-center"
          >
            {/* Image  */}
            <img
              src={images}
              alt=""
              className=" object-contain w-full h-full aspect-[16/9] px-[5px] py-[20px]  shadow-lg shadow-blue-500/50 rounded-lg "
            />
          </div>
        ))}
      </div>
    </>
  );
};
const Marquee2 = () => {
  return (
    <>
      {/* MarqueeGroup */}
      <div className="flex-shrink-0 flex  items-center justify-around  whitespace-nowrap w-[100%] animate-scroll-vertical direction-reverse delay-3">
        {skills2.map((images, index) => (
          // ImageGroup
          <div
            key={index}
            className=" grid  w-[100px] h-[100px]  p-1  place-items-center"
          >
            {/* Image  */}
            <img
              src={images}
              alt=""
              className=" object-contain w-full h-full aspect-[16/9] px-[5px] py-[20px] shadow-lg shadow-blue-500/50 rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};
