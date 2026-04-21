import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, AlertTriangle, Film, ExternalLink, GitBranch } from 'lucide-react';

const projectsData = [
  {
    title: "RoadCare",
    badge: "Flagship",
    description: "Road issue reporting application with GPS integration, image uploading, and a robust admin dashboard for civic authorities.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    icon: <MapPin className="text-primary" size={24} />,
  },
  {
    title: "Employee Tracking",
    badge: "Internship",
    description: "Real-time GPS tracking solution with background services. Implemented Haversine distance calculations and secured with Supabase RLS.",
    tech: ["Flutter", "Supabase", "Background Services"],
    icon: <Users className="text-primary" size={24} />,
  },
  {
    title: "Smart E-Grievance",
    description: "Civic issue reporting system seamlessly integrating media uploads and GPS location data for accurate municipal reporting.",
    tech: ["React Native", "Node.js", "MongoDB"],
    icon: <AlertTriangle className="text-primary" size={24} />,
  },
  {
    title: "Movie Ticket Backend",
    description: "Robust Spring Boot APIs structured with a layered architecture for a high-concurrency movie ticketing system.",
    tech: ["Spring Boot", "Java", "MySQL"],
    icon: <Film className="text-primary" size={24} />,
  }
];

const Projects = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="projects" 
      className="py-12"
    >
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Selected Work</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>
        <a href="#" className="text-sm font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1 group">
          View Archive <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 flex flex-col h-full group relative overflow-hidden"
            style={{ perspective: 1000 }}
          >
            {/* Subtle glow orb inside card on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.2)] transition-all duration-300">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                    {project.title}
                    {project.badge && (
                      <span className="px-2.5 py-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-[10px] font-black text-primary dark:text-indigo-300 uppercase tracking-wider rounded-md border border-primary/10">
                        {project.badge}
                      </span>
                    )}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 flex-grow font-medium leading-relaxed relative z-10 transition-colors">
              {project.description}
            </p>

            <div className="flex flex-col gap-5 mt-auto relative z-10">
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700 px-3 py-1 rounded-lg transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-slate-200/60 dark:border-slate-700/60">
                <a href="#" className="btn-secondary py-2 px-4 text-xs">
                  <GitBranch size={16} /> Code
                </a>
                <a href="#" className="btn-primary py-2 px-4 text-xs shadow-sm">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
