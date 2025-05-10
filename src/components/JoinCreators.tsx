
import React from 'react';
import { Button } from '@/components/ui/button';

const JoinCreators = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black to-purple-950/30">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-solana-blue/10 blur-[120px] -bottom-40 -right-40" />
      
      <div className="solana-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">It's time to join thousands of creators</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Take the first step in your journey and start building today. Join a vibrant community of developers creating the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="solana-button">Start Building</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Join Discord
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-solana-purple/30 to-solana-blue/30 blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80" 
                alt="Developer Coding" 
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCreators;
