import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { techStacks } from "../constants/skill";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiC, SiCplusplus, SiPython, SiFigma, SiGit } from "react-icons/si";

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
        <div className="flex-1 flex flex-col items-center">
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
        <div className="flex-1 flex flex-col items-center">
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
        <div className="flex-1 flex flex-col items-center mt-0">
          <h3 className="text-xl font-semibold text-center mb-8 text-[#915EFF]">Other</h3>
          <div className="flex flex-col items-center">
            {/* First row: git, figma, python */}
            <div className="flex flex-row justify-center gap-6 mb-6">
              {["git", "figma", "Python"].map((name) => {
                const tech = techStacks.other.find(t => t.name === name);
                if (!tech) return null;
                return (
                  <div className="w-24 h-24 group relative flex items-center justify-center" key={tech.name}>
                    {tech.name === "Python" ? (
                      <SiPython size={64} color="#3776AB" className="transition-transform duration-300 group-hover:scale-110" />
                    ) : tech.name === "git" ? (
                      <SiGit size={64} color="#F05032" className="transition-transform duration-300 group-hover:scale-110" />
                    ) : tech.name === "figma" ? (
                      <SiFigma size={64} color="#A259FF" className="transition-transform duration-300 group-hover:scale-110" />
                    ) : null}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Second row: C, C++ */}
            <div className="flex flex-row justify-center gap-10">
              {["C", "C++"].map((name) => {
                const tech = techStacks.other.find(t => t.name === name);
                if (!tech) return null;
                return (
                  <div className="w-24 h-24 group relative flex items-center justify-center" key={tech.name}>
                    {tech.name === "C" ? (
                      <SiC size={64} color="#00599C" className="transition-transform duration-300 group-hover:scale-110" />
                    ) : tech.name === "C++" ? (
                      <SiCplusplus size={64} color="#00599C" className="transition-transform duration-300 group-hover:scale-110" />
                    ) : null}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
