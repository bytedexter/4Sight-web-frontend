import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative dark:bg-black/50 bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-slate-900">
            Built for <span className="gradient-text">Speed</span> & Scale
          </h2>
          <p className="dark:text-gray-400 text-slate-600">Everything you need to crush the SERPs, nothing you don't.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`group relative glass-panel rounded-3xl p-8 overflow-hidden dark:hover:border-neon-blue/50 hover:border-accent-blue/50 transition-colors duration-500 ${feature.span}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <feature.icon size={120} />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br dark:from-gray-800 dark:to-black from-slate-100 to-slate-200 dark:border-white/10 border-slate-300 border flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-shadow">
                    <feature.icon className="dark:text-white text-slate-700" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white text-slate-900">{feature.title}</h3>
                  <p className="dark:text-gray-400 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="dark:text-neon-blue text-accent-blue font-bold text-sm uppercase tracking-wider flex items-center gap-2">
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

