import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center w-full bg-gradient-to-br from-[#0f1419] via-[#1e2635] to-[#2a2f3b] text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2.5 h-2.5 bg-blue-400 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-float-2"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-float-4"></div>
        <div className="absolute top-1/3 left-1/2 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float-5"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float-6"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-float-7"></div>
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float-8"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-float-9"></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Role badge with pulse animation */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Available for Opportunities
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Aqeeb Rizwan
          </h1>
          
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8 font-light">
            Game Developer & Engineer
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting immersive gaming experiences with expertise in Unreal Engine, C++, and full-stack development. 
            Passionate about creating engaging gameplay mechanics and pushing technical boundaries.
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
          
          {/* Quick stats */}
          <div className="flex justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-gray-400">Game Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;