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
  pcbProject,
  railwayProject,
  toolboxProject,
  linkClick,
  mysql,
  express,
  aws,
  mui,
  python,
  c,
  cpp,
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
import cllg from "../assets/company/cllg.png";
import iskul from "../assets/company/iskul.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "resume",
    title: "Resume",
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
    title: "AI/Ml",
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
    title: "My School Life",
    company_name: "Aditya Academy Sr. Secondary",
    icon: iskul, // Replace with the appropriate icon if available
    iconBg: "#383E56",
    date: "March 2009 - April 2023",
    points: [
      "I have done my schooling both secondary and higher secondary from the same school.",
      "Actively participated in various co-curricular activities including science exhibitions and coding competitions.",
      "Built a strong foundation in Mathematics and Computer Science and interest in technology.",
      "I passed my secondary and higher secondary examination with a percentage of 89% and 81% respectively.",
    ],
  },
  {
    title: "Collegiate Life",
    company_name: "RCC Institute of Information Technology",
    icon: cllg,
    iconBg: "#383E56",
    date: "September 2023 - July 2027",
    points: [
      "Currently in my second year, pursuing a Bachelor's degree in Computer Science and Engineering.",
      "Maintaining a CGPA of 7.65(Till 3rd Semester).",
      "Engaged in hands-on learning and building better projects.",
      "Involved in technical clubs and hackathons, fostering collaborative and problem-solving skills.",
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
  {
    title: "Experience",
    company_name: "Till what I have done :)",
    icon: iskul, // Replace with the appropriate icon if available
    iconBg: "#383E56",
    date: "March 2023 - Work In Progress",
    points: [
      "Proud contributor to Hacktoberfest and GSSoC — coding for a cause and learning every commit!",
      "From Smart India Hackathon to Smart Bharat Hackathon, I’ve tackled real-world challenges with real impact.",
      "Built, collaborated, and innovated — my journey through SIH, SBH, Hacktoberfest, and GSSoC has shaped me into a purpose-driven developer.",
      "Hackathons and open-source aren't just events — they’re where I grow, solve, and shine!",
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
      "A health-focused mobile app tailored for women with PCOD/PCOS to monitor their menstrual cycles, symptoms, and lifestyle factors. It offers personalized insights, reminders, and expert wellness tips to support reproductive health.",
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
      "A community platform designed to connect alumni with their alma mater and fellow graduates. It supports event planning, career networking, job postings, and university updates, fostering lifelong professional growth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
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
    name: "PCB Defect Detection System",
    description:
      "An AI-powered optical inspection system designed to detect defects in Printed Circuit Boards using computer vision. It performs real-time image analysis to identify component faults and enhance quality control.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "ai-ml",
        color: "pink-text-gradient",
      },
      {
        name: "computer-vision",
        color: "white-text-gradient",
      },
    ],
    image: pcbProject,
    source_code_link: "https://github.com/noobremon/PCB-main",
    live_demo_link: "https://pcb-main.onrender.com/",
  },
  {
    name: "Indian Railways Video Surveillance System",
    description:
      "A smart IP-based Video Surveillance System for railway coaches to enhance passenger safety. It integrates ONVIF cameras, local edge storage, GPS timestamping, and AI facial detection for security analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "ai-surveillance",
        color: "white-text-gradient",
      },
    ],
    image: railwayProject,
    source_code_link: "https://github.com/noobremon/Ir-Railvision",
    live_demo_link: "https://ir-railvision-frontend.onrender.com/",
  },
  {
    name: "ToolBox",
    description:
      "A modern full-stack web application providing 40+ essential developer tools in one place. From text manipulation and color conversion to AI content generation, ToolBox streamlines daily developer workflow.",
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
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: toolboxProject,
    source_code_link: "https://github.com/noobremon/Tool-Box",
    live_demo_link: "https://tool-box-1.onrender.com/",
  },
  {
    name: "Link Clickkk",
    description:
      "A universal social media downloader app for fetching video and audio content across multiple platforms with auto-detection, bulk downloads, high quality processing, and local file management.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "yt-dlp",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
    ],
    image: linkClick,
    source_code_link: "https://github.com/noobremon/Link-Clickkk.git",
    live_demo_link: "https://link-clickkk.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };