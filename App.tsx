import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import SeoGrader from './components/SeoGrader';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-[#050505] bg-slate-50 min-h-screen dark:text-white text-slate-800 overflow-x-hidden dark:selection:bg-neon-blue dark:selection:text-black selection:bg-neon-purple selection:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <SeoGrader />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
