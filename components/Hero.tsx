import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-neon-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-neon-green rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-neon-blue mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            Marketing Automation Powered by AI
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Dominate Search. <br/>
            <span className="gradient-text">Automate Growth.</span>
          </h1>
          
          <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0 font-light">
            The AI-driven SEO engine that puts you on Page 1. 
            Stop guessing, start ranking with the power of 4Sight.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-neon-blue text-black font-extrabold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,243,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Book Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-semibold group">
              <PlayCircle size={20} className="text-neon-purple group-hover:text-white transition-colors" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Visual / Product Mock */}
        <div className="relative z-10 mt-12 lg:mt-0 perspective-1000 group">
          <div className="relative rounded-3xl overflow-hidden glass-panel p-2 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Mock UI Header */}
            <div className="bg-black/80 p-4 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-white/10 h-6 rounded-md mx-4"></div>
            </div>

            {/* Mock UI Body */}
            <div className="bg-black/90 p-0 relative h-[400px] w-full">
              {/* Abstract Charts representing SEO */}
              <div className="absolute inset-0 p-6 flex flex-col gap-6">
                 <div className="flex justify-between items-end h-32 gap-2">
                    {[40, 60, 45, 70, 85, 60, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t-lg opacity-80 hover:opacity-100 transition-all duration-300" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl border border-white/10 p-4">
                       <div className="w-8 h-8 rounded-full bg-neon-blue/20 mb-2 flex items-center justify-center text-neon-blue"><ArrowRight size={16}/></div>
                       <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                       <div className="h-2 w-12 bg-white/10 rounded"></div>
                    </div>
                    <div className="h-24 bg-white/5 rounded-xl border border-white/10 p-4">
                        <div className="w-8 h-8 rounded-full bg-neon-green/20 mb-2 flex items-center justify-center text-neon-green"><ArrowRight size={16}/></div>
                       <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                       <div className="h-2 w-12 bg-white/10 rounded"></div>
                    </div>
                 </div>
              </div>
              
              {/* Floaters */}
              <div className="absolute top-1/4 -right-12 glass-panel p-4 rounded-xl animate-bounce shadow-xl border border-neon-blue/30">
                <span className="text-neon-blue font-bold">+245% Traffic</span>
              </div>
               <div className="absolute bottom-1/4 -left-12 glass-panel p-4 rounded-xl animate-bounce shadow-xl border border-neon-purple/30 animation-delay-1000">
                <span className="text-neon-purple font-bold">Page 1 Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
