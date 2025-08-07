// components/sections/Projects.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../constants/projects';
import FeatureGrid from '../FeatureGrid';

const getYouTubeId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ProjectMedia = ({ project }) => {
  const { media } = project;
  if (project.category === 'Professional Work') {
    return <FeatureGrid type={project.mediaType} />;
  }

  if (media.type === 'youtube') {
    const videoId = getYouTubeId(media.src);
    if (!videoId) return null;

    return (
      <div className="relative w-full pt-[56.25%] group"> {/* 16:9 Aspect Ratio */}
        <iframe className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-t-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&amp;controls=0&disablekb=1&showinfo=0&modestbranding=1&rel=0`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="autoplay; encrypted-media; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
        {/* Overlay div to prevent interactions */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-lg"></div>
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/50 rounded-full p-3">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className="relative w-full h-48 group">
        <video
          className="w-full h-full object-cover rounded-t-lg"
          autoPlay
          loop
          muted
          playsInline
          poster={media.thumbnail}
          controls={false}
        >
          <source src={media.src} type="video/mp4" />
          {/* Fallback to thumbnail image if video fails to load */}
          <img 
            src={media.thumbnail} 
            alt="Project preview" 
            className="w-full h-full object-cover rounded-t-lg"
          />
        </video>
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/50 rounded-full p-3">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={media.src} 
      alt={media.alt} 
      className="w-full h-48 object-cover rounded-t-lg"
    />
  );
};

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const categories = [...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1e2635] to-[#0f1419]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my game development and software engineering work, demonstrating technical skills and creative problem-solving.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                : 'bg-[#2a2f3b] text-gray-300 hover:bg-[#3a3f4b] hover:text-white border border-gray-600 hover:border-gray-500'
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-[#2a2f3b] text-gray-300 hover:bg-[#3a3f4b] hover:text-white border border-gray-600 hover:border-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer border border-gray-700/50 hover:border-blue-500/30"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative">
                <ProjectMedia project={project} />
                <div className="absolute top-4 right-4 space-y-2">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600/90 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-700/90 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                  <span className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full font-medium border border-blue-500/30">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-[#2a2f3b] text-gray-400 px-3 py-1 rounded-full text-sm border border-gray-600/50">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{project.timeline}</span>
                  <div className="flex items-center group-hover:text-blue-400 transition-colors">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;