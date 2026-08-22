import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Resume, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
