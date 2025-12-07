import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">Speed</span> & Scale
          </h2>
          <p className="text-gray-400">Everything you need to crush the SERPs, nothing you don't.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className={`group relative glass-panel rounded-3xl p-8 overflow-hidden hover:border-neon-blue/50 transition-colors duration-500 ${feature.span}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <feature.icon size={120} />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="text-neon-blue font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    Learn More <span className="text-lg">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
