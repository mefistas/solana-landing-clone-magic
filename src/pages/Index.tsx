
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmptySection from '@/components/EmptySection';
import JoinCommunity from '@/components/JoinCommunity';
import JoinCreators from '@/components/JoinCreators';
import CommunityBenefits from '@/components/CommunityBenefits';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <EmptySection id="first-empty" />
      <EmptySection id="second-empty" />
      <JoinCommunity />
      <EmptySection id="third-empty" />
      <JoinCreators />
      <EmptySection id="fourth-empty" />
      <CommunityBenefits />
      <Footer />
    </div>
  );
};

export default Index;
