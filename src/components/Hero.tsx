
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-solana-purple/10 blur-[120px] -top-40 -left-40" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-solana-blue/10 blur-[120px] -bottom-40 -right-40" />
      
      <div className="solana-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Powerful for developers.</span>
            <br />
            <span className="text-white">Fast for everyone.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="solana-button px-8 py-6 text-lg">Get Started</Button>
            <Button variant="outline" className="border-white text-white px-8 py-6 text-lg hover:bg-white/10">Read Docs</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
