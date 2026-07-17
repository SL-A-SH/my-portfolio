import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';

const fadeUpReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
  variants: fadeUpReveal,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  usePageMeta(
    'Contact — Aqeeb Rizwan',
    'Get in touch with Aqeeb Rizwan, Mobile Software Engineer — open to new roles, interesting projects, or a conversation about mobile development.'
  );

  return (
    <main id="main-content" className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white bg-gradient-to-b from-brand-mid to-brand-deep">
      <div className="max-w-6xl mx-auto py-12">
        <motion.div className="mb-14" {...revealProps}>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3 text-white">
            Get In Touch
          </h1>
          <div className="flex items-center gap-1.5 mb-5">
            <div className="w-6 h-0.5 bg-brand-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-xl">
            Open to new roles, interesting projects, or just a conversation about mobile development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpReveal}
            className="bg-gradient-to-br from-brand-card to-brand-surface p-8 rounded-xl border border-gray-700/50"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-white">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center group-hover:bg-brand-accent/30 transition-colors">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 font-medium">Email</h3>
                  <a href="mailto:aqeeb.riz@gmail.com" className="text-gray-300 hover:text-brand-accent transition-colors font-medium">
                    aqeeb.riz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-hover rounded-lg flex items-center justify-center group-hover:bg-brand-hover/80 transition-colors">
                  <Github className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 font-medium">GitHub</h3>
                  <a href="https://github.com/SL-A-SH" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors font-medium">
                    github.com/SL-A-SH
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 font-medium">LinkedIn</h3>
                  <a href="https://linkedin.com/in/aqeeb-rizwan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                    linkedin.com/in/aqeeb-rizwan
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-hover rounded-lg flex items-center justify-center group-hover:bg-brand-hover/80 transition-colors">
                  <MapPin className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 font-medium">Location</h3>
                  <p className="text-gray-300 font-medium">Bhubaneswar, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 font-medium">Availability</h3>
                  <p className="text-emerald-400 font-medium">Open to opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpReveal}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-brand-card to-brand-surface p-8 rounded-xl border border-gray-700/50"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-white">Send a Message</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 font-medium">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-surface border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="e.g. Jane Smith"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-surface border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-brand-surface border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent hover:bg-brand-accentHover disabled:bg-gray-600 text-brand-deep disabled:text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
