import React from 'react';
import { Trophy } from 'lucide-react';

const BuiltFor: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-900/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_60%)]"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 rounded-xl bg-indigo-500/10 mb-6">
            <Trophy className="h-8 w-8 text-indigo-400" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built for the $100K UpRock DePIN Catalyst Grant
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            This project is being submitted for the $100K UpRock DePIN Catalyst Grant 
            at Solana Breakpoint Singapore.
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-indigo-500/20">
            <p className="text-gray-300">
              The DeViewAI platform demonstrates the power of decentralized physical infrastructure 
              for solving real-world problems in the digital advertising ecosystem. By leveraging UpRock's 
              mobile DePIN network, we're creating a more transparent and fraud-resistant ad verification system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;