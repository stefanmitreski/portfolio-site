import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import BackToTop from "./components/BackToTop";
import './styles/globals.css';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
}