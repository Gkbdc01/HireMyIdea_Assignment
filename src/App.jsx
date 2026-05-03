import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import PhoneMockup from './components/phonePreview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#243322] font-sans overflow-hidden">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <Hero />
        <PhoneMockup />
      </main>
    </div>
  );
}