import { useParams } from 'react-router-dom';
import { projects } from '../constants/projects';
import { ExternalLink, Calendar, User, Flag, AlertTriangle } from 'lucide-react';
import FeatureGrid from '../components/FeatureGrid';

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
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <span className="px-3 py-1 bg-[#2a2f3b] rounded-full text-sm">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        </div>
        
        {/* Media Section */}
        <div className="mb-12">
          {project.media?.type === 'youtube' ? 
          (
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-[#1a1f2b]">
              <iframe
                src={project.media.src.replace('youtu.be/', 'youtube.com/embed/')}
                className="absolute top-0 left-0 w-full h-full"
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) 
          : project.category === 'Professional Work' ? 
          (
            <FeatureGrid type={project.mediaType} />
          ) 
          : 
          (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1a1f2b]">
              <img 
                src={project.media.src} 
                alt={project.media.alt || project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">About this project</h2>
              <p className="text-gray-300 mb-4">{project.longDescription}</p>
            </section>

            {/* Features */}
            {project.features && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="pl-2">{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technical Details */}
            {project.technicalDetails && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
                <p className="text-gray-300">{project.technicalDetails}</p>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Challenges Overcome</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="pl-2 flex items-start">
                      <AlertTriangle className="inline-block w-5 h-5 mr-2 flex-shrink-0 text-yellow-500" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-[#1a1f2b] p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Project Info</h2>
              
              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-400 mb-2">Technologies</h3>
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

              {/* Timeline */}
              {project.timeline && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Timeline
                  </h3>
                  <p className="text-gray-300">{project.timeline}</p>
                </div>
              )}

              {/* Role */}
              {project.role && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Role
                  </h3>
                  <p className="text-gray-300">{project.role}</p>
                </div>
              )}

              {/* Team */}
              {project.team && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <Flag className="w-4 h-4" />
                    Team
                  </h3>
                  <p className="text-gray-300">{project.team}</p>
                </div>
              )}

              {/* Links */}
              {(project.demoLink || project.codeLink) && (
                <div className="flex flex-col gap-3 mt-6">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2a2f3b] text-white px-4 py-2 rounded-lg text-center hover:bg-[#3a3f4b] transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
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