// components/layout/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-brand-deep/95 to-brand-card/95 backdrop-blur-md text-white z-50 border-b border-gray-700/50">
      {/* Skip to main content — visible on focus for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-y-20 focus:translate-y-0 rounded-lg bg-brand-accent px-4 py-2 text-sm font-medium text-brand-deep transition-transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-accent"
      >
        Skip to main content
      </a>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-brand-deep group-hover:scale-110 transition-transform duration-300">
                AR
              </div>
              <span className="font-display text-xl font-bold text-white">
                Aqeeb Rizwan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-brand-accent relative ${
                  isActive(link.path) ? 'text-brand-accent' : 'text-gray-300'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-brand-surface transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-1 focus:ring-offset-brand-deep"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-gradient-to-b from-brand-card to-brand-deep border-t border-gray-700/50 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-brand-surface hover:text-brand-accent ${
                    isActive(link.path) ? 'text-brand-accent bg-brand-surface' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
