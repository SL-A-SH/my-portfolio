import { useParams } from 'react-router-dom';
import { useState } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const CATEGORY_COLORS = {
  'Mobile Apps':       { label: 'text-indigo-400',  badge: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30' },
  'Game Development':  { label: 'text-sky-400',     badge: 'bg-sky-600/20 text-sky-400 border-sky-500/30'   },
  'Professional Work': { label: 'text-emerald-400', badge: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30' },
};
const getCategoryColors = (cat) => CATEGORY_COLORS[cat] ?? { label: 'text-indigo-400', badge: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30' };
import { projects } from '../constants/projects';
import { ExternalLink, AlertTriangle, ArrowLeft } from 'lucide-react';
import FeatureGrid from '../components/FeatureGrid';
import { Link } from 'react-router-dom';

const getYouTubeId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url?.match(regex);
  return match ? match[1] : null;
};

const YouTubeFacade = ({ src, title }) => {
  const [active, setActive] = useState(false);
  const videoId = getYouTubeId(src);
  if (!videoId) return null;

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        className="absolute top-0 left-0 w-full h-full"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="absolute top-0 left-0 w-full h-full group"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`${title} preview`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
        <div className="bg-red-600 rounded-full p-5 shadow-xl group-hover:scale-110 transition-transform">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </button>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  usePageMeta(
    project ? `${project.title} — Aqeeb Rizwan` : 'Project Not Found — Aqeeb Rizwan',
    project ? project.description : undefined
  );

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-brand-mid to-brand-deep">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accentHover transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main id="main-content" className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-brand-mid to-brand-deep">
      <div className="max-w-6xl mx-auto py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          {(() => { const colors = getCategoryColors(project.category); return (
            <div className="flex items-center gap-2.5 mb-4">
              <span className={`text-xs font-semibold tracking-widest uppercase ${colors.label}`}>
                {project.category}
              </span>
              {project.role && (
                <span className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${colors.badge}`}>
                  {project.role}
                </span>
              )}
            </div>
          ); })()}
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white">
            {project.title}
          </h1>
          <div className="flex items-center gap-1.5 mb-5">
            <div className="w-6 h-0.5 bg-brand-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            {project.description}
          </p>
        </div>
        
        {/* Media Section */}
        <div className="mb-16">
          {project.media?.type === 'youtube' ?
          (
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-gradient-to-br from-brand-card to-brand-surface border border-gray-700/50">
              <YouTubeFacade src={project.media.src} title={project.title} />
            </div>
          )
          : project.media?.type === 'screenshots' ?
          (
            <div className="bg-gradient-to-br from-brand-card to-brand-surface rounded-xl border border-gray-700/50 p-6">
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {project.screenshots?.map((src, index) => (
                  <div key={index} className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-700/50" style={{height: '480px'}}>
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
          : project.category === 'Professional Work' ?
          (
            <div className="bg-gradient-to-br from-brand-card to-brand-surface rounded-xl border border-gray-700/50 p-6">
              <FeatureGrid type={project.mediaType} />
            </div>
          )
          :
          (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-brand-card to-brand-surface border border-gray-700/50">
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
          <div className="lg:col-span-3 space-y-12 order-2 lg:order-1">
            {/* Description */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-white">About this project</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.longDescription}</p>
            </section>

            {/* Features */}
            {project.features && (
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-white">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technical Details */}
            {project.technicalDetails && (
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-white">Technical Details</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{project.technicalDetails}</p>
              </section>
            )}

            {/* Responsibilities */}
            {project.responsibilities && (
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-white">My Responsibilities</h2>
                <ul className="space-y-4">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="font-display text-3xl font-bold mb-6 text-white">Challenges Overcome</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 order-1 lg:order-2">
            {/* Project Info Card */}
            <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 sticky top-24">
              <h2 className="font-display text-xl font-bold mb-6 text-white">Project Info</h2>
              
              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-400 mb-3 font-medium">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              {project.timeline && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Timeline</h3>
                  <p className="text-gray-300">{project.timeline}</p>
                </div>
              )}

              {/* Role */}
              {project.role && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Role</h3>
                  <p className="text-gray-300">{project.role}</p>
                </div>
              )}

              {/* Team */}
              {project.team && (
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Team</h3>
                  <p className="text-gray-300">{project.team}</p>
                </div>
              )}

              {/* Links */}
              {(project.demoLink || project.codeLink || project.playStoreLink || project.appStoreLink) && (
                <div className="flex flex-col gap-3 mt-8">
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-lg text-center transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Google Play
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg text-center transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      App Store
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-accent hover:bg-brand-accentHover text-brand-deep px-4 py-3 rounded-lg text-center transition-colors flex items-center justify-center gap-2 font-medium"
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
                      className="bg-brand-surface hover:bg-brand-hover text-white px-4 py-3 rounded-lg text-center transition-colors border border-gray-600 hover:border-gray-500 flex items-center justify-center gap-2 font-medium"
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