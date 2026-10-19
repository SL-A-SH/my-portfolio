import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { projects } from '../../constants/projects';
import { EASE_OUT } from '../../constants/motion';

const REEL_IDS = ['2', '3', '5'];
const REEL_INTERVAL = 6500;

const reel = REEL_IDS.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

const shortTitle = (title) => title.split(' - ')[0];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const Hero = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || reel.length < 2) return undefined;
    const timer = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % reel.length);
    }, REEL_INTERVAL);
    return () => clearInterval(timer);
  }, [reduceMotion, active]);

  const current = reel[active];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-base text-white flex flex-col">
      {/* Footage — crossfading stills from the games themselves */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE_OUT }}
          >
            <img
              src={current.media.poster}
              alt=""
              className="hero-push w-full h-full object-cover"
              fetchpriority={active === 0 ? 'high' : 'auto'}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/70 to-brand-base/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-base/90 via-brand-base/40 to-transparent" />
        {/* Top scrim — hides the games' own HUD bars under the nav */}
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-brand-base via-brand-base/80 to-transparent" />
        <div className="absolute inset-0 hud-scanlines" />
      </div>

      {/* HUD frame */}
      <div className="hud-corners absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-20 bottom-6 pointer-events-none hidden md:block" aria-hidden="true" />

      <div className="relative flex-1 flex flex-col justify-end w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-end">
          <motion.div className="lg:col-span-8" variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="hud-label text-gray-300 mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              Gameplay &amp; graphics programmer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold tracking-tight text-[2.75rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem] mb-7"
            >
              I build the systems
              <br />
              <span className="text-brand-accent">games</span> run on.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
              I'm Aqeeb Rizwan — combat, AI and multiplayer in Unreal Engine and custom C++ engines,
              GPU-driven rendering in DirectX 11 and OpenGL. MSc Computer Games Engineering,
              Newcastle University.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-base px-7 py-3.5 rounded-md font-medium transition-colors duration-300"
              >
                Select a level
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-medium border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors duration-300"
              >
                Get in touch
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}Aqeeb_Rizwan_Resume.pdf`}
                download
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors sm:ml-2"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Now showing — which game is on screen, and a way in */}
          <motion.div
            className="lg:col-span-4 mt-12 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.5 }}
          >
            <div className="lg:ml-auto lg:max-w-xs">
              <p className="hud-label text-gray-500 mb-2">
                Now showing · {String(active + 1).padStart(2, '0')}/{String(reel.length).padStart(2, '0')}
              </p>
              <Link
                to={`/project/${current.id}`}
                className="group block font-display text-xl font-bold text-white hover:text-brand-accent transition-colors duration-300"
              >
                {shortTitle(current.title)}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">{current.tags.slice(0, 2).join(' · ')}</p>

              <div className="flex gap-1.5 mt-5" role="tablist" aria-label="Featured game">
                {reel.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={shortTitle(p.title)}
                    onClick={() => setActive(i)}
                    className="relative h-6 flex-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
                  >
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/20 group-hover:bg-white/40 transition-colors overflow-hidden">
                      {i === active && (
                        <motion.span
                          key={`${p.id}-${active}`}
                          className="absolute inset-y-0 left-0 bg-brand-accent"
                          initial={{ width: reduceMotion ? '100%' : '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: reduceMotion ? 0 : REEL_INTERVAL / 1000, ease: 'linear' }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
