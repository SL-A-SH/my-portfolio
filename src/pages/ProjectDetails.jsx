import { useParams } from 'react-router-dom';
import { projects } from '../constants/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        {/* Project Image */}
        <div className="relative aspect-video mb-8">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About this project</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              {project.features?.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
            <p className="text-gray-300 mb-6">{project.technicalDetails}</p>
          </div>

          <div>
            <div className="bg-[#1a1f2b] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Info</h3>
              
              <div className="mb-4">
                <h4 className="text-sm text-gray-400 mb-1">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#2a2f3b] text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm text-gray-400 mb-1">Timeline</h4>
                <p className="text-gray-300">{project.timeline}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm text-gray-400 mb-1">Role</h4>
                <p className="text-gray-300">{project.role}</p>
              </div>

              {(project.demoLink || project.codeLink) && (
                <div className="flex flex-col gap-3 mt-6">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                    >
                      View Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2a2f3b] text-white px-4 py-2 rounded-lg text-center hover:bg-[#3a3f4b] transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;