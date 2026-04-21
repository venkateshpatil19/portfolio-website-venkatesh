import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["C++", "Java", "Python", "JavaScript", "Dart", "SQL"] },
  { category: "Frameworks", items: ["Flutter", "Firebase", "Supabase", "Spring Boot", "React", "Node.js"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
];

const Skills = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="skills" 
      className="py-12"
    >
      <div className="mb-10 text-center flex flex-col items-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Technical Arsenal</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {skillsData.map((skillGroup, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 hover:shadow-[0_10px_30px_rgba(79,70,229,0.06)] dark:hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 w-32 shrink-0">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={skill}
                  className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-primary/10 dark:border-primary/20 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-lg shadow-sm hover:border-primary/40 dark:hover:border-primary/50 hover:text-primary dark:hover:text-indigo-400 hover:shadow-md transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
