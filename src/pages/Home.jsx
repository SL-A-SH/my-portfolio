import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

const Home = () => {
  useEffect(() => {
    document.title = 'Aqeeb Rizwan — Mobile Software Engineer';
  }, []);

  return (
    <main id="main-content" className="w-full">
      <Hero />
      <Projects />
    </main>
  );
};

export default Home;