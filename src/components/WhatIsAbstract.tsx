
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const WhatIsAbstract = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black to-green-950/30">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[120px] -top-40 -left-40" />
      
      <div className="solana-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/30 to-green-400/30 blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" 
                alt="Abstract Platform" 
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">What is Abstract?</span>
              </h2>
              {/* Placeholder for SVG logo */}
              <div className="w-12 h-12 bg-transparent">
                {/* SVG logo will be inserted here */}
              </div>
            </div>
            <p className="text-white/70 text-lg mb-5">
              Abstract enables easy discovery and engagement with the best protocols on Solana. Instead of needing to navigate dozens of different interfaces, Abstract lets you access all your favorite programs from one place.
            </p>
            <p className="text-white/70 text-lg mb-8">
              With Abstract, you can discover, connect to, and use protocols across Solana from a single interface. Our goal is to provide a secure and user-friendly platform that simplifies your experience while interacting with the Solana ecosystem.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-green-400 text-white flex items-center gap-2 hover:opacity-90" onClick={() => window.open("https://www.abs.xyz/blog/articles/what-is-abstract", "_blank")}>
              Learn More <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAbstract;
