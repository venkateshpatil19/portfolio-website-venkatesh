import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-primary/20 transition-colors duration-500">
      <CustomCursor />
      <Navbar />
      
      {/* Animated Gradient Background */}
      <div className="layer-bg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neonAccent rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="layer-mid container mx-auto px-6 pt-32 pb-12 flex flex-col gap-20 max-w-5xl">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
