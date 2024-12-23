// components/About.js
import Link from 'next/link';

const About = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Dhruv Gambhir</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        I'm a Computer Science Engineering student passionate about software development,
        specializing in web applications, backend systems, and UI/UX design.
      </p>
      <div className="flex space-x-4">
        <a href="http://www.linkedin.com/in/gambhir-dhruv" className="px-6 py-3 border border-black rounded hover:bg-gray-200 transition">
          LinkedIn
        </a>
        <a href="https://github.com/dhruv-gambhir" className="px-6 py-3 border border-black rounded hover:bg-gray-200 transition">
          Github
        </a>
      </div>
    </section>
  );
};

export default About;

