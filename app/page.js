// app/page.js
import About from '../components/About';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
}

