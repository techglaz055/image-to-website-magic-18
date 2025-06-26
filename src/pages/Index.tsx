
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import MainContentWithStickyCard from '../components/MainContentWithStickyCard';
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
      <MainContentWithStickyCard />
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
