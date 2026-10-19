import usePageMeta from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

const Home = () => {
  usePageMeta(
    'Aqeeb Rizwan — Gameplay & Graphics Programmer',
    'Gameplay and graphics programmer — combat, AI and multiplayer in Unreal Engine and custom C++ engines, GPU-driven rendering in DirectX 11 and OpenGL. MSc Computer Games Engineering.'
  );

  return (
    <main id="main-content" className="w-full">
      <Hero />
      <Projects />
    </main>
  );
};

export default Home;
