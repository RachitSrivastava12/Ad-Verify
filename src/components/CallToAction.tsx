import React from 'react';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Follow Our Journey
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with our progress and be the first to know when DeViewAI launches.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Connect With Us
                </h3>
                <p className="text-gray-400 mb-4">
                  Follow our development progress and join the conversation.
                </p>
                
                <div className="flex flex-col space-y-4">
                  <SocialLink
                    href="https://github.com/deviewai"
                    icon={<Github className="h-5 w-5" />}
                    label="GitHub"
                  />
                  
                  <SocialLink
                    href="https://twitter.com/deviewai"
                    icon={<Twitter className="h-5 w-5" />}
                    label="Twitter"
                  />
                  
                  <SocialLink
                    href="https://linkedin.com/company/deviewai"
                    icon={<Linkedin className="h-5 w-5" />}
                    label="LinkedIn"
                  />
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 md:p-8 w-full md:w-auto">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Stay Updated
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200 placeholder-gray-500"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    Subscribe to Updates
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </form>
                
                <p className="mt-4 text-xs text-gray-500">
                  We'll never share your email with anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;