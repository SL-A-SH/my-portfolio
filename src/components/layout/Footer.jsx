// components/layout/Footer.jsx
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-deep border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {year} Aqeeb Rizwan</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SL-A-SH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-brand-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/aqeeb-rizwan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-brand-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:aqeeb.riz@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-brand-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
