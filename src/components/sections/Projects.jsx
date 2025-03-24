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
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <iframe className="absolute top-0 left-0 w-full h-full pointer-events-none"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&amp;controls=0&disablekb=1&showinfo=0&modestbranding=1&rel=0`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="autoplay; encrypted-media; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
        {/* Overlay div to prevent interactions */}
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className="relative w-full h-48">
        <video
          className="w-full h-full object-cover"
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
            className="w-full h-full object-cover"
          />
        </video>
      </div>
    );
  }

  return (
    <img 
      src={media.src} 
      alt={media.alt} 
      className="w-full h-48 object-cover"
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
    <section id="projects" className="py-20 bg-[#1e2635]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-[#2a2f3b] text-gray-300 hover:bg-[#3a3f4b]'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#2a2f3b] text-gray-300 hover:bg-[#3a3f4b]'
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
              className="bg-[#1a1f2b] rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105 cursor-pointer group"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative">
                <ProjectMedia project={project} />
                <div className="absolute top-0 right-0 p-2 space-x-2">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-800 hover:bg-blue-200 text-white px-3 py-1 rounded text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-800 hover:bg-blue-200 text-white px-3 py-1 rounded text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-blue-400">{project.category}</span>
                  <span className="text-sm bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#2a2f3b] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
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