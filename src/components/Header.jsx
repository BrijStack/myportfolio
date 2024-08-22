import { useEffect, useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";
import { navigation } from "../constants";
import { textAnimationVar } from "../assets/config/motion";
import { Link, useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import LogoSvg from "../assets/svg/LogoSvg";
import { FloatingNav } from "./FloatingNav";

const Header = () => {
  // const pathName = useLocation();
  const { hash } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    if (openNavigation) {
      document.body.classList.add("overflow-hidden");
    } else {
      const timeoutId = setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 700); // Matches the duration of the exit animation
      return () => clearTimeout(timeoutId);
    }
  }, [openNavigation]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  const menuVars = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: { duration: 0.7 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="z-50">
      <div className="flex justify-between items-center ">
        <a href="/" className="w-[10rem] xl:mr-8">
          <LogoSvg width={100} height={96} />
        </a>
        <FloatingNav />
        <AnimatePresence>
          {openNavigation && (
            <motion.nav
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={` bg-white flex lg:mx-auto absolute  inset-1  top-0 right-0 left-0 z-[100] overflow-hidden w-full h-full`}
            >
              <motion.div className=" flex flex-col items-center justify-center m-auto lg:flex-col h-full ">
                {navigation.map((item) => (
                  <div key={item.id}>
                    <motion.div className="flex flex-col items-center justify-center  lg:flex-col overflow-hidden ">
                      <motion.div
                        variants={textAnimationVar}
                        initial="initial"
                        animate="animate"
                        className={`  font-urbanist text-[35px] md:text-[60px] uppercase text-black hover:text-orange-300 px-6 md:py-10 py-2 lg:-mr-0.26 lg:font-light ${
                          item.url === hash
                            ? "z-2 lg:text-orange-300"
                            : "lg:text-black"
                        } lg:leading-5`}
                      >
                        <Link to={item.url} key={item.id} onClick={handleClick}>
                          {item.title}
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
        <div>
          <Button
            className="bg-none ml-auto z-[100]"
            px="px-3"
            onClick={toggleNavigation}
            relative
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
