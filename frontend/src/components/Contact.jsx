import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import axios from 'axios';
import ParticleButton from './ui/ParticleButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('http://13.61.10.205/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="contact" 
      className="py-12 relative"
    >
      <div className="glass-panel p-8 md:p-12 relative overflow-hidden group">
        {/* Glow Effects */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-pulse animation-delay-2000"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          
          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">Let's build something <br/><span className="gradient-text drop-shadow-md">incredible.</span></h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Form Side */}
          <div className="bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 dark:border-slate-700/50 shadow-sm relative transition-colors duration-500">
            {status === 'success' ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                className="flex flex-col items-center justify-center text-center py-10 h-full"
              >
                <CheckCircle size={56} className="text-primary mb-4 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-all font-bold shadow-sm hover:shadow"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="block px-4 pb-2.5 pt-5 w-full text-sm text-slate-900 dark:text-white bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary peer transition-colors shadow-sm"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute text-xs text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary font-semibold pointer-events-none">Name</label>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="block px-4 pb-2.5 pt-5 w-full text-sm text-slate-900 dark:text-white bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary peer transition-colors shadow-sm"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute text-xs text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary font-semibold pointer-events-none">Email</label>
                </div>

                <div className="relative">
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="block px-4 pb-2.5 pt-5 w-full text-sm text-slate-900 dark:text-white bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary peer transition-colors shadow-sm resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute text-xs text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary font-semibold pointer-events-none">Message</label>
                </div>

                <ParticleButton 
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full mt-2 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Sending...' : (
                    <>Send Message <Send size={16} /></>
                  )}
                </ParticleButton>
              </form>
            )}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
