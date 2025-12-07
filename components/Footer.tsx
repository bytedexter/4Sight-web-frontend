import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-3xl font-extrabold tracking-tighter text-white mb-6">
            <span className="text-neon-blue">4</span>SIGHT
        </div>
        
        <div className="flex gap-6 mb-8">
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-blue transition-all"><Twitter size={20} /></a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-purple transition-all"><Instagram size={20} /></a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-green transition-all"><Linkedin size={20} /></a>
        </div>

        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} 4Sight. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
          Powered by TDSC (The Data Science Company)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
