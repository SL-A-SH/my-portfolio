import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const RouteFallback = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-brand-base" aria-hidden="true">
    <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router basename='/my-portfolio'>
      <MotionConfig reducedMotion="user">
        <div className="w-full min-h-screen bg-brand-base">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </MotionConfig>
    </Router>
  );
};

export default App;