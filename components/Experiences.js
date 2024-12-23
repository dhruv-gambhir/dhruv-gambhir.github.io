// components/Experiences.js

const Experiences = () => {
  const experiences = [
    {
      company: 'Bollore Logistics',
      role: 'Software Development Intern',
      duration: 'Jan 2024 – Jul 2024',
      responsibilities: [
        'Developed and deployed Next.js web app for quality control and internal communication.',
        'Implemented a PostgreSQL database to optimize SKU placement within boxes, improving inventory management.',
        'Supported containerization using Docker and deployment of the web app to Azure Web Apps, streamlining the deployment process.',
      ],
    },
    {
      company: 'Temasek Laboratories',
      role: 'Software Development Intern',
      duration: 'May 2023 – Aug 2023',
      responsibilities: [
        'Led the development of a desktop application using Electron.js to deploy deep learning computer vision algorithms, enhancing the security analysis of microchips.',
        'Enhanced accessibility of these algorithms for professionals with minimal programming experience.',
        'Designed the user interface and experience with Figma, ensuring a user-friendly and intuitive application.',
      ],
    },
    {
      company: 'Busy Infotech',
      role: 'Backend Software Development Intern',
      duration: 'Dec 2022 – Jan 2023',
      responsibilities: [
        'Supported the backend team in developing and testing new APIs written in Golang.',
        'Managed and resolved database-related service tickets, ensuring customer satisfaction and system reliability.',
        'Diagnosed and corrected PostgreSQL database errors by crafting and executing precise queries.',
      ],
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Experiences</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-semibold">{exp.role} at {exp.company}</h3>
              <p className="text-gray-700 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

