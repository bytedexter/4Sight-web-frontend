import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import SeoGrader from './components/SeoGrader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-neon-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <SeoGrader />
      </main>
      <Footer />
    </div>
  );
}

export default App;
