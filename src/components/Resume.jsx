import React from "react";
import resumePDF from "../assets/resume.pdf";
import { StarsCanvas } from "./canvas";

const Resume = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 relative min-h-screen" id="resume">
      <StarsCanvas />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#915EFF] mb-6 text-center animate-pulse">My Resume</h2>
        <p className="text-lg text-white mb-8 text-center max-w-2xl">Explore my professional journey, skills, education, and achievements. Download the PDF or view it interactively below!</p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
          <a href={resumePDF} download className="bg-[#915EFF] text-white px-8 py-4 rounded-lg shadow-lg font-semibold hover:bg-[#7f4eea] transition-all duration-300 text-xl mb-6 md:mb-0">
            Download Resume
          </a>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90vw] md:w-[600px] h-[80vw] md:h-[800px] flex items-center justify-center border-4 border-[#915EFF]">
            <iframe
              src={resumePDF}
              title="Resume PDF"
              width="100%"
              height="100%"
              className="border-none"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-[#915EFF] text-lg font-semibold mb-2">Highlights</p>
          <ul className="text-white text-base space-y-2">
            <li>🚀 Full Stack Web Developer</li>
            <li>🎓 CSE Undergrad</li>
            <li>💡 MERN Stack, AWS, UI/UX, AI/ML</li>
            <li>🏆 Hackathon Participant & Tech Club Member</li>
            <li>📈 Strong foundation in Mathematics & Computer Science</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
