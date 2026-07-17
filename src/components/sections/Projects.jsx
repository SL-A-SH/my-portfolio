// components/sections/Projects.jsx
import { useState, useCallback, memo, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../constants/projects';
import FeatureGrid from '../FeatureGrid';

const fadeUpReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: Math.min(i, 5) * 0.06 },
  }),
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

// Semantic color system — each category has a distinct, purposeful color
const CATEGORY_COLORS = {
  'Mobile Apps':       { label: 'text-indigo-400',  badge: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30',    filter: 'bg-indigo-600 text-white' },
  'Game Development':  { label: 'text-sky-400',     badge: 'bg-sky-600/20 text-sky-400 border-sky-500/30',       filter: 'bg-sky-600 text-white'  },
  'Professional Work': { label: 'text-emerald-400', badge: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30', filter: 'bg-emerald-600 text-white' },
};
const DEFAULT_CATEGORY_COLORS = { label: 'text-indigo-400', badge: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30', filter: 'bg-indigo-600 text-white' };

const getCategoryColors = (category) => CATEGORY_COLORS[category] ?? DEFAULT_CATEGORY_COLORS;

const getYouTubeId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// ─── Media renderer ──────────────────────────────────────────────────────────

const ProjectMedia = ({ project, isFeatured = false }) => {
  const { media } = project;

  if (project.category === 'Professional Work') {
    return <FeatureGrid type={project.mediaType} />;
  }

  if (media.type === 'screenshots') {
    const shots = project.screenshots?.slice(0, 3) || [media.src];

    if (isFeatured) {
      return (
        <div className="absolute inset-0 flex gap-1 p-2 bg-brand-base">
          {shots.map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded">
              <img
                src={src}
                alt={`${media.alt} ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchpriority={i === 0 ? 'high' : 'auto'}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="relative w-full pt-[56.25%] bg-brand-base rounded-t-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex gap-1 p-2">
          {shots.map((src, i) => (
            <div key={i} className="flex-1 rounded overflow-hidden">
              <img
                src={src}
                alt={`${media.alt} ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (media.type === 'youtube') {
    const videoId = getYouTubeId(media.src);
    if (!videoId) return null;

    if (isFeatured) {
      return (
        <div className="absolute inset-0 group overflow-hidden bg-black">
          <img
            className="w-full h-full object-cover"
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`${project.title} preview`}
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors duration-300">
            <div className="bg-red-600 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full pt-[56.25%] group rounded-t-xl overflow-hidden bg-black">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`${project.title} preview`}
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
          <div className="bg-red-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
          className="w-full h-full object-cover rounded-t-xl"
          autoPlay
          loop
          muted
          playsInline
          poster={media.thumbnail}
          controls={false}
        >
          <source src={media.src} type="video/mp4" />
          <img src={media.thumbnail} alt="Project preview" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    <img src={media.src} alt={media.alt} className="w-full h-48 object-cover rounded-t-xl" />
  );
};

// ─── Store / code link badges ─────────────────────────────────────────────────

const CardBadges = ({ project }) => (
  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
    {project.playStoreLink && (
      <a
        href={project.playStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-green-600/90 hover:bg-green-500 text-white px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-200 shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        Play Store
      </a>
    )}
    {project.appStoreLink && (
      <a
        href={project.appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-600/90 hover:bg-blue-500 text-white px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-200 shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        App Store
      </a>
    )}
    {project.demoLink && (
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-brand-accent/90 hover:bg-brand-accentHover text-brand-deep px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-200 shadow-sm"
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
        className="inline-flex items-center bg-gray-700/90 hover:bg-gray-600 text-white px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-200 shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Code
      </a>
    )}
  </div>
);

// ─── Featured card (Leaf & Spine) ─────────────────────────────────────────────

const FeaturedCard = memo(forwardRef(({ project, onClick }, ref) => {
  const colors = getCategoryColors(project.category);
  return (
  <motion.div
    ref={ref}
    layout
    initial="hidden"
    whileInView="visible"
    exit="exit"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeUpReveal}
    role="button"
    tabIndex={0}
    onClick={() => onClick(project.id)}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(project.id); } }}
    aria-label={`View details for ${project.title}`}
    className="group grid grid-cols-1 lg:grid-cols-5 bg-gradient-to-br from-brand-card to-brand-surface rounded-2xl overflow-hidden border border-gray-700/50 hover:border-brand-accent/30 hover:-translate-y-0.5 cursor-pointer transition-all duration-200 mb-5 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-mid"
  >
    {/* Content — left 2 cols */}
    <div className="lg:col-span-2 p-5 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <span className={`text-xs font-semibold tracking-widest uppercase ${colors.label}`}>{project.category}</span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full border ${colors.badge}`}>{project.role}</span>
        </div>

        <h3 className="font-display text-3xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className="bg-brand-surface text-gray-400 px-3 py-1 rounded-full text-xs border border-gray-600/50">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="bg-brand-surface text-gray-500 px-3 py-1 rounded-full text-xs border border-gray-600/50">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700/40">
        <p className="text-xs text-gray-500 mb-3">{project.timeline}</p>
        <div className="flex flex-wrap items-center gap-2">
          {project.playStoreLink && (
            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center bg-green-600/90 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              Play Store
            </a>
          )}
          {project.appStoreLink && (
            <a
              href={project.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center bg-brand-hover hover:bg-gray-600 border border-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              App Store
            </a>
          )}
          <span className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-brand-accent transition-colors duration-300 ml-auto">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Media — right 3 cols */}
    <div className="lg:col-span-3 relative min-h-[260px] lg:min-h-0 overflow-hidden bg-brand-base">
      <ProjectMedia project={project} isFeatured />
    </div>
  </motion.div>
  );
}));

// ─── Regular card ─────────────────────────────────────────────────────────────

const ProjectCard = memo(forwardRef(({ project, onClick, index }, ref) => {
  const colors = getCategoryColors(project.category);
  return (
  <motion.div
    ref={ref}
    layout
    custom={index}
    initial="hidden"
    whileInView="visible"
    exit="exit"
    viewport={{ once: true, margin: '-80px' }}
    variants={cardVariants}
    role="button"
    tabIndex={0}
    onClick={() => onClick(project.id)}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(project.id); } }}
    aria-label={`View details for ${project.title}`}
    className="group bg-gradient-to-br from-brand-card to-brand-surface rounded-xl overflow-hidden border border-gray-700/50 hover:border-brand-accent/30 hover:-translate-y-0.5 cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-mid flex flex-col"
  >
    <div className="relative flex-shrink-0">
      <ProjectMedia project={project} />
      <CardBadges project={project} />
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs font-medium tracking-wide ${colors.label}`}>{project.category}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border ml-2 flex-shrink-0 ${colors.badge}`}>
          {project.role}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300 leading-snug">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-3 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span key={i} className="bg-brand-surface text-gray-400 px-2.5 py-0.5 rounded-full text-xs border border-gray-600/50">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="bg-brand-surface text-gray-500 px-2.5 py-0.5 rounded-full text-xs border border-gray-600/50">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-700/30">
        <span>{project.timeline}</span>
        <span className="flex items-center gap-1 group-hover:text-brand-accent transition-colors duration-300">
          View Details
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </motion.div>
  );
}));

// ─── Main section ─────────────────────────────────────────────────────────────

const Projects = () => {
  const navigate = useNavigate();
  const handleProjectClick = useCallback((projectId) => navigate(`/project/${projectId}`), [navigate]);

  const categories = [...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Leaf & Spine gets the featured hero treatment when it leads the list
  const showFeatured = filteredProjects[0]?.id === 'leaf-and-spine' && filteredProjects.length > 1;
  const featuredProject = showFeatured ? filteredProjects[0] : null;
  const gridProjects = showFeatured ? filteredProjects.slice(1) : filteredProjects;

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-brand-mid to-brand-deep">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — left aligned */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUpReveal}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Featured Projects</h2>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-0.5 bg-brand-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
          </div>
        </motion.div>

        {/* Category filter — left aligned */}
        <div className="flex flex-wrap gap-2 mb-10">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === 'All'
                ? 'bg-brand-accent text-brand-deep'
                : 'bg-brand-surface text-gray-400 hover:bg-brand-hover hover:text-white border border-gray-700/60'
            }`}
          >
            All
          </motion.button>
          {categories.map((category) => {
            const colors = getCategoryColors(category);
            return (
              <motion.button
                key={category}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? colors.filter
                    : 'bg-brand-surface text-gray-400 hover:bg-brand-hover hover:text-white border border-gray-700/60'
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>

        {/* Featured card */}
        <AnimatePresence mode="popLayout">
          {featuredProject && (
            <FeaturedCard key={featuredProject.id} project={featuredProject} onClick={handleProjectClick} />
          )}
        </AnimatePresence>

        {/* Supporting grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {gridProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} onClick={handleProjectClick} index={index} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
