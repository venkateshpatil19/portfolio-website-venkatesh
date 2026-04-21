import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "TraceLink",
    location: "Pune, India",
    date: "Feb 2026 – Present",
    current: true,
    description: "Building robust systems for analytics dashboards, performing data validation for reporting pipelines, and improving overall reliability in the Opus Reports & Dashboard Team.",
    logo: "/tracelink_logo.jpg"
  },
  {
    role: "Software Developer Intern",
    company: "Dhanshree Constro Solution",
    location: "India",
    date: "2025",
    current: false,
    description: "Developed and maintained software solutions to streamline construction management processes."
  },
  {
    role: "Flutter Developer Intern",
    company: "Nebula Technology",
    location: "India",
    date: "2024",
    current: false,
    description: "Built cross-platform mobile applications using Flutter and Dart. Integrated RESTful APIs and state management."
  },
  {
    role: "Core Team Member",
    company: "GDG Flutter Domain",
    location: "Campus",
    date: "2023 - 2024",
    current: false,
    description: "Organized workshops and hackathons. Mentored students in mobile application development using Flutter."
  }
];

const Experience = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="experience" 
      className="py-12"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Experience</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>

      <div className="relative pl-6 md:pl-0 max-w-4xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 md:left-[140px] top-4 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-transparent rounded-full" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col md:flex-row items-start gap-8 group"
            >
              {/* Date */}
              <div className="hidden md:block w-[120px] shrink-0 text-right pt-4">
                <span className={`text-sm font-bold ${exp.current ? 'text-primary dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>{exp.date}</span>
              </div>

              {/* Timeline Dot */}
              <div className={`absolute left-[-8px] md:static w-4 h-4 rounded-full mt-1.5 md:mt-4 shrink-0 z-10 transition-all duration-300
                ${exp.current 
                  ? 'bg-gradient-to-r from-primary to-secondary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(79,70,229,0.5)]' 
                  : 'bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-600 group-hover:border-primary/50'}`} 
              />

              {/* Content Card */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.01 }}
                className={`flex-1 glass-panel p-6 transition-all duration-300 
                ${exp.current ? 'ring-1 ring-primary/30 shadow-[0_8px_30px_rgba(79,70,229,0.15)] relative overflow-hidden dark:shadow-[0_8px_30px_rgba(79,70,229,0.2)]' : 'hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]'}
              `}>
                
                {exp.current && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"></div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex items-center justify-center shrink-0">
                        <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain p-1" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{exp.role}</h3>
                      <span className="md:hidden text-xs font-bold text-primary dark:text-indigo-400 mt-1 block">{exp.date}</span>
                    </div>
                  </div>
                  
                  {exp.current && (
                    <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-indigo-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20 shrink-0 shadow-[0_0_10px_rgba(79,70,229,0.1)]">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                  <h4 className={`text-base font-bold ${exp.current ? 'gradient-text' : 'text-slate-700 dark:text-slate-300'}`}>{exp.company}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">{exp.location}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
