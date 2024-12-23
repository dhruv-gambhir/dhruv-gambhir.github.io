// components/Projects.js

const Projects = () => {
  const projects = [
    {
      name: 'University Rover Team',
      role: 'Communications and Base Station Lead',
      description:
        'Developed a ReactJS and Flask web app serving as the graphical user interface for rover communication. Established two wireless communication lines between the rover and the base station.',
      technologies: ['ReactJS', 'Flask', 'WebSockets', 'Wireless Communication'],
    },
    {
      name: 'ThisMatters Web App',
      role: 'Personal Project',
      description:
        'Created a full-stack NextJS web application for sharing blog-like content. Integrated Firebase for authentication, PostgreSQL database, and Azure blob for image handling. Set up a CI/CD pipeline on Vercel using GitHub Actions.',
      technologies: ['NextJS', 'Firebase', 'PostgreSQL', 'Azure', 'GitHub Actions', 'Vercel'],
    },
    {
      name: 'PetPal Web App',
      role: 'Team Lead',
      description:
        'Led a team of 7 to develop a web app connecting users with pet sitters, events, and adoption agencies. Built the frontend with Next.js and the backend using Python (Flask). Managed the GitHub repository by performing code reviews and resolving merge conflicts.',
      technologies: ['Next.js', 'Python', 'Flask', 'GitHub', 'Team Management'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-700 italic mb-2">{project.role}</p>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

