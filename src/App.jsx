import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsContact from './components/AchievementsContact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-inter">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <AchievementsContact />
      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Sanketh • RNS Institute of Technology (RNSIT)
      </footer>
    </div>
  );
}

export default App;
