import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react'; // <-- Import Analytics

import Header from './components/Header';
import Hero from './components/Hero';
import WhatItDoes from './components/WhatItDoes';
import KeyFeatures from './components/KeyFeatures';
import WhyUpRock from './components/WhyUpRock';
import Timeline from './components/Timeline';
import BuiltFor from './components/BuiltFor';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = 'DeViewAI - Decentralized Ad Integrity Engine';

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <WhatItDoes />
      <KeyFeatures />
      <WhyUpRock />
      <Timeline />
      <BuiltFor />
      <CallToAction />
      <Footer />
      <Analytics /> {/* <-- Add Analytics at the root of the DOM */}
    </div>
  );
}

export default App;
