const About = () => {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-gray-300 mb-4">
                I'm a Game Developer and Computer Games Engineering student passionate about creating
                immersive gaming experiences. With a background in full-stack and mobile development,
                I bring a comprehensive understanding of software development to game creation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl mb-3">Game Development</h3>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>Unreal Engine</li>
                    <li>C++</li>
                  </ul>
                  <h3 className="text-xl mb-3">Tools & Services</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Git</li>
                    <li>AWS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Web & Mobile Development</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl">Software Developer</h3>
                  <p className="text-gray-300">Banca Sella - Chennai, India</p>
                  <p className="text-gray-400">May 2019 - Apr 2021</p>
                </div>

                <div>
                  <h3 className="text-xl">Software Developer</h3>
                  <p className="text-gray-300">Ahaguru - Chennai, India</p>
                  <p className="text-gray-400">Oct 2017 - Apr 2019</p>
                </div>

                <div>
                  <h3 className="text-xl">Software Developer</h3>
                  <p className="text-gray-300">Bookingjini - Bhubaneswar, India</p>
                  <p className="text-gray-400">Mar 2017 - Jun 2017</p>
                </div>

                <div>
                  <h3 className="text-xl">Freelance Mobile App Developer</h3>
                  <p className="text-gray-300">Star Projects Services Pvt Ltd - New Delhi, India</p>
                  <p className="text-gray-400">Mar 2021 - Jun 2022</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl">MSc Computer Games Engineering</h3>
                  <p className="text-gray-300">Newcastle University</p>
                  <p className="text-gray-400">Expected Graduation: 2025</p>
                </div>

                <div>
                  <h3 className="text-xl">B.Tech Computer Science</h3>
                  <p className="text-gray-300">Gandhi Institute For Education And Technology</p>
                  <p className="text-gray-400">Graduated: 2016</p>
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className="bg-[#1a1f2b] p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Quick Info</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Location</h3>
                  <p className="text-gray-300">Newcastle Upon Tyne</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Languages</h3>
                  <p className="text-gray-300">English</p>
                  <p className="text-gray-300">Hindi</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Interests</h3>
                  <ul className="text-gray-300">
                    <li>Game Development</li>
                    <li>Game Engine Development</li>
                    <li>AI in Games</li>
                  </ul>
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