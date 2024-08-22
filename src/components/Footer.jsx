import Divider from "../design/Divider";
import Contact from "./Contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="pt-10 pb-10 md:pt-24 ">
        <Contact />
        <Divider />
        <div className="flex justify-center pt-5 text-white">
          <p>&copy; {currentYear} BrijStack. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
