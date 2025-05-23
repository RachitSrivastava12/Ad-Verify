import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-600/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2Mmgt---- truncated ----')] opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100/10 text-indigo-300 mb-6 border border-indigo-500/20">
            <img 
              src="https://play-lh.googleusercontent.com/xgk8zaNR3x2wBonaCD2eJSjxwuiWdKjA-aTJgAqIq06InJJiyToPbCWsMgUlipT9dXg" 
              alt="UpRock Logo" 
              className="w-4 h-4 rounded mr-2"
            />
            Powered by UpRock DePIN
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            DeViewAI – Real-Time Ad Verification
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500"> on the Edge</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Combat ad fraud using 1M+ decentralized mobile IPs powered by UpRock's DePIN.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#features" 
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center"
            >
              Explore Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#technology" 
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 border border-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-200">
        <span className="text-gray-400 text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;