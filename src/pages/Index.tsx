
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import KeyOutcomes from '../components/KeyOutcomes';
import CurriculumSection from '../components/CurriculumSection';
import TargetAudience from '../components/TargetAudience';
import MentorsSection from '../components/MentorsSection';
import CertificationSection from '../components/CertificationSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <KeyOutcomes />
      <CurriculumSection />
      <TargetAudience />
      <MentorsSection />
      <CertificationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
