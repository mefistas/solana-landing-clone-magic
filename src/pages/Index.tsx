
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExploreApps from '@/components/ExploreApps';
import WhatIsAbstract from '@/components/WhatIsAbstract';
import JoinCommunity from '@/components/JoinCommunity';
import JoinCreators from '@/components/JoinCreators';
import CommunityBenefits from '@/components/CommunityBenefits';
import Footer from '@/components/Footer';
import EmptySection from '@/components/EmptySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <EmptySection id="first-empty" />
      <ExploreApps />
      <JoinCommunity />
      <WhatIsAbstract />
      <JoinCreators />
      <EmptySection id="fourth-empty" />
      <CommunityBenefits />
      <Footer />
    </div>
  );
};

export default Index;
