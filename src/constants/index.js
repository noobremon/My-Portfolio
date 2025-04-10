import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import saanp from "../assets/company/saanp.png";
import stopwatch from "../assets/company/stopwatch.png";
import wefit from "../assets/company/wefit.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Tech Solutions Inc.",
    icon: tekisky, // Replace with the appropriate icon if available
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Developed and optimized user interfaces for web applications using React.js and Tailwind CSS.",
      "Collaborated with backend developers to integrate APIs and ensure seamless data flow.",
      "Conducted usability testing and implemented feedback to improve user experience.",
      "Created reusable components to streamline development and maintain consistency across projects.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "CSE Undergrad",
    icon: tekisky,
    iconBg: "#383E56",
    date: "August 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rajarshi proved me wrong.",
    name: "Prachi Ghosh",
    designation: "UI/UX Designer",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajarshi does.",
    name: "Rajarshi Mondal",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Rajarshi optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rishi Paul",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "BloomHer",
    description:
      "A health-focused mobile app tailored for women with PCOD/PCOS to monitor their menstrual cycles, symptoms, and lifestyle factors. It offers personalized insights, reminders, and expert-backed wellness tips to support hormonal balance and reproductive health.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "next",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/noobremon/BloomHer",
    live_demo_link: "https://bloom-her.vercel.app/", 
  },
  {
    name: "Alumni Association",
    description:
      "A community-driven platform designed to connect alumni with their alma mater and fellow graduates. It supports event planning, networking opportunities, job postings, and updates, fostering lifelong relationships and professional growth.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "yellow-text-gradient",
      }
    ],
    image: gearXpert,
    source_code_link: "https://github.com/noobremon/Alumni-Association",
    live_demo_link: "https://alumniassociation-rho.vercel.app/",
  },
  {
    name: "Functional TODO List",
    description:
      "A simple and intuitive productivity tool that helps users organize tasks, set priorities, and track daily progress. Features include task categorization, reminders, and a clean, user-friendly interface for seamless task management!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/noobremon/Todo-List-Pro",
    live_demo_link: "https://todo-list-pro-six.vercel.app/",
  },
  {
    name: "Sasta We Fit",
    description:
      "A web-based nutrition guide that suggests healthy and balanced food options tailored to individual needs. It focuses on promoting wellness through smart eating habits, offering users curated meal suggestions for a healthier lifestyle!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: wefit,
    source_code_link: "https://github.com/noobremon/Sasta-WeFit",
    live_demo_link: "https://sasta-we-fit.vercel.app/",
  },
  {
    name: "Stop Watch",
    description:
      "A sleek and accurate digital stopwatch application for timing events with precision. It includes features like start/stop, reset, and lap-time recording, making it perfect for workouts, study sessions, or everyday time tracking!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: stopwatch,
    source_code_link: "https://github.com/noobremon/Stopwatch",
    live_demo_link: "https://stopwatch-pi-ten.vercel.app/",

  },
  {
    name: "Snake Game",
    description:
      "A classic arcade-style game where players control a growing snake to collect food and avoid hitting walls or itself. This project showcases fundamental game logic, smooth controls, and an engaging retro gaming experience!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: saanp,
    source_code_link: "https://github.com/noobremon/Snakeee",
    live_demo_link: "https://snakeee-tau.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };