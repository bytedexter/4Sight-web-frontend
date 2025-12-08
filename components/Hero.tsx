import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 dark:bg-neon-purple bg-accent-purple rounded-full mix-blend-multiply filter blur-[128px] dark:opacity-40 opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 dark:bg-neon-blue bg-accent-blue rounded-full mix-blend-multiply filter blur-[128px] dark:opacity-40 opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-72 h-72 dark:bg-neon-green bg-accent-green rounded-full mix-blend-multiply filter blur-[128px] dark:opacity-20 opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-white/5 bg-slate-100 dark:border-white/10 border-slate-200 border text-xs font-bold uppercase tracking-wider dark:text-neon-blue text-accent-blue mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full dark:bg-neon-blue bg-accent-blue animate-pulse"></span>
            Marketing Automation Powered by AI
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight dark:text-white text-slate-900">
            Dominate Search. <br />
            <span className="gradient-text">Automate Growth.</span>
          </h1>

          <p className="dark:text-gray-400 text-slate-600 text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0 font-light">
            The AI-driven SEO engine that puts you on Page 1.
            Stop guessing, start ranking with the power of 4Sight.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 dark:bg-neon-blue bg-accent-blue text-white dark:text-black font-extrabold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 dark:shadow-[0_0_40px_rgba(0,243,255,0.3)] shadow-lg">
              <span className="relative z-10 flex items-center gap-2">
                Book Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="flex items-center gap-2 px-8 py-4 rounded-full dark:border-white/10 border-slate-300 border dark:hover:bg-white/5 hover:bg-slate-100 transition-all dark:text-white text-slate-800 font-semibold group">
              <PlayCircle size={20} className="dark:text-neon-purple text-accent-purple group-hover:text-accent-blue transition-colors" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Visual / Product Mock */}
        <div className="relative z-10 mt-12 lg:mt-0 perspective-1000 group">
          <div className="relative rounded-3xl overflow-hidden glass-panel p-2 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr dark:from-neon-blue/20 dark:to-neon-purple/20 from-accent-blue/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Mock UI Header */}
            <div className="dark:bg-black/80 bg-slate-100 p-4 flex items-center gap-3 dark:border-white/10 border-slate-200 border-b">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 dark:bg-white/10 bg-slate-200 h-6 rounded-md mx-4"></div>
            </div>

            {/* Mock UI Body */}
            <div className="dark:bg-black/90 bg-white p-0 relative h-[400px] w-full">
              {/* Abstract Charts representing SEO */}
              <div className="absolute inset-0 p-6 flex flex-col gap-6">
                <div className="flex justify-between items-end h-32 gap-2">
                  {[40, 60, 45, 70, 85, 60, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t dark:from-neon-purple dark:to-neon-blue from-accent-purple to-accent-blue rounded-t-lg opacity-80 hover:opacity-100 transition-all duration-300" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 dark:bg-white/5 bg-slate-50 rounded-xl dark:border-white/10 border-slate-200 border p-4">
                    <div className="w-8 h-8 rounded-full dark:bg-neon-blue/20 bg-accent-blue/20 mb-2 flex items-center justify-center dark:text-neon-blue text-accent-blue"><ArrowRight size={16} /></div>
                    <div className="h-2 w-20 dark:bg-white/20 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-12 dark:bg-white/10 bg-slate-100 rounded"></div>
                  </div>
                  <div className="h-24 dark:bg-white/5 bg-slate-50 rounded-xl dark:border-white/10 border-slate-200 border p-4">
                    <div className="w-8 h-8 rounded-full dark:bg-neon-green/20 bg-accent-green/20 mb-2 flex items-center justify-center dark:text-neon-green text-accent-green"><ArrowRight size={16} /></div>
                    <div className="h-2 w-20 dark:bg-white/20 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-12 dark:bg-white/10 bg-slate-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floaters */}
              <div className="absolute top-1/4 -right-12 glass-panel p-4 rounded-xl animate-bounce shadow-xl dark:border-neon-blue/30 border-accent-blue/50 border">
                <span className="dark:text-neon-blue text-accent-blue font-bold">+245% Traffic</span>
              </div>
              <div className="absolute bottom-1/4 -left-12 glass-panel p-4 rounded-xl animate-bounce shadow-xl dark:border-neon-purple/30 border-accent-purple/50 border animation-delay-1000">
                <span className="dark:text-neon-purple text-accent-purple font-bold">Page 1 Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
