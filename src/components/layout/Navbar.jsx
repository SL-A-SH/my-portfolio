// components/layout/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/#projects') {
      return location.hash === '#projects';
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-brand-deep/95 to-brand-card/95 backdrop-blur-md text-white z-50 border-b border-gray-700/50">
      {/* Skip to main content — visible on focus for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-y-20 focus:translate-y-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
      >
        Skip to main content
      </a>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform duration-300">
                AR
              </div>
              <span className="text-xl font-bold text-white">
                Aqeeb Rizwan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path.includes('#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                    isActive(link.path) ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></div>
                  )}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                    isActive(link.path) ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></div>
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-brand-surface transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-brand-deep"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gradient-to-b from-brand-card to-brand-deep border-t border-gray-700/50 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.path.includes('#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-brand-surface hover:text-blue-400 ${
                    isActive(link.path) ? 'text-blue-400 bg-brand-surface' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-brand-surface hover:text-blue-400 ${
                    isActive(link.path) ? 'text-blue-400 bg-brand-surface' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
