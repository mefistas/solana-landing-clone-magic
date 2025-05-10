
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const JoinCommunity = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-solana-purple/20 blur-[120px] top-0 left-1/4" />
      
      <div className="solana-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Join a thriving community</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            The Solana community is growing at an incredible pace. Build alongside and learn from community leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Community Card 1 */}
          <div className="glass-card p-8 hover:border-white/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-white">Developer Resources</h3>
            <p className="text-white/70 mb-6">
              Get all the knowledge and tools you need to build decentralized applications and integrate with Solana.
            </p>
            <Button variant="link" className="text-solana-blue flex items-center gap-2 p-0">
              Join Discord <ExternalLink size={16} />
            </Button>
          </div>
          
          {/* Community Card 2 */}
          <div className="glass-card p-8 hover:border-white/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-white">Grant Program</h3>
            <p className="text-white/70 mb-6">
              Seed funding for new project ideas, developer tools and community growth initiatives.
            </p>
            <Button variant="link" className="text-solana-blue flex items-center gap-2 p-0">
              Apply Now <ExternalLink size={16} />
            </Button>
          </div>
          
          {/* Community Card 3 */}
          <div className="glass-card p-8 hover:border-white/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-white">Hackathons</h3>
            <p className="text-white/70 mb-6">
              Join thousands of builders creating projects and competing for prizes in our global hackathons.
            </p>
            <Button variant="link" className="text-solana-blue flex items-center gap-2 p-0">
              Learn More <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
