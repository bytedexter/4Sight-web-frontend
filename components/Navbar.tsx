import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-panel border-b-0' : 'py-6 bg-transparent border-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col">
          <div className="text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2">
            <span className="text-neon-blue text-3xl">4</span>SIGHT
          </div>
          <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
            Powered by TDSC
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#features" className="hover:text-neon-blue transition-colors">Features</a>
          <a href="#proof" className="hover:text-neon-blue transition-colors">Stories</a>
          <a href="#grader" className="hover:text-neon-blue transition-colors">SEO Score</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
           <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-neon-blue hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transform hover:-translate-y-1">
            Book Free Trial
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-panel border-t border-white/10 p-6 flex flex-col gap-6 md:hidden">
          <a href="#features" className="text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#proof" className="text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Stories</a>
          <a href="#grader" className="text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>SEO Score</a>
          <button className="bg-neon-blue text-black px-6 py-3 rounded-full font-bold w-full">
            Book Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
