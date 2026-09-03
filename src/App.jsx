import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />

      <main id="top" className="mx-auto max-w-5xl px-5">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      <Footer />
    </>
  );
}
