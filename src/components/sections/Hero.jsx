import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center w-full bg-[#1e2635] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            Aqeeb Rizwan
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6">
            Game Developer & Engineer
          </p>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting immersive gaming experiences with a background in full-stack development
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            <Link 
              to="/contact" 
              className="bg-[#2a2f3b] hover:bg-[#3a3f4b] px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;