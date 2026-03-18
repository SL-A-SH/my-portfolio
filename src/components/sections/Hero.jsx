import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center w-full bg-gradient-to-br from-[#0f1419] via-[#1e2635] to-[#2a2f3b] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
            Aqeeb Rizwan
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8 font-light">
            Mobile Software Engineer
          </p>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building cross-platform mobile apps with React Native, Expo, and cloud-backed architectures.
            Passionate about crafting productive and creative experiences that ship to the App Store and Google Play.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center"
            >
              <span>View Projects</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="group bg-[#2a2f3b] hover:bg-[#3a3f4b] border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
