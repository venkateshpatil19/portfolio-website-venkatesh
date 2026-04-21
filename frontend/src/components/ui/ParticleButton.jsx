import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ParticleButton = ({ children, className, onClick, href, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  const generateParticles = () => {
    // Generate 12 elegant sparks/bubbles
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      // Random spread horizontally, mostly upwards vertically
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() * -60) - 10,
      scale: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 0.5 + 0.6,
      delay: Math.random() * 0.2,
    }));
    setParticles(newParticles);
    
    // Clear particles after the longest animation completes
    setTimeout(() => {
      setParticles([]);
    }, 1500);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    generateParticles();
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
      {...props}
    >
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              x: p.x, 
              y: p.y, 
              scale: [0, p.scale, 0] 
            }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay,
              ease: "easeOut" 
            }}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-300 shadow-[0_0_8px_rgba(129,140,248,0.8)] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
          />
        ))}
      </AnimatePresence>

      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%]"
        animate={{
          translateX: isHovered ? ['-150%', '150%'] : '-150%'
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2 w-full">
        {children}
      </span>
    </Component>
  );
};

export default ParticleButton;
