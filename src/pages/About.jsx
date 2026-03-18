const About = () => {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-[#1e2635] to-[#0f1419]">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Mobile Software Engineer specialising in React Native —
            building productive and creative apps that ship to both the App Store and Google Play.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Background</h2>
              <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a Mobile Software Engineer with 5+ years of experience building cross-platform apps with React Native.
                  I recently shipped Leaf & Spine — an independent reading app with 3D bookshelves and immersive environments
                  to both Google Play and the Apple App Store.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm drawn to apps that are productive or creative: tools that help people read, learn, focus, or make things.
                  My background spans mobile, backend, and cloud infrastructure, so I'm comfortable taking a feature from
                  design all the way through to store deployment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Skills & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Mobile Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Expo & EAS', 'TypeScript', 'iOS', 'Android'].map(skill => (
                      <span key={skill} className="bg-[#2a2f3b] text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Backend & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Firebase', 'Node.js', 'Google Cloud', 'REST APIs', 'WebSockets', 'AWS'].map(skill => (
                      <span key={skill} className="bg-[#2a2f3b] text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600/50">
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
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer (Remote)</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">Feb 2025 – May 2025</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">NxVoy Trips – London, UK</p>
                  <p className="text-gray-400 text-sm mb-3">Built mobile features and backend APIs for a travel app, implementing real-time WebSocket communication and cross-platform authentication with Apple and Google sign-in.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'FastAPI', 'WebSockets'].map(tag => (
                      <span key={tag} className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Mobile App Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2021 – 2022</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Star Projects – New Delhi, India</p>
                  <p className="text-gray-400 text-sm mb-3">Mobile test-taking platform development with real-time results and attendance tracking.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Android', 'React Native', 'MySQL'].map(tag => (
                      <span key={tag} className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2019 – 2021</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Banca Sella – Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Cross-platform banking application development for Android and iOS.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'iOS', 'Android', 'Python'].map(tag => (
                      <span key={tag} className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2017 – 2019</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Ahaguru – Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Educational communication suite with real-time chat, video conferencing, and student management.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'React Native', 'NodeJS', 'WebRTC', 'Redis', 'AWS'].map(tag => (
                      <span key={tag} className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">MSc Computer Games Engineering</h3>
                      <p className="text-gray-300 font-medium mt-1">Newcastle University</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2024 – 2025</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-start">
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
            <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-white">Quick Info</h2>

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
                      <span key={tool} className="bg-[#2a2f3b] text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">{tool}</span>
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
