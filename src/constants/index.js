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
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/noobremon/BloomHer",
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
    image: project3,
    source_code_link: "https://github.com/noobremon/Todo-List-Pro",
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
    image: project3,
    source_code_link: "https://github.com/noobremon/Todo-List-Pro",
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
    image: project3,
    source_code_link: "https://github.com/noobremon/Todo-List-Pro",
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
    image: project3,
    source_code_link: "https://github.com/noobremon/Todo-List-Pro",
  },
];

export { services, technologies, experiences, testimonials, projects };