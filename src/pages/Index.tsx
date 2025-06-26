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
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import AlumniCompaniesSection from '../components/AlumniCompaniesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import UpskillTeamSection from '../components/UpskillTeamSection';

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
      <SuccessStoriesSection />
      <AlumniCompaniesSection />
      <TestimonialsSection />
      <UpskillTeamSection />
      <FooterSection />
      <StickyBottomCTA />
    </div>
  );
};

export default Index;
