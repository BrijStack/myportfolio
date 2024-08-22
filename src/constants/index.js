import {
  adrianPortfolio,
  bankmodern,
  brainwave,
  c,
  fm,
  foiwe,
  gsap,
  GT3,
  innovkraft,
  next,
  re,
  starbucks,
  stream,
  tail,
  tesla,
  three,
  ts,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Overview",
    url: "#overview",
  },
  {
    id: "1",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const heading = [
  {
    id: "4",
    title: "Crafting",
  },
  {
    id: "5",
    title: "Seamless",
  },
  {
    id: "6",
    title: "Solution",
  },
];

export const footer = [
  {
    id: "7",
    title: "Overview",
    url: "#overview",
  },
  {
    id: "8",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "9",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "10",
    title: "Contact",
    url: "#contact",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brain wave Explore the possibilities of AI",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: brainwave,
    iconLists: [re, tail, ts, three, fm],
    link: "https://brijstack.github.io/brainwave/",
  },
  {
    id: 2,
    title: "Bank Modern App the next generation payment method",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: bankmodern,
    iconLists: [next, tail, ts, stream, c],
    link: "https://brijstack.github.io/Bank-Modern-App/",
  },
  {
    id: 3,
    title: "GT3 Open AI Lets Build Something Amazing",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: GT3,
    iconLists: [re, tail, ts, three, c],
    link: "https://brijstack.github.io/gt3_Jsm/",
  },
  {
    id: 4,
    title: "Transforming Concepts into Seamless User Experiences",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: adrianPortfolio,
    iconLists: [next, tail, ts, three, gsap],
    link: "https://brijstack.github.io/Adrianportfolio/",
  },
];

export const experiences = [
  {
    title: "Full Stack Development Intern",
    company_name: "Amigroc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2020 - March 2020",
    points: [
      "Utilized PHP Laravel Framework to develop a comprehensive e-commerce platform for a supermarket.",
      "Managed both front-end and back-end development, ensuring seamless integration of user interfaces with server-side logic.",
      "Designed and implemented essential e-commerce functionalities, including product listings, shopping cart, and checkout processes.",
      "Successfully completed and submitted the project as part of senior year college requirements, showcasing practical skills in web development.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Packers and Movers",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Aug 2020",
    points: [
      "Developed a fully functional website tailored for a packer and mover business.",
      "Utilized WordPress as the CMS platform for managing and updating site content.",
      "Implemented PHP for dynamic functionalities and CSS for custom styling to enhance visual appeal.",
      "Designed the website using Elementor page builder for intuitive and flexible page design.",
    ],
  },
  {
    title: "Lead Web Developer",
    company_name: "Innovkraft",
    icon: innovkraft,
    iconBg: "#383E56",
    date: "Sept 2020 - Feb 2023",
    points: [
      "Led a team of five web developers in creating over 50 websites using the Elementor page builder for WordPress.",
      "Collaborated with UI/UX developers to design wireframes and develop aesthetically pleasing user interfaces.",
      "Managed the launch of multiple websites using Shopify and Wix platforms.",
      "Oversaw the end-to-end development process, ensuring high-quality website delivery and adherence to project timelines.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company_name: "Foiwe",
    icon: foiwe,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developed responsive, user-friendly web designs to enhance user experience and ensure cross-device compatibility.",
      "Integrated and customized WordPress themes and plugins according to company requirements, optimizing for both functionality and performance.",
      "Conducted rigorous testing and debugging to ensure website functionality, and implemented security measures to protect against vulnerabilities and threats.",
      "Collaborated with a small team to deliver projects on time, optimized websites for speed and SEO, and provided ongoing maintenance and updates to keep sites secure and up-to-date.",
    ],
  },
];

export const skills1 = [next, tail, ts, three, gsap];
export const skills2 = [re, tail, ts, three, c];
