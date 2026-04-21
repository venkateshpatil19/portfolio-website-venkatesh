import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, ShieldCheck, Terminal } from 'lucide-react';

const CurrentWork = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Current Focus</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main large card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="lg:col-span-2 glass-panel p-8 relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(79,70,229,0.1)] dark:hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)] transition-all duration-300"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="flex items-center gap-5 mb-8 relative z-10">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl border border-primary/20 shadow-sm">
              <Terminal className="text-primary dark:text-indigo-400" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Software Engineer Intern</h3>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">TraceLink • Opus Reports & Dashboard</p>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 font-medium relative z-10">
            Currently deep in the trenches of the Opus Reports & Dashboard team. 
            My primary focus is building robust systems for complex analytics dashboards, ensuring data integrity and pipeline reliability.
          </p>

          <ul className="space-y-4 relative z-10">
            {[
              { icon: <Activity size={18} className="text-primary dark:text-indigo-400"/>, text: "Building systems for enterprise analytics dashboards" },
              { icon: <Database size={18} className="text-primary dark:text-indigo-400"/>, text: "Performing rigorous data validation for reporting pipelines" },
              { icon: <ShieldCheck size={18} className="text-primary dark:text-indigo-400"/>, text: "Improving overall reliability and testing workflows" }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-0.5">{item.icon}</div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Side Stacked Cards */}
        <div className="flex flex-col gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 flex-1 flex flex-col justify-center relative overflow-hidden group hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] dark:hover:shadow-[0_15px_30px_rgba(124,58,237,0.2)] transition-all duration-300"
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="text-base font-black text-slate-900 dark:text-white mb-3 relative z-10">Impact</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">Enhancing test coverage and reducing manual validation time by automating critical path testing for data visualizations.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 flex-1 flex flex-col justify-center relative overflow-hidden group hover:shadow-[0_15px_30px_rgba(79,70,229,0.1)] dark:hover:shadow-[0_15px_30px_rgba(79,70,229,0.2)] transition-all duration-300"
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="text-base font-black text-slate-900 dark:text-white mb-4 relative z-10">Tech Focus</h4>
            <div className="flex flex-wrap gap-2 relative z-10">
              {['Selenium', 'Java', 'Data Validation', 'CI/CD'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default CurrentWork;
