import usePageMeta from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

const Home = () => {
  usePageMeta(
    'Aqeeb Rizwan — Mobile Software Engineer',
    'Mobile Software Engineer with 4+ years in React Native — real-time, AI-native and offline-first apps. Shipped Leaf & Spine to the App Store and Google Play.'
  );

  return (
    <main id="main-content" className="w-full">
      <Hero />
      <Projects />
    </main>
  );
};

export default Home;
