import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, BrainCircuit, Code } from 'lucide-react';

const achievements = [
  { icon: <Medal size={24} className="text-primary dark:text-indigo-400" />, count: "94%", label: "1st Rank Diploma", desc: "Highest academic achievement" },
  { icon: <Trophy size={24} className="text-primary dark:text-indigo-400" />, count: "Rank 3", label: "Smart India Hackathon", desc: "National Level Finalist" },
  { icon: <BrainCircuit size={24} className="text-primary dark:text-indigo-400" />, count: "1", label: "Oracle Gen AI", desc: "Professional Certification" },
  { icon: <Code size={24} className="text-primary dark:text-indigo-400" />, count: "250+", label: "LeetCode Problems", desc: "DSA & Problem Solving" },
];

const Achievements = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <div className="mb-10 text-center flex flex-col items-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Milestones</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-panel p-6 flex flex-col items-center text-center group hover:shadow-[0_15px_30px_rgba(79,70,229,0.08)] dark:hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Soft glow orb */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            
            <div className="mb-1">
              <span className="text-3xl font-black gradient-text">{item.count}</span>
            </div>
            
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">{item.label}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
