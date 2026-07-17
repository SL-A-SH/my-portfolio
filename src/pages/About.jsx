import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';

const fadeUpReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
  variants: fadeUpReveal,
};

const cardReveal = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.4, ease: 'easeOut', delay: Math.min(i, 5) * 0.06 },
});

const About = () => {
  usePageMeta(
    'About — Aqeeb Rizwan',
    'Mobile Software Engineer with 4+ years of experience across fintech, ed-tech and travel-tech — real-time communication, offline-first storage, and AI-native chat.'
  );

  return (
    <main id="main-content" className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-brand-mid to-brand-deep">
      <div className="max-w-6xl mx-auto py-12">
        <motion.div className="mb-14" {...revealProps}>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3 text-white">
            About Me
          </h1>
          <div className="flex items-center gap-1.5 mb-5">
            <div className="w-6 h-0.5 bg-brand-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mb-5">
            Mobile Software Engineer specialising in React Native —
            building cross-platform apps that ship to the App Store and Google Play.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}Aqeeb_Rizwan_Resume.pdf`}
            download
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            <motion.section {...revealProps}>
              <h2 className="font-display text-3xl font-bold mb-6 text-white">Background</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Mobile Software Engineer with 4+ years of experience building cross-platform apps with React Native
                across fintech, ed-tech, and travel-tech. I specialise in real-time communication (WebSockets, Redis),
                offline-first storage (SQLite), and AI-native chat experiences with streaming responses.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                In 2025, I shipped Leaf &amp; Spine — an independent reading app with 3D bookshelves and immersive
                environments — to both Google Play and the Apple App Store. I'm drawn to apps that are productive or
                creative: tools that help people read, learn, focus, or make things. My background spans mobile, backend,
                and cloud infrastructure, so I'm comfortable taking a feature from design all the way through to store
                deployment.
              </p>
            </motion.section>

            <motion.section {...revealProps}>
              <h2 className="font-display text-3xl font-bold mb-6 text-white">Skills & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-display text-xl font-semibold mb-4 text-brand-accent">Mobile</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Expo', 'TypeScript', 'Android', 'iOS'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-display text-xl font-semibold mb-4 text-purple-400">State Management</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Redux', 'Zustand', 'Context API'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-display text-xl font-semibold mb-4 text-green-400">Fullstack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'FastAPI', 'Firebase', 'Google Cloud Functions', 'REST APIs', 'WebSockets'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-display text-xl font-semibold mb-4 text-teal-400">Data & Storage</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SQLite', 'NoSQL', 'SQL', 'Redis'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-display text-xl font-semibold mb-4 text-sky-400">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Google Cloud Platform', 'AWS', 'CI/CD', 'Expo EAS', 'Git', 'GitHub Actions'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section {...revealProps}>
              <h2 className="font-display text-3xl font-bold mb-6 text-white">Work Experience</h2>
              <div className="space-y-6">
                <motion.div {...cardReveal(0)} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-brand-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">Feb 2025 – May 2025</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">NxVoy Trips – London, UK <span className="text-gray-500 font-normal">(Remote)</span></p>
                  <p className="text-gray-400 text-sm mb-3">Built an AI chat feature in React Native with real-time streaming of AI responses into the user's chat interface, delivering a responsive, AI-native conversational experience. Implemented WebSocket communication for real-time data validation and backend APIs with FastAPI integrating Apple and Google authentication.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'AI Chat Streaming', 'FastAPI', 'WebSockets'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...cardReveal(1)} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-brand-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2019 – 2021</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Banca Sella – Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Built a cross-platform banking app for Android and iOS, working within an international development team. Built an internal automation tool to streamline mobile build generation and deployment workflows.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'iOS', 'Android', 'Python'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...cardReveal(2)} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-brand-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2017 – 2019</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Ahaguru – Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Built an educational communication suite from scratch — real-time chat, video conferencing, and student management.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'React Native', 'NodeJS', 'WebRTC', 'Redis', 'AWS'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...cardReveal(3)} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-brand-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">Mar 2017 – Jun 2017</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Bookingjini – Bhubaneswar, India</p>
                  <p className="text-gray-400 text-sm mb-3">Developed a single-page web application simplifying hotel booking workflows and UI interactions.</p>
                  <div className="flex flex-wrap gap-2">
                    {['AngularJS', 'Single Page Application', 'REST APIs'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section {...revealProps}>
              <h2 className="font-display text-3xl font-bold mb-6 text-white">Education</h2>
              <div className="space-y-6">
                <motion.div {...cardReveal(0)} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">MSc Computer Games Engineering</h3>
                      <p className="text-gray-300 font-medium mt-1">Newcastle University</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2024 – 2025</span>
                  </div>
                </motion.div>

                <motion.div {...cardReveal(1)} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">B.Tech Computer Science</h3>
                      <p className="text-gray-300 font-medium mt-1">Gandhi Institute For Education And Technology</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2012 – 2016</span>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-1">
            <motion.div {...revealProps} className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-6 text-white">At a Glance</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Location</h3>
                  <p className="text-gray-300">Bhubaneswar, India</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Languages</h3>
                  <p className="text-gray-300">English (Fluent)</p>
                  <p className="text-gray-300">Hindi (Native)</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Interests</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>Productive & Creative Apps</li>
                    <li>Mobile UX & Performance</li>
                    <li>Cloud Architecture</li>
                    <li>In-App Monetisation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Expo EAS', 'GitHub Actions', 'Cursor', 'Claude Code'].map(tool => (
                      <span key={tool} className="bg-brand-surface text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
