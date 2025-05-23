import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { StarsCanvas } from "./canvas";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <StarsCanvas />
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20 md:flex-nowrap">
        <div className="w-full md:w-2/3 z-10" ref={headingRef}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <p
            ref={paragraphRef}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a passionate frontend developer with experience in JavaScript, 
            and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and 
            collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
            Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="relative w-full md:w-1/3 flex justify-center items-center mt-10 md:mt-0 z-0">
          <div
            className="w-[300px] md:w-[400px] h-[220px] md:h-[300px] rounded-[50%] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex justify-center items-center"
            style={{ marginLeft: "0", marginRight: "0" }}
          >
            <img
              src="https://i.postimg.cc/mkgtBrR0/1726978133193.jpg"
              alt="Profile"
              className="w-[98%] h-[98%] rounded-[50%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
