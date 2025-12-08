import React, { useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TiltCard: React.FC<{ data: Testimonial }> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="glass-panel p-8 rounded-3xl h-full transition-transform duration-100 ease-out dark:border-white/5 border-slate-200 border dark:hover:border-neon-purple/30 hover:border-accent-purple/50"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex items-center gap-4 mb-6 transform translate-z-10">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full dark:border-white/20 border-slate-300 border-2"
          />
          <div>
            <h4 className="font-bold dark:text-white text-slate-900">{data.name}</h4>
            <p className="text-xs dark:text-neon-blue text-accent-blue font-semibold uppercase">{data.role}</p>
          </div>
        </div>
        <p className="dark:text-gray-300 text-slate-600 text-lg italic leading-relaxed transform translate-z-20">
          "{data.quote}"
        </p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="proof" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r dark:from-neon-blue dark:via-neon-purple dark:to-neon-green from-accent-blue via-accent-purple to-accent-green dark:opacity-10 opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white text-slate-900">Trusted by the new wave</h2>
          <p className="dark:text-gray-400 text-slate-600">Join 10,000+ marketers dominating their niche.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TiltCard key={t.id} data={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

