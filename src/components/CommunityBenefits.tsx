
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CommunityBenefits = () => {
  const benefits = [
    {
      title: "Free Accounts",
      description: "No cost to create an account on the Solana network - get started immediately."
    },
    {
      title: "Fast Transactions",
      description: "Experience blazing fast transactions with sub-second finality."
    },
    {
      title: "Low Fees",
      description: "Pay only fractions of a penny per transaction, even during peak usage."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-solana-purple/20 blur-[120px] -top-40 right-0" />
      
      <div className="solana-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-solana-blue/30 to-solana-purple/30 blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80" 
                alt="Community Collaboration" 
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Join a community of millions</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Be part of a global network of developers, creators, and users building and using applications on Solana.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-solana-purple to-solana-blue flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{benefit.title}</h4>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="solana-button">Join Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBenefits;
