import React from 'react';
import { ShieldCheck, Globe, Code, BarChart3 } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: string;
}> = ({ icon, title, description, gradient, delay }) => {
  return (
    <div 
      className={`bg-gray-800 rounded-xl p-6 md:p-8 hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-gray-600 ${delay}`}
    >
      <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${gradient}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: 'Ad Fraud Detection',
      description: 'Identify and eliminate fraudulent traffic with our decentralized verification network.',
      gradient: 'bg-gradient-to-br from-indigo-600 to-blue-700',
      delay: 'animate-fade-in-up'
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Global Viewability Scoring',
      description: 'Measure real viewability across different regions using our distributed mobile network.',
      gradient: 'bg-gradient-to-br from-purple-600 to-indigo-700',
      delay: 'animate-fade-in-up animation-delay-200'
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: 'API Integration',
      description: 'Seamlessly integrate with your existing ad tech stack through our comprehensive API.',
      gradient: 'bg-gradient-to-br from-pink-600 to-purple-700',
      delay: 'animate-fade-in-up animation-delay-400'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: 'Analytics Dashboard',
      description: 'Gain insights with real-time data visualization and comprehensive reporting tools.',
      gradient: 'bg-gradient-to-br from-cyan-600 to-blue-700',
      delay: 'animate-fade-in-up animation-delay-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden" id="technology">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_40%)]"></div>
      <div className="hidden lg:block absolute top-1/2 left-0 w-64 h-96 bg-indigo-900/20 rounded-full filter blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gray-800 text-indigo-300 mb-4">
            <span className="mr-2">✨</span>
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-gray-400 text-lg">
            Our platform offers a comprehensive suite of tools to verify and optimize your digital advertising.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;