import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center w-full bg-gradient-to-br from-brand-deep via-brand-mid to-brand-surface text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

          {/* Main content — left 8 cols */}
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-8">
              Available for opportunities
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 text-white leading-[1.05]">
              Aqeeb<br />Rizwan
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-400 mb-8 font-light">
              Mobile Software Engineer
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed">
              5+ years shipping cross-platform apps with React Native and Expo. Built and deployed
              Leaf &amp; Spine — a reading app with 3D bookshelves — independently to both the App
              Store and Google Play.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#projects"
                className="group bg-blue-600 hover:bg-blue-500 px-8 py-3.5 rounded-lg font-medium transition-colors duration-300 flex items-center shadow-lg shadow-blue-500/20"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/contact"
                className="group bg-transparent hover:bg-brand-surface border border-gray-600 hover:border-gray-500 px-8 py-3.5 rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Credentials sidebar — right 4 cols, desktop only */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="border-l border-gray-700/60 pl-8 space-y-0">
              <div className="py-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1.5">Platforms</p>
                <p className="text-white font-medium">iOS &amp; Android</p>
              </div>
              <div className="border-t border-gray-700/40 py-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1.5">Apps Shipped</p>
                <p className="text-white font-medium">Google Play + App Store</p>
              </div>
              <div className="border-t border-gray-700/40 py-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1.5">Education</p>
                <p className="text-white font-medium">MSc Games Engineering</p>
                <p className="text-gray-500 text-sm mt-0.5">Newcastle University, 2025</p>
              </div>
              <div className="border-t border-gray-700/40 py-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1.5">Primary Stack</p>
                <p className="text-white font-medium">React Native · TypeScript</p>
                <p className="text-gray-500 text-sm mt-0.5">Firebase · Expo EAS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
