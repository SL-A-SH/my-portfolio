import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Bookshelf from './Bookshelf';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const mainStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const shelfReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', delay: 0.3 } },
};

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center w-full bg-gradient-to-br from-brand-deep via-brand-mid to-brand-surface text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

          {/* Main content — left 8 cols */}
          <motion.div
            className="lg:col-span-8"
            variants={mainStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-8">
              Available for opportunities
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 text-white leading-[1.05]">
              Aqeeb<br />Rizwan
            </motion.h1>

            <motion.p variants={fadeUp} className="text-2xl sm:text-3xl text-gray-400 mb-8 font-light">
              Mobile Software Engineer
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed">
              4+ years shipping cross-platform apps with React Native and Expo — real-time
              features, AI-native chat, and offline-first storage. Built and deployed
              Leaf &amp; Spine, a reading app with 3D bookshelves, independently to both the
              App Store and Google Play.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.98 }}
                className="group bg-brand-accent hover:bg-brand-accentHover text-brand-deep px-8 py-3.5 rounded-lg font-medium transition-colors duration-300 flex items-center shadow-lg shadow-brand-accent/20"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="group bg-transparent hover:bg-brand-surface border border-gray-600 hover:border-gray-500 px-8 py-3.5 rounded-lg font-medium transition-colors duration-300 flex items-center"
                >
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={`${import.meta.env.BASE_URL}Aqeeb_Rizwan_Resume.pdf`}
              download
              className="group inline-flex items-center gap-1.5 mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </motion.a>

            {/* Credentials — compact row, desktop only */}
            <motion.div
              variants={fadeUp}
              className="hidden lg:flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-gray-700/40"
            >
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Platforms</p>
                <p className="text-white font-medium text-sm">iOS &amp; Android</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Apps Shipped</p>
                <p className="text-white font-medium text-sm">Google Play + App Store</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Education</p>
                <p className="text-white font-medium text-sm">MSc Games Engineering</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Primary Stack</p>
                <p className="text-white font-medium text-sm">React Native · TypeScript · SQLite</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bookshelf — right 4 cols, desktop only */}
          <motion.div
            className="lg:col-span-4"
            variants={shelfReveal}
            initial="hidden"
            animate="visible"
          >
            <Bookshelf />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
