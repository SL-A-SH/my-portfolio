import { useParams } from 'react-router-dom';
import { projects } from '../constants/projects';
import { ExternalLink, Calendar, User, Flag, AlertTriangle, ArrowLeft } from 'lucide-react';
import FeatureGrid from '../components/FeatureGrid';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-[#1e2635] to-[#0f1419]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-[#1e2635] to-[#0f1419]">
      <div className="max-w-6xl mx-auto py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-gray-400 mb-4">
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.role && (
              <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-sm font-medium">
                {project.role}
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            {project.description}
          </p>
        </div>
        
        {/* Media Section */}
        <div className="mb-16">
          {project.media?.type === 'youtube' ? 
          (
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] border border-gray-700/50">
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
            <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] rounded-xl border border-gray-700/50 p-6">
              <FeatureGrid type={project.mediaType} />
            </div>
          ) 
          : 
          (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] border border-gray-700/50">
              <img 
                src={project.media.src} 
                alt={project.media.alt || project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">About this project</h2>
              <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                <p className="text-gray-300 text-lg leading-relaxed">{project.longDescription}</p>
              </div>
            </section>

            {/* Features */}
            {project.features && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Key Features</h2>
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Technical Details */}
            {project.technicalDetails && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Technical Details</h2>
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                  <p className="text-gray-300 text-lg leading-relaxed">{project.technicalDetails}</p>
                </div>
              </section>
            )}

             {/* Responsibilities */}
             {project.responsibilities && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">My Responsibilities</h2>
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                  <ul className="space-y-4">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Challenges Overcome</h2>
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Info Card */}
            <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-white">Project Info</h2>
              
              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-400 mb-3 font-medium">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              {project.timeline && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4" />
                    Timeline
                  </h3>
                  <p className="text-gray-300">{project.timeline}</p>
                </div>
              )}

              {/* Role */}
              {project.role && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2 font-medium">
                    <User className="w-4 h-4" />
                    Role
                  </h3>
                  <p className="text-gray-300">{project.role}</p>
                </div>
              )}

              {/* Team */}
              {project.team && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2 font-medium">
                    <Flag className="w-4 h-4" />
                    Team
                  </h3>
                  <p className="text-gray-300">{project.team}</p>
                </div>
              )}

              {/* Links */}
              {(project.demoLink || project.codeLink) && (
                <div className="flex flex-col gap-3 mt-8">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 font-medium"
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
                      className="bg-[#2a2f3b] hover:bg-[#3a3f4b] text-white px-4 py-3 rounded-lg text-center transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500 flex items-center justify-center gap-2 font-medium"
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