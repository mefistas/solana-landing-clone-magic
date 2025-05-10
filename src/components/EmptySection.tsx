
import React from 'react';

interface EmptySectionProps {
  id?: string;
}

const EmptySection: React.FC<EmptySectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      <div className="solana-container">
        <div className="glass-card p-8 md:p-12 min-h-[300px] flex items-center justify-center">
          <p className="text-white/50 text-lg">Content will be added here</p>
        </div>
      </div>
    </section>
  );
};

export default EmptySection;
