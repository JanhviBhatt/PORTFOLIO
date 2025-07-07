import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, image, link }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl duration-300 ease-in-out">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-blue-950">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600">
          {tech.map((item, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-blue-900 hover:underline font-semibold"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;


