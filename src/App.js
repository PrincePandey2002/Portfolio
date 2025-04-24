// import logo from './logo.svg';
import './App.css';
import React,{useRef} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactMe/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
      if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const contactRef = useRef(null);

  const scrollToContact = () => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
   <>
    <Navbar />
    <Hero scrollToContact={scrollToContact}/>
    <About ref={aboutRef}/>
    <Skills scrollToAbout={scrollToAbout}/>
    <Projects />
    <Contact ref={contactRef}/>
    <Footer/>
   </>
  );
}

export default App;
