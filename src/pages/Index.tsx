
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import KeyOutcomes from '../components/KeyOutcomes';
import CurriculumSection from '../components/CurriculumSection';
import TargetAudience from '../components/TargetAudience';
import MentorsSection from '../components/MentorsSection';
import FAQSection from '../components/FAQSection';
import CertificationSection from '../components/CertificationSection';
import FooterSection from '../components/FooterSection';
import StickyBottomCTA from '../components/StickyBottomCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-24">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <KeyOutcomes />
      <CurriculumSection />
      <TargetAudience />
      <MentorsSection />
      <FAQSection />
      <CertificationSection />
      <FooterSection />
      <StickyBottomCTA />
    </div>
  );
};

export default Index;
