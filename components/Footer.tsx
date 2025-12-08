import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 dark:border-white/10 border-slate-200 border-t dark:bg-black bg-white text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-3xl font-extrabold tracking-tighter dark:text-white text-slate-900 mb-6">
          <span className="dark:text-neon-blue text-accent-blue">4</span>SIGHT
        </div>

        <div className="flex gap-6 mb-8">
          <a href="#" className="p-3 dark:bg-white/5 bg-slate-100 rounded-full dark:hover:bg-white/10 hover:bg-slate-200 dark:hover:text-neon-blue hover:text-accent-blue transition-all dark:text-white text-slate-600"><Twitter size={20} /></a>
          <a href="#" className="p-3 dark:bg-white/5 bg-slate-100 rounded-full dark:hover:bg-white/10 hover:bg-slate-200 dark:hover:text-neon-purple hover:text-accent-purple transition-all dark:text-white text-slate-600"><Instagram size={20} /></a>
          <a href="#" className="p-3 dark:bg-white/5 bg-slate-100 rounded-full dark:hover:bg-white/10 hover:bg-slate-200 dark:hover:text-neon-green hover:text-accent-green transition-all dark:text-white text-slate-600"><Linkedin size={20} /></a>
        </div>

        <p className="dark:text-gray-500 text-slate-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} 4Sight. All rights reserved.
        </p>
        <p className="dark:text-gray-600 text-slate-400 text-xs font-mono uppercase tracking-widest">
          Powered by TDSC (The Data Science Company)
        </p>
      </div>
    </footer>
  );
};

export default Footer;

