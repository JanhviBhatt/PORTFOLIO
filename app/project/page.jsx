import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'ShopVerse',
    description:
      'An e-commerce platform built using the MERN stack with secure authentication, product management, and responsive UI.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Clerk'],
    image: '/images/shopverse.png',
    link: 'https://github.com/JanhviBhatt/ShopVerse',
  },
  {
    title: 'NeuroCuts',
    description:
      'An AI-powered video short generator that uses machine learning to transform long content into engaging, shareable snippets.',
    tech: ['Next.js', 'Python', 'OpenAI API', 'Tailwind CSS', 'Cloudinary'],
    image: '/images/neurocuts.png',
    link: 'https://github.com/JanhviBhatt/NeuroCuts',
  },
  {
    title: 'AutoPilot.AI',
    description:
      'A multi-agent AI system that performs real-world tasks through natural language and integrates booking APIs, calls, and calendar sync.',
    tech: ['Next.js', 'Django', 'LangChain', 'Celery', 'Docker'],
    image: '/images/autopilot-ai.png',
    link: 'https://github.com/JanhviBhatt/AutoPilot.AI-ATO-SYSTEM-',
  },
  {
    title: 'ImDB Clone',
    description:
      'A movie listing platform that allows users to filter, and view movie details, built with React and Tailwind CSS.',
    tech: ['React.js', 'Bootstrap','TMDB API'],
    image: '/images/imdb.png',
    link: 'https://github.com/JanhviBhatt/movies-app',
  },
];

const Projects = () => {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-950">
        My Projects
      </h2>
      <p className="text-center mb-10 text-gray-700 mb-20">
        "Here’s a glimpse into the projects I’ve crafted — where ideas meet execution and technology turns into real-world impact."
      </p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

