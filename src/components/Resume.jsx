import React, { useState, useEffect } from "react";
import resumePDF from "../assets/resume.pdf";
import { StarsCanvas } from "./canvas";

const codeSnippet = `import React, { useRef, useEffect } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}

export default CustomCursor;

// Usage: <CustomCursor />
`;

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return (
    <section className="w-full flex flex-col items-center py-32 relative min-h-screen" id="resume">
      <StarsCanvas />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#915EFF] mb-6 text-center animate-pulse">My Resume</h2>
        <p className="text-lg text-white mb-8 text-center max-w-2xl">Explore my professional journey, skills, education, and achievements. Click the card to view my full resume!</p>
        <div className="relative flex flex-col items-center justify-center w-full" style={{ minHeight: '420px' }}>
          {/* Decorative Glow/Gradient Behind Cards */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[430px] rounded-3xl bg-gradient-to-br from-[#915EFF]/40 via-[#7f4eea]/30 to-[#181824]/60 blur-2xl z-0"></div>

          {/* Code Card (beneath, now even larger square) */}
          <div className="absolute left-1/2 top-40 -translate-x-[5%]" style={{ zIndex: 10 }}>
            <div className="bg-[#181824]/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-96 h-96 border-4 border-[#915EFF]/60 transform rotate-[13deg] scale-95 transition-all duration-500 relative flex flex-col justify-center hover:scale-100 hover:rotate-[15deg]">
              <pre className="text-green-400 text-xs whitespace-pre-wrap font-mono select-text overflow-x-auto">
{codeSnippet}
              </pre>
            </div>
          </div>
          {/* Resume Card (front, now even larger square) */}
          <div className="absolute left-1/2 top-20 -translate-x-[70%] flex justify-center" style={{ zIndex: 20 }}>
            <div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[448px] h-[448px] cursor-pointer border-4 border-[#915EFF] relative transition-all duration-500 transform -rotate-[10deg] hover:scale-105 hover:-rotate-[12deg] hover:shadow-[0_8px_32px_0_rgba(145,94,255,0.25)] flex flex-col items-center"
              onClick={() => setShowModal(true)}
              style={{ zIndex: 20, boxShadow: '0 8px 32px 0 rgba(145,94,255,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)' }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-[#915EFF] bg-white shadow-lg flex items-center justify-center z-30">
                <img src="https://avatars.githubusercontent.com/u/120097371?v=4" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="mt-14 w-full">
                <h3 className="text-2xl font-bold text-[#915EFF] leading-tight">Rajarshi Das</h3>
                <p className="font-semibold text-black text-base mt-1">CS Undergrad | Frontend Dev | Amatuer Photographer</p>
                <p className="text-gray-700 mt-2 text-sm leading-snug">I am Rajarshi, a CSE Undergrad from RCCIIT. I build websites and web applications with a focus on performance and accessibility. I am passionate about creating beautiful and functional user interfaces.</p>
                <a href="mailto:rajarshidas729@gmail.com" className="block mt-2 text-[#915EFF] underline text-sm">rajarshidas729@gmail.com</a>
                <p className="text-gray-500 text-xs mt-1">Kolkata, West Bengal</p>
                <div className="mt-4">
                  <span className="font-bold text-black">WORK EXPERIENCE</span>
                  <p className="text-gray-800 text-sm">Project Admin || GSSOC</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-[#915EFF] text-white rounded shadow hover:bg-[#7f4eea] transition-all text-sm w-full font-semibold" onClick={e => {e.stopPropagation(); window.open(resumePDF, '_blank');}}>Download PDF</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Full Resume */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-70"
            style={{ top: 0, left: 0 }}
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full p-6 relative animate-fadeIn flex flex-col items-center"
              style={{ marginTop: '80px', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full flex flex-col items-center" style={{marginTop: '30px'}}>
                <h3 className="text-2xl font-bold text-[#915EFF] mb-4">Full Resume</h3>
                <button className="absolute left-1/2 -translate-x-1/2 mt-2 top-8 text-[#915EFF] text-2xl font-bold z-10" style={{position:'absolute', top: '30px', right: '32px', left: 'auto', transform: 'none'}} onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <iframe
                src={resumePDF + '#toolbar=0&navpanes=&scrollbar=0'}
                title="Resume PDF"
                width="100%"
                height="600px"
                className="border-none rounded mt-6"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
