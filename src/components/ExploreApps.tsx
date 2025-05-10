
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

const ExploreApps = () => {
  const [spotsLeft, setSpotsLeft] = useState(5678);
  const totalSpots = 10000;
  
  // Decrease spots left every hour
  useEffect(() => {
    const decreaseTimer = setInterval(() => {
      setSpotsLeft(prev => {
        const newValue = prev - Math.floor(Math.random() * 5) - 1;
        return newValue > 0 ? newValue : 0;
      });
    }, 60 * 60 * 1000); // every hour
    
    // Also update once at start to make sure user sees different number immediately
    setSpotsLeft(prev => prev - Math.floor(Math.random() * 10));
    
    return () => clearInterval(decreaseTimer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-solana-purple/10 blur-[120px] top-20 right-20" />
      
      <div className="solana-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Explore the most powerful collaboration of the year</span>
            </h2>
            <p className="text-white/70 text-xl mb-8">
              <span className="text-solana-blue font-bold">{spotsLeft.toLocaleString()}</span> out of <span className="text-white">{totalSpots.toLocaleString()}</span> 1SOL ABS airdrop spots left
            </p>
            <Button className="solana-button flex items-center gap-2">
              Connect Wallet <Wallet size={16} />
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-solana-purple/30 to-solana-blue/30 blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80" 
                alt="Collaboration Platform" 
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreApps;
