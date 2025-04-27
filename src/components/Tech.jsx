import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { techStacks } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon", 
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-10 text-white">My Tech Skills</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Frontend */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-center mb-4 text-[#915EFF]">Frontend</h3>
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {techStacks.frontend.map((tech) => (
              <div className="w-24 h-24 group relative flex items-center justify-center" key={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-icon w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Backend */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-center mb-4 text-[#915EFF]">Backend</h3>
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {techStacks.backend.map((tech) => (
              <div className="w-24 h-24 group relative flex items-center justify-center" key={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-icon w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Other */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-center mb-4 text-[#915EFF]">Other</h3>
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {techStacks.other.map((tech) => (
              <div className="w-24 h-24 group relative flex items-center justify-center" key={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={
                    `tech-icon w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ` +
                    ((tech.name === "Python" || tech.name === "C" || tech.name === "C++") ? "brightness-125" : "")
                  }
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
