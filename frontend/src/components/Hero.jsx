import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Download } from 'lucide-react';
import ParticleButton from './ui/ParticleButton';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-20 relative">
      
      {/* Decorative Star/Sparkle Glows */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.8)] animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_3px_rgba(79,70,229,0.8)] animate-ping hidden md:block"></div>

      {/* LEFT: Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8 max-w-2xl z-10"
      >
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-bold tracking-widest uppercase shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_2px_rgba(16,185,129,0.6)]"></span>
            Open to Opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Venkatesh Patil
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200">
            <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <img src="/tracelink_logo.jpg" alt="TraceLink Logo" className="w-full h-full object-contain p-1" />
            </div>
            <h2>Software Engineer Intern <span className="text-slate-400 font-medium">@</span> <span className="gradient-text drop-shadow-sm">TraceLink</span></h2>
          </div>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
          Building real-time applications and scalable systems. Dedicated to engineering robust solutions with a premium product feel.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <ParticleButton href="#projects" className="btn-primary group">
            Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </ParticleButton>
          <ParticleButton 
            href="/Venkatesh_Patil.pdf" 
            className="btn-secondary group"
            download="Venkatesh_Patil_Resume.pdf"
          >
            Resume <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </ParticleButton>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT: Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-shrink-0 relative group z-10"
      >
        {/* Glowing aura behind image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 animate-pulse"></div>
        
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-darkCard shadow-2xl relative z-10 bg-slate-100 group-hover:scale-105 transition-transform duration-500 ring-4 ring-primary/20 group-hover:ring-primary/50"
        >
          <img src="/unnamed.jpg" alt="Venkatesh Patil" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
