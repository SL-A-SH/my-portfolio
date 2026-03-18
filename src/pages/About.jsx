import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About — Aqeeb Rizwan';
  }, []);

  return (
    <main id="main-content" className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-brand-mid to-brand-deep">
      <div className="max-w-6xl mx-auto py-12">
        <div className="mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-white">
            About Me
          </h1>
          <div className="w-10 h-0.5 bg-blue-500 mb-5"></div>
          <p className="text-lg text-gray-400 max-w-2xl">
            Mobile Software Engineer specialising in React Native —
            building cross-platform apps that ship to the App Store and Google Play.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Background</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Mobile Software Engineer with 5+ years of experience building cross-platform apps with React Native.
                In 2025, I shipped Leaf & Spine — an independent reading app with 3D bookshelves and immersive environments —
                to both Google Play and the Apple App Store.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm drawn to apps that are productive or creative: tools that help people read, learn, focus, or make things.
                My background spans mobile, backend, and cloud infrastructure, so I'm comfortable taking a feature from
                design all the way through to store deployment.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Skills & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Mobile Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Expo & EAS', 'TypeScript', 'iOS', 'Android'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Backend & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Firebase', 'Node.js', 'Google Cloud', 'REST APIs', 'WebSockets', 'AWS'].map(skill => (
                      <span key={skill} className="bg-brand-surface text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">Feb 2025 – May 2025</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">NxVoy Trips – London, UK <span className="text-gray-500 font-normal">(Remote)</span></p>
                  <p className="text-gray-400 text-sm mb-3">Built mobile features and backend APIs for a travel app — real-time WebSocket communication and cross-platform sign-in with Apple and Google.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'FastAPI', 'WebSockets'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="text-xl font-semibold text-white">Mobile App Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2021 – 2022</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Star Projects – New Delhi, India</p>
                  <p className="text-gray-400 text-sm mb-3">Developed a mobile test-taking app with real-time results and automated attendance tracking.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Android', 'React Native', 'MySQL'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2019 – 2021</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Banca Sella – Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Built a cross-platform banking app for Android and iOS, working within an international development team.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'iOS', 'Android', 'Python'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0 mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2017 – 2019</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Ahaguru – Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Built an educational communication suite from scratch — real-time chat, video conferencing, and student management.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'React Native', 'NodeJS', 'WebRTC', 'Redis', 'AWS'].map(tag => (
                      <span key={tag} className="bg-brand-surface text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0">
                    <div>
                      <h3 className="text-xl font-semibold text-white">MSc Computer Games Engineering</h3>
                      <p className="text-gray-300 font-medium mt-1">Newcastle University</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2024 – 2025</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0">
                    <div>
                      <h3 className="text-xl font-semibold text-white">B.Tech Computer Science</h3>
                      <p className="text-gray-300 font-medium mt-1">Gandhi Institute For Education And Technology</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2012 – 2016</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-brand-card to-brand-surface p-6 rounded-xl border border-gray-700/50 sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-white">At a Glance</h2>

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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
