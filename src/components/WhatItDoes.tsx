import React from 'react';
import { Eye, Shield, Zap, TrendingUp } from 'lucide-react';

const WhatItDoes: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What DeViewAI Does
          </h2>
          <p className="text-gray-400 text-lg">
            Our decentralized platform harnesses the power of edge computing to bring transparency
            and integrity to digital advertising.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-gray-800 rounded-xl p-8 overflow-hidden group hover:bg-gray-800/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex items-start space-x-4 relative z-10">
              <div className="flex-shrink-0 bg-indigo-500/10 rounded-lg p-3">
                <Eye className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time Verification</h3>
                <p className="text-gray-400">
                  Our network detects fake views and engagement in real-time by leveraging UpRock's distributed mobile IP infrastructure, providing accurate ad visibility data.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gray-800 rounded-xl p-8 overflow-hidden group hover:bg-gray-800/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex items-start space-x-4 relative z-10">
              <div className="flex-shrink-0 bg-purple-500/10 rounded-lg p-3">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Fraud Protection</h3>
                <p className="text-gray-400">
                  Advanced algorithms identify suspicious patterns and bot activities, protecting your ad spend from fraudulent impressions and clicks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gray-800 rounded-xl p-8 overflow-hidden group hover:bg-gray-800/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex items-start space-x-4 relative z-10">
              <div className="flex-shrink-0 bg-pink-500/10 rounded-lg p-3">
                <TrendingUp className="h-6 w-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Metrics</h3>
                <p className="text-gray-400">
                  Gain detailed insights into your ad campaigns with comprehensive metrics on viewability, engagement, and geographic distribution.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gray-800 rounded-xl p-8 overflow-hidden group hover:bg-gray-800/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex items-start space-x-4 relative z-10">
              <div className="flex-shrink-0 bg-cyan-500/10 rounded-lg p-3">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Transparent Reporting</h3>
                <p className="text-gray-400">
                  Blockchain-secured reports provide immutable records of ad performance, ensuring trust and transparency between advertisers and publishers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItDoes;