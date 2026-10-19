// components/sections/Projects.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../constants/projects';
import { EASE_OUT } from '../../constants/motion';
import InstancedField from '../InstancedField';

const fadeUpReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

const cardReveal = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.4, ease: EASE_OUT, delay: (i % 2) * 0.08 },
});

// Level order and grid weight — alternating 7/5 then 5/7 then 6/6 keeps the grid from reading as a template
const LEVELS = [
  { id: '2', span: 'lg:col-span-7' },
  { id: '3', span: 'lg:col-span-5' },
  { id: '1', span: 'lg:col-span-5' },
  { id: '6', span: 'lg:col-span-7' },
  { id: '5', span: 'lg:col-span-6' },
  { id: '4', span: 'lg:col-span-6' },
];

const levels = LEVELS.map(({ id, span }) => ({ project: projects.find((p) => p.id === id), span }))
  .filter(({ project }) => project);

const leafAndSpine = projects.find((p) => p.id === 'leaf-and-spine');
const shortTitle = (title) => title.split(' - ')[0];
const yearOf = (timeline = '') => timeline.match(/\d{4}/g)?.pop() ?? '';

const professional = projects
  .filter((p) => p.category === 'Professional Work')
  .sort((a, b) => yearOf(b.timeline) - yearOf(a.timeline));

const SectionHeader = ({ index, label, title, aside }) => (
  <motion.div
    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeUpReveal}
  >
    <div>
      <p className="hud-label text-brand-accent mb-3">{index} — {label}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h2>
    </div>
    {aside && <p className="hud-label text-gray-500">{aside}</p>}
  </motion.div>
);

// ─── Level card ───────────────────────────────────────────────────────────────

const LevelCard = ({ project, span, number, index }) => {
  const poster = project.media?.poster;

  return (
    <motion.div {...cardReveal(index)} className={`col-span-1 ${span}`}>
      <Link
        to={`/project/${project.id}`}
        className="level-card group relative block h-full aspect-[16/10] lg:aspect-auto lg:h-[420px] overflow-hidden rounded-lg bg-brand-deep border border-white/10 hover:border-white/20 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-base"
        aria-label={`${shortTitle(project.title)} — view project`}
      >
        {/* Media */}
        <div className="absolute inset-0" aria-hidden="true">
          {poster ? (
            <img
              src={poster}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_#1e2635_0%,_#0a0d14_70%)]">
              <InstancedField />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/40 to-brand-base/10" />
          {/* Top scrim — keeps the in-game HUDs from fighting the level readout */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-base/90 to-transparent" />
        </div>

        <span className="level-brackets hud-corners absolute pointer-events-none" aria-hidden="true" />

        {/* Top readout */}
        <div className="absolute top-0 inset-x-0 flex items-start justify-between p-5">
          <span className="hud-label text-white/80">Lvl {String(number).padStart(2, '0')}</span>
          <span className="hud-label text-white/60 text-right">{project.tags.slice(0, 2).join(' · ')}</span>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-2xl sm:text-[1.75rem] font-bold tracking-tight text-white leading-tight">
              {shortTitle(project.title)}
            </h3>
            <p className="text-sm text-gray-300 mt-1.5">
              {project.role}{yearOf(project.timeline) && <span className="text-gray-500"> · {yearOf(project.timeline)}</span>}
            </p>
          </div>
          <span className="hud-label text-brand-accent flex-shrink-0 opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300 ease-out">
            ▶ Enter
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

// ─── Beyond games ─────────────────────────────────────────────────────────────

const ShippedApp = ({ project }) => (
  <motion.div {...cardReveal(0)}>
    <Link
      to={`/project/${project.id}`}
      className="group grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center p-5 sm:p-6 rounded-lg bg-brand-deep border border-white/10 hover:border-white/20 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    >
      <div className="md:col-span-2 order-2 md:order-1">
        <p className="hud-label text-gray-500 mb-3">Live on App Store &amp; Google Play</p>
        <h3 className="font-display text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-5">{project.description}</p>
        <p className="text-sm text-gray-500">{project.role} · {project.tags.slice(0, 3).join(' · ')}</p>
      </div>
      <div className="md:col-span-3 order-1 md:order-2 flex gap-2 h-56 sm:h-72" aria-hidden="true">
        {project.screenshots?.slice(0, 4).map((src, i) => (
          <div key={i} className={`flex-1 overflow-hidden rounded-md ${i === 3 ? 'hidden sm:block' : ''}`}>
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </Link>
  </motion.div>
);

const WorkRow = ({ project }) => {
  const [role, company] = project.role.split(' - ');
  return (
    <li>
      <Link
        to={`/project/${project.id}`}
        className="group grid grid-cols-12 gap-3 items-baseline py-5 border-b border-white/10 hover:border-white/25 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
      >
        <span className="col-span-12 sm:col-span-3 hud-label text-gray-500">{project.timeline}</span>
        <span className="col-span-10 sm:col-span-6">
          <span className="block font-display text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
            {project.title}
          </span>
          <span className="block text-sm text-gray-500 mt-0.5">{project.tags.slice(0, 3).join(' · ')}</span>
        </span>
        <span className="col-span-2 sm:col-span-3 text-right text-sm text-gray-400">
          <span className="hidden sm:inline">{company ?? role}</span>
          <span className="inline-block ml-2 text-gray-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-200" aria-hidden="true">→</span>
        </span>
      </Link>
    </li>
  );
};

// ─── Main section ─────────────────────────────────────────────────────────────

const Projects = () => (
  <>
    <section id="projects" className="py-24 sm:py-32 bg-brand-base scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          label="Select a level"
          title="Games & engines"
          aside={`${String(levels.length).padStart(2, '0')} builds · Unreal · C++ · DX11 · OpenGL`}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {levels.map(({ project, span }, i) => (
            <LevelCard key={project.id} project={project} span={span} number={i + 1} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="pb-24 sm:pb-32 bg-brand-base">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader index="02" label="Also shipped" title="Beyond games" />
        {leafAndSpine && <ShippedApp project={leafAndSpine} />}
        <motion.ul
          className="mt-10 border-t border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUpReveal}
        >
          {professional.map((project) => (
            <WorkRow key={project.id} project={project} />
          ))}
        </motion.ul>
      </div>
    </section>
  </>
);

export default Projects;
