const About = () => {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-[#1e2635] to-[#0f1419]">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Game Developer and Computer Games Engineering student passionate about creating immersive gaming experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Background</h2>
              <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-8 rounded-xl border border-gray-700/50">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a Game Developer and Computer Games Engineering student passionate about creating
                  immersive gaming experiences. With a background in full-stack and mobile development,
                  I bring a comprehensive understanding of software development to game creation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey in technology started with web and mobile development, which has given me a strong foundation 
                  in software engineering principles. Now, I'm focused on game development, combining my technical skills 
                  with creative problem-solving to build engaging interactive experiences.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Skills & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Game Development
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Unreal Engine</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">C++</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Blueprints</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Game AI</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Web & Mobile
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">React</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">React Native</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Node.js</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Python</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '50%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-blue-400 bg-blue-600/20 px-3 py-1 rounded-full">2019-2021</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Banca Sella - Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Cross-platform banking application development</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">React Native</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">iOS</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">Android</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">Python</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                    <span className="text-sm text-green-400 bg-green-600/20 px-3 py-1 rounded-full">2017-2019</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Ahaguru - Chennai, India</p>
                  <p className="text-gray-400 text-sm mb-3">Educational communication suite development</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">React</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">React Native</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">WebRTC</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">Redis</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">AWS</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">Mobile App Developer</h3>
                    <span className="text-sm text-purple-400 bg-purple-600/20 px-3 py-1 rounded-full">2021-2022</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">Star Projects - New Delhi, India</p>
                  <p className="text-gray-400 text-sm mb-3">Mobile test-taking platform development</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">Android</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">React Native</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50">MySQL</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">MSc Computer Games Engineering</h3>
                    <span className="text-sm text-blue-400 bg-blue-600/20 px-3 py-1 rounded-full">2024-2025</span>
                  </div>
                  <p className="text-gray-300 font-medium">Newcastle University</p>
                  <p className="text-gray-400 text-sm">Expected Graduation: 2025</p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">B.Tech Computer Science</h3>
                    <span className="text-sm text-green-400 bg-green-600/20 px-3 py-1 rounded-full">2012-2016</span>
                  </div>
                  <p className="text-gray-300 font-medium">Gandhi Institute For Education And Technology</p>
                  <p className="text-gray-400 text-sm">Graduated: 2016</p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1a1f2b] to-[#2a2f3b] p-6 rounded-xl border border-gray-700/50 sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-white">Quick Info</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">📍 Location</h3>
                  <p className="text-gray-300">Newcastle Upon Tyne, UK</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">🌍 Languages</h3>
                  <div className="space-y-1">
                    <p className="text-gray-300">English (Fluent)</p>
                    <p className="text-gray-300">Hindi (Native)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">🎮 Interests</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Game Development</li>
                    <li>• Game Engine Development</li>
                    <li>• AI in Games</li>
                    <li>• Graphics Programming</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">🛠️ Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#2a2f3b] text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">Git</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">AWS</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">Docker</span>
                    <span className="bg-[#2a2f3b] text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">VS Code</span>
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