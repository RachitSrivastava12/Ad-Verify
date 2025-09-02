import React from 'react';
import { Network, Smartphone, Shield, Zap } from 'lucide-react';

const WhyUpRock: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.1),transparent_50%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-700">
                <div className="mb-6 flex items-center">
                  <img 
                    src="https://play-lh.googleusercontent.com/xgk8zaNR3x2wBonaCD2eJSjxwuiWdKjA-aTJgAqIq06InJJiyToPbCWsMgUlipT9dXg" 
                    alt="UpRock Logo" 
                    className="w-12 h-12 rounded-lg"
                  />
                  <span className="ml-3 text-xl font-semibold text-white">UpRock DePIN</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why UpRock?
                </h2>
                <p className="text-gray-300 mb-6">
                  DeViewAI leverages UpRock's extensive decentralized physical infrastructure network (DePIN) 
                  to provide unparalleled ad verification capabilities.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-green-500/10 rounded-full">
                      <Smartphone className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-white">1M+ Mobile Devices</h3>
                      <p className="text-gray-400">
                        Access to UpRock's global network of over one million mobile devices 
                        provides unparalleled coverage for ad verification.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-purple-500/10 rounded-full">
                      <Shield className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-white">Decentralized Security</h3>
                      <p className="text-gray-400">
                        The distributed nature of UpRock's infrastructure ensures resilient, 
                        tamper-resistant verification that can't be gamed by fraudsters.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-blue-500/10 rounded-full">
                      <Zap className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-white">Edge Computing</h3>
                      <p className="text-gray-400">
                        Process verification at the edge for real-time results without latency,
                        enabling instant fraud detection and reporting.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden">
              {/* Visualization of the DePIN network */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* World map outline */}
                  <div className="absolute inset-0 bg-gray-700/30 rounded-lg world-map-outline"></div>
                  
                  {/* Network nodes - These would be better as SVG in a real implementation */}
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    ></div>
                  ))}
                  
                  {/* Connection lines */}
                  <div className="absolute inset-0">
                    <div className="absolute w-full h-full network-connections"></div>
                  </div>
                  
                  {/* Central hub */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-indigo-400" />
                      </div>
                    </div>
                    <div className="absolute -inset-4 border-2 border-indigo-400/20 rounded-full"></div>
                    <div className="absolute -inset-8 border border-indigo-400/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-white text-sm font-medium">
                  UpRock's Decentralized Mobile Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUpRock;