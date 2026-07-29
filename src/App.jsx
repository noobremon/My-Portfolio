import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Resume, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed min-h-screen'>
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
