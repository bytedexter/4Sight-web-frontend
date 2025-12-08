import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b-0' : 'py-6 bg-transparent border-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col">
          <div className="text-2xl font-extrabold tracking-tighter dark:text-white text-slate-900 flex items-center gap-2">
            <span className="dark:text-neon-blue text-accent-blue text-3xl">4</span>SIGHT
          </div>
          <span className="text-[10px] tracking-widest uppercase dark:text-gray-400 text-slate-500 font-semibold">
            Powered by TDSC
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm dark:text-white text-slate-700">
          <a href="#features" className="dark:hover:text-neon-blue hover:text-accent-blue transition-colors">Features</a>
          <a href="#proof" className="dark:hover:text-neon-blue hover:text-accent-blue transition-colors">Stories</a>
          <a href="#grader" className="dark:hover:text-neon-blue hover:text-accent-blue transition-colors">SEO Score</a>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full dark:bg-white/10 bg-slate-200 dark:hover:bg-white/20 hover:bg-slate-300 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-slate-700" />
            )}
          </button>

          <button className="dark:bg-white dark:text-black bg-accent-blue text-white px-6 py-2.5 rounded-full font-bold dark:hover:bg-neon-blue dark:hover:text-white hover:bg-accent-purple hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transform hover:-translate-y-1">
            Book Free Trial
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-white/10 bg-slate-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>
          <button
            className="dark:text-white text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-panel border-t dark:border-white/10 border-slate-200 p-6 flex flex-col gap-6 md:hidden">
          <a href="#features" className="text-lg font-bold dark:text-white text-slate-900" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#proof" className="text-lg font-bold dark:text-white text-slate-900" onClick={() => setMobileMenuOpen(false)}>Stories</a>
          <a href="#grader" className="text-lg font-bold dark:text-white text-slate-900" onClick={() => setMobileMenuOpen(false)}>SEO Score</a>
          <button className="dark:bg-neon-blue bg-accent-blue text-white px-6 py-3 rounded-full font-bold w-full">
            Book Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
