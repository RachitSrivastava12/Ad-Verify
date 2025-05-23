import React from 'react';
import { Code, Laptop, Layers, Rocket } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  isActive?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  description,
  date,
  isActive = false,
  isLast = false
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4 md:mr-8">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full z-10 
          ${isActive 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20' 
            : 'bg-gray-700'}`}
        >
          {icon}
        </div>
        {!isLast && (
          <div className={`w-px h-full ${isActive ? 'bg-indigo-500' : 'bg-gray-700'}`}></div>
        )}
      </div>
      
      <div className="pb-8">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 bg-gray-800 text-gray-300">
          {date}
        </span>
        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-400'}`}>
          {title}
        </h3>
        <p className="text-gray-400 max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const milestones = [
    {
      icon: <Layers className="h-5 w-5 text-white" />,
      title: "Architecture & Design",
      description: "Developing the system architecture for integrating with UpRock's DePIN infrastructure and designing the ad verification algorithms.",
      isActive: true
    },
    {
      icon: <Code className="h-5 w-5 text-white" />,
      title: "Prototype Development",
      description: "Building the initial prototype with core verification capabilities and integration with UpRock's mobile network.",
      isActive: false,
    },
    {
      icon: <Laptop className="h-5 w-5 text-white" />,
      title: "Ad Platform Integration",
      description: "Expanding API capabilities to connect with major ad platforms and developing the analytics dashboard.",
      isActive: false
    },
    {
      icon: <Rocket className="h-5 w-5 text-white" />,
      title: "Public Launch",
      description: "Official platform launch with full feature set and global availability for advertisers and publishers.",,
      isActive: false,
      isLast: true
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden" id="roadmap">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gray-800 text-indigo-300 mb-4">
            <span className="mr-2">🗓️</span>
            Development Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-gray-400 text-lg">
            From concept to launch, follow our development timeline as we build the future of ad verification.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={index}
                icon={milestone.icon}
                title={milestone.title}
                description={milestone.description}
                date={milestone.date}
                isActive={milestone.isActive}
                isLast={milestone.isLast}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
