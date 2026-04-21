import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Globe, Mail, Moon, Sun, Code } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial theme setup
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-5xl">
        <a href="#" className="font-extrabold text-2xl tracking-tighter gradient-text hover:scale-105 transition-transform">VP.</a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {['Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-primary transition-colors">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
          <button 
            onClick={toggleTheme} 
            className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors mr-2"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
          
          <motion.a whileHover={{ scale: 1.2, color: '#4F46E5' }} href="https://github.com/venkateshpatil19" target="_blank" rel="noopener noreferrer" className="transition-colors"><GitBranch size={18} /></motion.a>
          <motion.a whileHover={{ scale: 1.2, color: '#4F46E5' }} href="https://www.linkedin.com/in/venkateshpatil19" target="_blank" rel="noopener noreferrer" className="transition-colors"><Globe size={18} /></motion.a>
          <motion.a whileHover={{ scale: 1.2, color: '#4F46E5' }} href="https://leetcode.com/u/venkateshpatil19/" target="_blank" rel="noopener noreferrer" className="transition-colors"><Code size={18} /></motion.a>
          <motion.a whileHover={{ scale: 1.2, color: '#4F46E5' }} href="mailto:venkateshpatil1907@gmail.com" className="transition-colors"><Mail size={18} /></motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
